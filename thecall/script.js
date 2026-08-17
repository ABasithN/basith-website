const speakerButton = document.getElementById("speakerButton");
const led = document.getElementById("led");
const ringAudio = document.getElementById("ringAudio");
const messageAudio = document.getElementById("messageAudio");
const callControls = document.getElementById("callControls");
const pauseButton = document.getElementById("pauseButton");
const endButton = document.getElementById("endButton");
const afterCall = document.getElementById("afterCall");
const leaveButton = document.getElementById("leaveButton");
const hangButton = document.getElementById("hangButton");
const placeholder = document.getElementById("placeholder");

let answered = false;
let ended = false;

function clickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 145;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.1, ctx.currentTime + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.055);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  } catch (_) {}
}

function startRinging() {
  // The visual call starts immediately.
  // Audible autoplay is subject to the browser's media-autoplay policy.
  ringAudio.loop = true;
  ringAudio.play().catch(() => {
    // Expected on browsers that block sound before a user gesture.
  });
}

function answerCall() {
  if (answered || ended) return;

  answered = true;
  ringAudio.pause();
  ringAudio.currentTime = 0;
  clickSound();

  led.classList.add("on");
  speakerButton.disabled = true;
  callControls.hidden = false;

  messageAudio.currentTime = 0;
  messageAudio.play().catch(() => {
    // A second tap can be used if the browser still requires a gesture.
    speakerButton.disabled = false;
  });
}

function togglePause() {
  if (!answered || ended) return;

  if (messageAudio.paused) {
    messageAudio.play();
    pauseButton.textContent = "PAUSE";
    pauseButton.classList.remove("paused");
  } else {
    messageAudio.pause();
    pauseButton.textContent = "RESUME";
    pauseButton.classList.add("paused");
  }
}

function endCall() {
  if (ended) return;
  ended = true;

  messageAudio.pause();
  ringAudio.pause();
  ringAudio.currentTime = 0;

  led.classList.remove("on");
  callControls.hidden = true;
  speakerButton.disabled = true;
  clickSound();

  setTimeout(() => {
    afterCall.hidden = false;
    afterCall.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1200);
}

speakerButton.addEventListener("click", answerCall);
pauseButton.addEventListener("click", togglePause);
endButton.addEventListener("click", endCall);
messageAudio.addEventListener("ended", endCall);

leaveButton.addEventListener("click", () => {
  placeholder.hidden = false;
});

hangButton.addEventListener("click", () => {
  afterCall.hidden = true;
});

// Start immediately on landing.
startRinging();
