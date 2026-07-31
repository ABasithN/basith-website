/* ---------------------------------------------
   UNSENT — engine
   Generic. Knows nothing about specific stories.
   Reads "draft" states from story data and animates
   the type/delete diff between them.
--------------------------------------------- */

(function () {

  const STORIES = window.STORIES || [];

  const appEl = document.getElementById('app');
  const contactNameEl = document.getElementById('contact-name');
  const threadEl = document.getElementById('thread');
  const composeTextEl = document.getElementById('compose-text');

  const PAUSE_RANGES = {
    short:  [500, 900],
    medium: [1200, 2000],
    long:   [2600, 4000]
  };

  function pauseDuration(tier) {
    const [min, max] = PAUSE_RANGES[tier] || PAUSE_RANGES.medium;
    return min + Math.random() * (max - min);
  }

  function typeDelay() {
    const base = 45 + Math.random() * 75;
    const hesitate = Math.random() < 0.05 ? 350 + Math.random() * 550 : 0;
    return base + hesitate;
  }

  function deleteDelay() {
    return 22 + Math.random() * 45;
  }

  function wait(ms, signal) {
    return new Promise((resolve, reject) => {
      if (signal.aborted) return reject(new DOMException('aborted', 'AbortError'));
      const id = setTimeout(resolve, ms);
      signal.addEventListener('abort', () => {
        clearTimeout(id);
        reject(new DOMException('aborted', 'AbortError'));
      }, { once: true });
    });
  }

function setComposeText(text) {
  composeTextEl.innerHTML =
    text + '<span id="cursor"></span>';
}

  function commonPrefixLength(a, b) {
    let i = 0;
    const max = Math.min(a.length, b.length);
    while (i < max && a[i] === b[i]) i++;
    return i;
  }

  // Animate the compose box from `fromText` to `toText`:
  // delete backward to the shared prefix, then type forward the rest.
  async function animateTransition(fromText, toText, signal) {
    const prefixLen = commonPrefixLength(fromText, toText);
    let current = fromText;

    while (current.length > prefixLen) {
      current = current.slice(0, -1);
      setComposeText(current);
      await wait(deleteDelay(), signal);
    }

    while (current.length < toText.length) {
      current = toText.slice(0, current.length + 1);
      setComposeText(current);
      await wait(typeDelay(), signal);
    }
  }

  function renderThread(story) {
  threadEl.innerHTML = '';
  let lastWhen = null;

  (story.history || []).forEach((msg) => {
    if (msg.when !== lastWhen) {
      const label = document.createElement('div');
      label.className = 'time-label';
      label.textContent = msg.when;
      threadEl.appendChild(label);
      lastWhen = msg.when;
    }
    const div = document.createElement('div');
    div.className = 'bubble history ' + (msg.from === 'me' ? 'me' : 'them');
    div.textContent = msg.text;
    threadEl.appendChild(div);
  });

  if (story.divider) {
  const label = document.createElement('div');
  label.className = 'time-label';
  label.textContent = story.divider;
  threadEl.appendChild(label);
}

   (story.existing || []).forEach((msg) => {
     const div = document.createElement('div');
     div.className = 'bubble ' + (msg.from === 'me' ? 'me' : 'them');
     div.textContent = msg.text;
     threadEl.appendChild(div);
   });
}

function appendSentBubble(text) {
  const div = document.createElement('div');
  div.className = 'bubble me sent-animate';
  div.textContent = text;
  threadEl.appendChild(div);
}

async function playStory(story, signal) {
  contactNameEl.textContent = story.contact || '';
  renderThread(story);
  setComposeText('');

    // A pause before typing begins — the conversation already existed,
    // the visitor just arrived.
    await wait(pauseDuration('medium'), signal);

    let current = '';
    for (const step of story.draft) {
      await animateTransition(current, step.text, signal);
      current = step.text;
      await wait(pauseDuration(step.pause || 'medium'), signal);
    }

    if (story.sent) {
      setComposeText('');
      appendSentBubble(current);
    }
    // If not sent, the drafted text is simply left sitting in the box —
    // that's the point. We don't clean it up before moving on.

  }

  // -------------------- playback loop --------------------

  let controller = null;
  let lastIndex = -1;
  let order = [];
  let orderPos = 0;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function nextStory() {
    if (orderPos >= order.length) {
      // Reshuffle, avoiding an immediate repeat of the last story shown.
      let reshuffled = shuffle(STORIES.map((_, i) => i));
      if (STORIES.length > 1 && reshuffled[0] === lastIndex) {
        [reshuffled[0], reshuffled[1]] = [reshuffled[1], reshuffled[0]];
      }
      order = reshuffled;
      orderPos = 0;
    }
    const idx = order[orderPos++];
    lastIndex = idx;
    return STORIES[idx];
  }

  async function advance(signal) {
    appEl.classList.add('fade');
    await wait(900, signal);
    const story = nextStory();
    appEl.classList.remove('fade');
    await runStory(story);
  }

  async function runStory(story) {
    controller = new AbortController();
    try {
      await playStory(story, controller.signal);
    } catch (err) {
      if (err.name !== 'AbortError') throw err;
    }
  }

  function skipToNext() {
    if (!controller) return;
    controller.abort();
    const fresh = new AbortController();
    controller = fresh;
    (async () => {
      appEl.classList.add('fade');
      await wait(900, fresh.signal).catch(() => {});
      const story = nextStory();
      appEl.classList.remove('fade');
      await runStory(story);
    })();
  }

 // -------------------- input: tap or swipe up --------------------

let touchStartY = null;
let lastAdvance = 0;
let introActive = true;

function triggerAdvance() {
  if (introActive) return; // intro screen has its own button, ignore taps until dismissed
  const now = Date.now();
  if (now - lastAdvance < 500) return;
  lastAdvance = now;
  skipToNext();
}

document.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (touchStartY === null) return;
  touchStartY = null;
  triggerAdvance();
}, { passive: true });

document.addEventListener('click', () => {
  triggerAdvance();
});

// -------------------- start --------------------

const introEl = document.getElementById('intro');
const beginBtn = document.getElementById('begin-btn');

beginBtn.addEventListener('click', () => {
  introActive = false;
  introEl.style.display = 'none';
  appEl.classList.remove('hidden');

  if (STORIES.length === 0) {
    console.warn('UNSENT: no stories found.');
  } else {
    runStory(nextStory());
  }
});

})();