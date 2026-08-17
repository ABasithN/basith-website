const lcdMain = document.getElementById("lcdMain");
const answerPrompt = document.getElementById("answerPrompt");
const callLed = document.getElementById("callLed");
const speakerButton = document.getElementById("speakerButton");
const holdButton = document.getElementById("holdButton");
const endButton = document.getElementById("endButton");
const messageAudio = document.getElementById("messageAudio");
const ringAudio = document.getElementById("ringAudio");
const afterCall = document.getElementById("afterCall");

let answered = false;
let ended = false;

function clickSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 145;
    gain.gain.setValueAtTime(.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.09, ctx.currentTime + .005);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .055);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + .07);
  } catch (_) {}
}

function startRing() {
  ringAudio.currentTime = 0;
  ringAudio.play().catch(() => {
    // Browser may block audible autoplay until the first interaction.
  });
}

function answerCall() {
  if (answered || ended) return;

  answered = true;
  ringAudio.pause();
  ringAudio.currentTime = 0;
  clickSound();

  lcdMain.textContent = "CALL IN PROGRESS";
  answerPrompt.classList.add("off");
  callLed.classList.add("on");
  speakerButton.disabled = true;

  messageAudio.currentTime = 0;
  messageAudio.play().catch(() => {
    speakerButton.disabled = false;
  });
}

function toggleHold() {
  if (!answered || ended) return;

  if (messageAudio.paused) {
    messageAudio.play().catch(() => {});
    holdButton.textContent = "HOLD";
    callLed.classList.remove("hold");
    lcdMain.textContent = "CALL IN PROGRESS";
  } else {
    messageAudio.pause();
    holdButton.textContent = "RESUME";
    callLed.classList.add("hold");
    lcdMain.textContent = "CALL ON HOLD";
  }
}

function finishCall() {
  if (ended) return;

  ended = true;
  ringAudio.pause();
  messageAudio.pause();
  messageAudio.currentTime = messageAudio.currentTime;

  lcdMain.textContent = "CALL ENDED";
  answerPrompt.classList.add("off");
  callLed.classList.remove("on", "hold");
  speakerButton.disabled = true;
  holdButton.disabled = true;
  endButton.disabled = true;

  clickSound();

  setTimeout(() => {
    afterCall.hidden = false;
    afterCall.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1200);
}

speakerButton.addEventListener("click", answerCall);
holdButton.addEventListener("click", toggleHold);
endButton.addEventListener("click", finishCall);
messageAudio.addEventListener("ended", finishCall);

startRing();
