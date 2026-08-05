/* ==========================================================================
   CONTACT — script.js

   ARCHITECTURE
   ------------
   This file is a state machine, not an animation script. There is exactly
   one piece of truth — StateMachine.current — and exactly one way to
   change it: StateMachine.transition(nextState, payload). State handlers
   below do two things only: (1) decide what the machine does and when,
   and (2) emit events describing what just happened. They never call
   audio, vibration, or analytics APIs directly — see EVENTS below.

   States: boot -> idle -> connecting -> handshake -> live -> collapsing -> idle

     boot        Diagnostics print, dial searches, window value resolves.
     idle        Machine is ready. The only thing the visitor can do is
                 press Establish Contact.
     connecting  Relay click, flicker, panel retracts, one second of
                 silence, "CONNECTION ESTABLISHED" is printed. The bridge
                 now exists, but nothing is running yet.
     handshake   The bridge is open. Nobody has spoken yet. Just "...".
                 Still no clock running — this is the machine doing its
                 own work, not the conversation.
     live        The first line lands ("Can you hear me?"), and only then
                 does the bridge timer appear and start counting down.
                 The rest of the conversation plays out from there.
     collapsing  Timer ran out (or conversation reached a natural end and
                 the bridge closed on it). Everything fades. Machine waits
                 for a different visitor.

   Every future feature — bridge failures, reconnects, interruptions,
   achievements — should be a new state (or a new payload on an existing
   one), never a one-off DOM write bolted on somewhere else.

   EVENTS
   ------
   State handlers emit; they don't wire. Anything that wants to react —
   audio, haptics, analytics, achievements, easter eggs — subscribes via
   the exposed machine instead of the state handlers calling out to it:

     window.CONTACT_MACHINE.on('relay-click',      cb)
     window.CONTACT_MACHINE.on('flicker',          cb)
     window.CONTACT_MACHINE.on('bridge-open',      cb)  // connection exists
     window.CONTACT_MACHINE.on('message',          cb)  // {text, speaker}
     window.CONTACT_MACHINE.on('choice',           cb)  // {label, next}
     window.CONTACT_MACHINE.on('bridge-tick',      cb)  // {remaining}
     window.CONTACT_MACHINE.on('bridge-collapse',  cb)
     window.CONTACT_MACHINE.on('state-change',     cb)  // {from, to, context}

   This file's own default reactions (relay click sound + haptic, screen
   flicker, ambient hum) are wired the same way, in the REACTIONS section
   near the bottom — they are subscribers, not special cases. A future
   audio.js/haptics.js/analytics.js only ever needs to call `.on(...)`;
   it never needs to touch a state handler above it.

   ANTICIPATION, NOT SPEED
   ------------------------
   Nothing here reacts instantly. Every transition the visitor can feel is
   passed through wait(ms) with a deliberate 300–1000ms hold. The TIMING
   object below is the single dial for all of that pacing — tune the
   machine's temperament there, not by hunting through the logic.

   DATA CONTRACT — conversations.js (not built yet; engine is ready for it)
   --------------------------------------------------------------------
   conversations.js must define `window.CONTACT_CONVERSATIONS`, an array of:

     {
       id: 'arctic-archive-01',        // unique, stable
       origin: 'ARCTIC ARCHIVE',       // shown in the origin readout
       durationRange: [180, 420],      // seconds; script.js rolls within it
       start: 'intro',                 // id of the first node
       nodes: {
         intro: {
           speaker: 'entity',          // 'entity' | 'system'
           lines: ['Can you hear me?'],// rendered one at a time
           choices: [                  // optional, max 3
             { label: 'YES', next: 'yes-1' },
             { label: 'WHO ARE YOU?', next: 'who-1' }
           ]
         },
         'yes-1': {
           speaker: 'entity',
           lines: ['...', "I don't have much time."],
           next: 'closing'             // no choices -> auto-advance
         },
         closing: {
           speaker: 'entity',
           lines: ["Please don't close this."],
           end: true                   // conversation rests here until the
                                        // bridge timer collapses it
         }
       }
     }

   Keep branches shallow. A conversation does not need to converge, and it
   does not need many choices — three meaningful ones beat twenty
   mechanical ones. Nodes are free to just dead-end with `end: true` and
   let the bridge timer be the thing that ends things, same as it would
   in life.

   Each connection also carries a `bridgeQuality` (0–1, rolled once per
   connection alongside its duration). Nothing reads it yet — it exists so
   that flicker frequency, dropped words, transmission delay, audio
   distortion, or collapse likelihood can later be derived from "this was
   a bad connection" without conversations.js ever knowing that concept
   exists. See the click handler and the `bridge-open` event payload.
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* TIMING — the machine's temperament, tuned in one place              */
  /* ------------------------------------------------------------------ */

  const TIMING = {
    boot: {
      lineDelay: 620,      // pause between each boot diagnostic line
      scrambleTime: 900,   // how long the window readout "calculates"
      readyHold: 850,      // pause after READY before the button wakes up
    },
    press: {
      beforeClick: 200,    // relay doesn't click the instant you touch it
      flicker: 260,        // display flicker after the click
      retract: 420,        // panel retract / conversation area expand
      silence: 1000,       // "one second of silence"
    },
    handshake: {
      beforeEllipsis: 550,
      ellipsisHold: 1500,
      beforeFirstLine: 750,
    },
    live: {
      lineGap: 1800,          // pause before each line within a node
      beforeChoices: 1400,    // pause after the last line before choices appear
      beforeAutoAdvance: 1700,// pause before an auto-advancing node continues
      afterChoicePick: 1200,  // pause after the visitor picks, before reply
      urgentBelow: 15,       // seconds remaining before the timer pulses
    },
    collapse: {
      beforeMessage: 450,
      hold: 2800,            // how long the collapse message sits before idle
    },
  };

  /* ------------------------------------------------------------------ */
  /* DOM REFERENCES                                                      */
  /* ------------------------------------------------------------------ */

  const unitEl = document.querySelector('.unit');
  const unitIdEl = document.getElementById('unitId');
  const bootLogEl = document.getElementById('bootLog');
  const windowValueEl = document.getElementById('windowValue');
  const gaugeTicksEl = document.getElementById('gaugeTicks');
  const gaugeNeedleEl = document.getElementById('gaugeNeedle');
  const gaugeFaceEl = document.getElementById('gaugeFace');
  const transmissionFaceEl = document.getElementById('transmissionFace');
  const transmissionStreamEl = document.getElementById('transmissionStream');
  const originLabelEl = document.getElementById('originLabel');
  const bridgeTimerEl = document.getElementById('bridgeTimer');
  const contactButtonEl = document.getElementById('contactButton');
  const choicesEl = document.getElementById('choices');
  const statusTextEl = document.getElementById('statusText');
  const screenFlashEl = document.getElementById('screenFlash');

  /* ------------------------------------------------------------------ */
  /* UTILITIES                                                           */
  /* ------------------------------------------------------------------ */

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = (arr) => arr[randomInt(0, arr.length - 1)];

  function formatMMSS(totalSeconds) {
    const s = Math.max(0, Math.round(totalSeconds));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  }

  /* ------------------------------------------------------------------ */
  /* EVENT BUS — the only way anything outside a state reacts to it       */
  /* ------------------------------------------------------------------ */

  const Emitter = (() => {
    const listeners = new Map();

    function on(event, fn) {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event).add(fn);
      return () => off(event, fn);
    }

    function off(event, fn) {
      if (listeners.has(event)) listeners.get(event).delete(fn);
    }

    function emit(event, detail) {
      if (!listeners.has(event)) return;
      // Snapshot before iterating: a subscriber unsubscribing itself
      // mid-emit must not skip or double-fire a sibling listener.
      Array.from(listeners.get(event)).forEach((fn) => {
        try { fn(detail); } catch (err) {
          // A broken subscriber (bad audio.js, bad analytics hook) must
          // never be able to take down the state machine.
          console.error(`[CONTACT] listener for "${event}" threw:`, err);
        }
      });
    }

    return { on, off, emit };
  })();

  function vibrate(pattern) {
    if (navigator.vibrate) {
      try { navigator.vibrate(pattern); } catch (_) { /* ignore */ }
    }
  }

  /* ------------------------------------------------------------------ */
  /* RENDER HELPERS — the only place that touches these elements          */
  /* ------------------------------------------------------------------ */

  function setUnitId() {
    unitIdEl.textContent = `FIELD UNIT ${String(randomInt(0, 99999)).padStart(5, '0')}`;
  }

  function buildGaugeTicks() {
    gaugeTicksEl.innerHTML = '';
    const ns = 'http://www.w3.org/2000/svg';
    const START = -150;
    const END = 150;
    const STEP = 15;
    for (let angle = START; angle <= END; angle += STEP) {
      const isMajor = angle % 45 === 0;
      const line = document.createElementNS(ns, 'line');
      line.setAttribute('x1', '100');
      line.setAttribute('y1', isMajor ? '10' : '14');
      line.setAttribute('x2', '100');
      line.setAttribute('y2', '22');
      line.setAttribute('transform', `rotate(${angle} 100 100)`);
      if (isMajor) line.classList.add('tick--major');
      gaugeTicksEl.appendChild(line);
    }
  }

  function setNeedleAngle(deg) {
    gaugeNeedleEl.style.transform = `rotate(${deg}deg)`;
  }

  /** Scrambles the window readout for `duration`ms, then settles on a
   * final random value and points the needle at it. */
  async function scrambleWindowValue(duration) {
    const start = performance.now();
    while (performance.now() - start < duration) {
      const a = randomInt(0, 99);
      const b = randomInt(0, 99);
      windowValueEl.textContent = `${String(a).padStart(2, '0')}.${String(b).padStart(2, '0')}`;
      // eslint-disable-next-line no-await-in-loop
      await wait(65);
    }
    const finalA = randomInt(0, 99);
    const finalB = randomInt(0, 99);
    windowValueEl.textContent = `${String(finalA).padStart(2, '0')}.${String(finalB).padStart(2, '0')}`;
    const fraction = (finalA * 100 + finalB) / 9999;
    setNeedleAngle(-46 + fraction * 92);
  }

  function appendBootLine(text, { final = false } = {}) {
    const li = document.createElement('li');
    li.textContent = text;
    if (final) li.dataset.final = 'true';
    bootLogEl.appendChild(li);
  }

  function clearBootLog() {
    bootLogEl.innerHTML = '';
  }

  function setFace(face) {
    // face: 'gauge' | 'transmission'
    gaugeFaceEl.hidden = face !== 'gauge';
    transmissionFaceEl.hidden = face !== 'transmission';
  }

  function clearTransmissionStream() {
    transmissionStreamEl.innerHTML = '';
  }

  function appendMessage(text, { speaker = 'entity' } = {}) {
    const el = document.createElement('p');
    el.classList.add('message');
    if (speaker === 'system') el.classList.add('message--system');
    if (speaker === 'visitor') el.classList.add('message--visitor');
    el.textContent = text;
    transmissionStreamEl.appendChild(el);
    transmissionStreamEl.scrollTop = transmissionStreamEl.scrollHeight;
    Emitter.emit('message', { text, speaker });
    return el;
  }

  function appendPendingEllipsis() {
    const el = document.createElement('p');
    el.classList.add('pending-ellipsis');
    el.textContent = '...';
    transmissionStreamEl.appendChild(el);
    return el;
  }

  function setOrigin(origin) {
    originLabelEl.textContent = origin;
  }

  function setTimerPlaceholder() {
    bridgeTimerEl.textContent = '—:—';
    bridgeTimerEl.removeAttribute('data-urgent');
  }

  function setBridgeTimerDisplay(seconds) {
    bridgeTimerEl.textContent = formatMMSS(seconds);
    if (seconds <= TIMING.live.urgentBelow) {
      bridgeTimerEl.setAttribute('data-urgent', 'true');
    } else {
      bridgeTimerEl.removeAttribute('data-urgent');
    }
  }

  function setButtonEnabled(enabled) {
    contactButtonEl.disabled = !enabled;
    contactButtonEl.setAttribute('aria-disabled', String(!enabled));
  }

  function hideChoices() {
    choicesEl.hidden = true;
    choicesEl.innerHTML = '';
  }

  function showChoices(choices, onPick) {
    choicesEl.innerHTML = '';
    choices.slice(0, 3).forEach((choice) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice';
      btn.textContent = choice.label;
      btn.addEventListener('click', () => {
        // One-shot control: disable the whole group the instant one is
        // pressed so a double-tap can't fire two paths.
        Array.from(choicesEl.children).forEach((c) => { c.disabled = true; });
       setStatus('● RECEIVING...');

Emitter.emit('choice', {
    label: choice.label,
    next: choice.next
});

onPick(choice);
      });
      choicesEl.appendChild(btn);
    });
