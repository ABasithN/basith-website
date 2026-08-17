const phone = document.getElementById("phone");
const display = document.getElementById("display");
const led = document.getElementById("led");
const statusLine = document.getElementById("statusLine");
const instruction = document.getElementById("instruction");
const speakerButton = document.getElementById("speakerButton");
const messageAudio = document.getElementById("messageAudio");
const afterCall = document.getElementById("afterCall");
const leaveButton = document.getElementById("leaveButton");
const hangButton = document.getElementById("hangButton");
const placeholder = document.getElementById("placeholder");

let audioCtx;
let ringTimer = null;
let ringOsc = null;
let ringGain = null;
let answered = false;

function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function makeClick(duration = 0.045, frequency = 180) {
  initAudioContext();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "square";
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.11, audioCtx.currentTime + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration + 0.01);
}

function ringBurst() {
  initAudioContext();

  ringOsc = audioCtx.createOscillator();
  ringGain = audioCtx.createGain();
  ringOsc.type = "sine";
  ringOsc.frequency.value = 440;
  ringGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  ringGain.gain.exponentialRampToValueAtTime(0.16, audioCtx.currentTime + 0.02);
  ringGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.28);
  ringOsc.connect(ringGain).connect(audioCtx.destination);
  ringOsc.start();
  ringOsc.stop(audioCtx.currentTime + 0.3);
}

function startRinging() {
  phone.classList.add("ringing");
  ringBurst();
  ringTimer = setInterval(() => {
    if (!answered) ringBurst();
  }, 1100);
}

function stopRinging() {
  clearInterval(ringTimer);
  ringTimer = null;
  phone.classList.remove("ringing");
}

function hangupSound() {
  // Short synthetic handset-disconnect click, so no extra sound file is required.
  makeClick(0.055, 145);
  setTimeout(() => makeClick(0.025, 92), 35);
}

function answerCall() {
  if (answered) return;
  answered = true;

  initAudioContext();
  stopRinging();
  makeClick();

  led.classList.add("on");
  display.textContent = "LINE OPEN";
  statusLine.textContent = "SPEAKERPHONE ON";
  instruction.textContent = "Someone is listening.";

  messageAudio.currentTime = 0;
  messageAudio.play().catch(() => {
    instruction.textContent = "Press SPEAKER to hear the message.";
  });
}

function endCall() {
  led.classList.remove("on");
  display.textContent = "CALL ENDED";
  statusLine.textContent = "LINE QUIET";
  instruction.textContent = "The call has ended.";
  hangupSound();

  setTimeout(() => {
    afterCall.hidden = false;
    afterCall.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1200);
}

speakerButton.addEventListener("click", answerCall);

messageAudio.addEventListener("ended", endCall);

leaveButton.addEventListener("click", () => {
  placeholder.hidden = false;
  placeholder.textContent = "Message recording comes next.";
});

hangButton.addEventListener("click", () => {
  afterCall.hidden = true;
  instruction.textContent = "The line is quiet.";
  display.textContent = "STANDBY";
  statusLine.textContent = "NO ACTIVE CALL";
});

startRinging();