setStatus('● AWAITING RESPONSE');     
choicesEl.hidden = false;
  }

  function setStatus(text) {
    statusTextEl.textContent = text;
  }

  function triggerFlicker() {
    Emitter.emit('flicker');
  }

  /* ------------------------------------------------------------------ */
  /* BRIDGE TIMER — owned by the live phase of a connection, only         */
  /* ------------------------------------------------------------------ */

  const BridgeTimer = (() => {
    let remaining = 0;
    let intervalId = null;
    let onExpire = null;

    function start(seconds, expireCallback) {
      stop();
      remaining = seconds;
      onExpire = expireCallback;
      setBridgeTimerDisplay(remaining);
      Emitter.emit('bridge-tick', { remaining });
      intervalId = setInterval(() => {
        remaining -= 1;
        setBridgeTimerDisplay(remaining);
        Emitter.emit('bridge-tick', { remaining });
        if (remaining <= 0) {
          stop();
          if (onExpire) onExpire();
        }
      }, 1000);
    }

    function stop() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    return { start, stop };
  })();

  /* ------------------------------------------------------------------ */
  /* STATE MACHINE CORE                                                   */
  /* ------------------------------------------------------------------ */

  const StateMachine = (() => {
    let current = null;
    let context = {};
    const handlers = {};
    let transitioning = false;

    function register(name, handler) {
      handlers[name] = handler;
    }

    async function transition(next, payload = {}) {
      // Transitions are serialized. A state is never interrupted mid-enter
      // by another transition firing from a stray event.
      if (transitioning) return;
      transitioning = true;
      try {
        const prev = handlers[current];
        if (prev && typeof prev.exit === 'function') {
          await prev.exit(context);
        }
        const from = current;
        current = next;
        context = payload;
        unitEl.dataset.state = next;
        Emitter.emit('state-change', { from, to: next, context: payload });
        const handler = handlers[next];
        transitioning = false; // enter() may itself request transitions
        if (handler && typeof handler.enter === 'function') {
          await handler.enter(context);
        }
      } finally {
        transitioning = false;
      }
    }

    return {
      register,
      transition,
      on: Emitter.on,
      off: Emitter.off,
      get current() { return current; },
    };
  })();

  // Exposed for future modules (audio.js, haptics.js, analytics.js, ...).
  // They subscribe here; they never call into the state handlers above.
  window.CONTACT_MACHINE = StateMachine;

  /* ------------------------------------------------------------------ */
  /* STATE: boot                                                          */
  /* ------------------------------------------------------------------ */

  StateMachine.register('boot', {
    async enter() {
      setUnitId();
      buildGaugeTicks();
      setFace('gauge');
      clearBootLog();
      setButtonEnabled(false);
      setStatus('Initializing');

      const lines = [
        'INITIALIZING CORE',
        'CHECKING TEMPORAL CLOCK',
        'CALCULATING WINDOW',
        'VERIFYING BRIDGE STABILITY',
      ];

      for (const line of lines) {
        // eslint-disable-next-line no-await-in-loop
        await wait(TIMING.boot.lineDelay);
        appendBootLine(line);
        if (line === 'CALCULATING WINDOW') {
          // eslint-disable-next-line no-await-in-loop
          await scrambleWindowValue(TIMING.boot.scrambleTime);
        }
      }

      await wait(TIMING.boot.lineDelay);
      appendBootLine('READY', { final: true });
      setStatus('Ready');
      await wait(TIMING.boot.readyHold);

      StateMachine.transition('idle');
    },
  });

  /* ------------------------------------------------------------------ */
  /* STATE: idle                                                          */
  /* ------------------------------------------------------------------ */

  StateMachine.register('idle', {
    async enter() {
      setFace('gauge');
      setButtonEnabled(true);
      setStatus('● AWAITING CONTACT');
    },
    async exit() {
      setButtonEnabled(false);
    },
  });

  /* ------------------------------------------------------------------ */
  /* STATE: connecting — the bridge is built, nothing is running yet      */
  /* ------------------------------------------------------------------ */

  StateMachine.register('connecting', {
    async enter(ctx) {
      setStatus('● RECEIVING TRANSMISSION');

      await wait(TIMING.press.beforeClick);
      Emitter.emit('relay-click');
      triggerFlicker();

      await wait(TIMING.press.flicker);
      setFace('transmission');
      clearTransmissionStream();
      hideChoices();
      setOrigin(ctx.conversation.origin);
      setTimerPlaceholder(); // the clock does not exist yet — see live()

      await wait(TIMING.press.retract);
      await wait(TIMING.press.silence);

      
      setStatus('● SIGNAL STABLE');
      Emitter.emit('bridge-open', {
        origin: ctx.conversation.origin,
        bridgeQuality: ctx.bridgeQuality,
      });

      StateMachine.transition('handshake', ctx);
    },
  });

  /* ------------------------------------------------------------------ */
  /* STATE: handshake — the machine's own work, no clock running          */
  /* ------------------------------------------------------------------ */

  StateMachine.register('handshake', {
    async enter(ctx) {
      await wait(TIMING.handshake.beforeEllipsis);
      const ellipsis = appendPendingEllipsis();

      await wait(TIMING.handshake.ellipsisHold);
      ellipsis.remove();

      await wait(TIMING.handshake.beforeFirstLine);

      StateMachine.transition('live', ctx);
    },
  });

  /* ------------------------------------------------------------------ */
  /* STATE: live — first line lands, then the timer appears, then the     */
  /* rest of the conversation plays out                                  */
  /* ------------------------------------------------------------------ */

  StateMachine.register('live', {
    async enter(ctx) {
     setStatus('● RECEIVING...'); 
      await playNode(ctx.conversation, ctx.conversation.start, {
        // Fires once, after the very first line of the whole connection —
        // "Can you hear me?" lands, and only then does the clock start.
        onFirstLineShown: () => {
          BridgeTimer.start(ctx.duration, () => {
            Emitter.emit('bridge-collapse');
            StateMachine.transition('collapsing', ctx);
          });
        },
      });
    },
    async exit() {
      hideChoices();
      BridgeTimer.stop();
    },
  });

  async function playNode(conversation, nodeId, opts = {}) {
    // A stale timer callback (bridge already collapsed) can still have a
    // playNode() in flight — guard every step against the state having
    // moved on without us.
    const node = conversation.nodes[nodeId];
    if (!node || StateMachine.current !== 'live') return;

    hideChoices();
    let onFirstLineShown = opts.onFirstLineShown || null;

    for (const line of node.lines) {
      // eslint-disable-next-line no-await-in-loop
      await wait(TIMING.live.lineGap);
      if (StateMachine.current !== 'live') return;
      appendMessage(line, { speaker: node.speaker });
      if (onFirstLineShown) {
        onFirstLineShown();
        onFirstLineShown = null; // only ever the very first line, ever
      }
    }

    if (StateMachine.current !== 'live') return;

    if (node.choices && node.choices.length) {
      await wait(TIMING.live.beforeChoices);
      if (StateMachine.current !== 'live') return;
      showChoices(node.choices, async (choice) => {

    appendMessage(choice.label, { speaker: 'visitor' });

    await wait(TIMING.live.afterChoicePick);

    console.log("NEXT NODE:", choice.next);

    await playNode(conversation, choice.next);

});
    } else if (node.next) {

    await wait(TIMING.live.beforeAutoAdvance);

    console.log("AUTO:", node.next);

    await playNode(conversation, node.next);

}
// node.end (or no continuation): the conversation rests here.
// The bridge timer, not the dialogue tree, decides when it's over.


  }

  /* ------------------------------------------------------------------ */
  /* STATE: collapsing                                                    */
  /* ------------------------------------------------------------------ */

  StateMachine.register('collapsing', {
    async enter() {
      hideChoices();
      setStatus('● SIGNAL LOST');
      triggerFlicker();

      await wait(TIMING.collapse.beforeMessage);
      appendMessage('BRIDGE COLLAPSED', { speaker: 'system' });

      await wait(TIMING.collapse.hold);

      StateMachine.transition('idle');
    },
    async exit() {
      setFace('gauge');
      clearTransmissionStream();
    },
  });

  /* ------------------------------------------------------------------ */
  /* REACTIONS — default subscribers, wired the same way any future       */
  /* module (audio.js, haptics.js, analytics.js) would wire itself         */
  /* ------------------------------------------------------------------ */

  Emitter.on('relay-click', () => {
    vibrate(12);
    if (window.CONTACT_AUDIO && typeof window.CONTACT_AUDIO.relayClick === 'function') {
      try { window.CONTACT_AUDIO.relayClick(); } catch (_) { /* never break the UI */ }
    }
  });

  Emitter.on('flicker', () => {
    screenFlashEl.classList.remove('is-flashing');
    // Force reflow so the animation can retrigger back-to-back.
    // eslint-disable-next-line no-unused-expressions
    screenFlashEl.offsetHeight;
    screenFlashEl.classList.add('is-flashing');
  });

  Emitter.on('bridge-open', () => {
    if (window.CONTACT_AUDIO && typeof window.CONTACT_AUDIO.transmissionBurst === 'function') {
      try { window.CONTACT_AUDIO.transmissionBurst(); } catch (_) { /* ignore */ }
    }
  });

  Emitter.on('choice', () => vibrate(8));

  Emitter.on('state-change', ({ to }) => {
    const hum = window.CONTACT_AUDIO && window.CONTACT_AUDIO.hum;
    if (typeof hum !== 'function') return;
    try { hum(to === 'boot' || to === 'idle'); } catch (_) { /* ignore */ }
  });

  /* ------------------------------------------------------------------ */
  /* INTERACTION                                                          */
  /* ------------------------------------------------------------------ */

  contactButtonEl.addEventListener('click', () => {
    if (StateMachine.current !== 'idle' || contactButtonEl.disabled) return;

    const conversations = (window.CONTACT__INVESTIGATIVE_CONVERSATIONS || []).filter(Boolean);

function pickWeighted(list) {

    const pool = [];

    list.forEach(conversation => {

       const weight = {
    common: 80,
    uncommon: 17,
    rare: 3
}[conversation.rarity] || 80;

for (let i = 0; i < weight; i++) {
    pool.push(conversation);
}

    });

    return pick(pool);

}

const conversation = pickWeighted(conversations);

    if (!conversation) return; // conversations.js not loaded — fail quiet, stay idle

    const duration = conversation.bridgeDuration || 75;
    // Rolled once per connection. Unused today; exists so future effects
    // (flicker rate, dropped words, distortion, early-collapse odds) can
    // be derived from "this was a bad connection" without touching
    // conversations.js or this click handler again.
    const bridgeQuality = Math.random();

    StateMachine.transition('connecting', { conversation, duration, bridgeQuality });
  });

  // Autoplay policies require a real gesture before audio can play.
  // One-time, passive, and harmless if audio.js never defines anything.
  document.addEventListener('pointerdown', () => {
    if (window.CONTACT_AUDIO && typeof window.CONTACT_AUDIO.unlock === 'function') {
      try { window.CONTACT_AUDIO.unlock(); } catch (_) { /* ignore */ }
    }
  }, { once: true });

  /* ------------------------------------------------------------------ */
  /* BOOTSTRAP                                                            */
  /* ------------------------------------------------------------------ */

  StateMachine.transition('boot');
})();
