const phone = document.getElementById("phone");
const display = document.getElementById("display");
const led = document.getElementById("led");
const statusLine = document.getElementById("statusLine");
const instruction = document.getElementById("instruction");
const speakerButton = document.getElementById("speakerButton");
const messageAudio = document.getElementById("messageAudio");
const callControls = document.getElementById("callControls");
const pauseButton = document.getElementById("pauseButton");
const endButton = document.getElementById("endButton");
const afterCall = document.getElementById("afterCall");
const leaveButton = document.getElementById("leaveButton");
const hangButton = document.getElementById("hangButton");
const placeholder = document.getElementById("placeholder");

let audioCtx;
let ringTimer = null;
let answered = false;
let ended = false;

function initAudioContext() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function tone(frequency, duration, volume = 0.12, type = "square") {
  initAudioContext();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(volume, audioCtx.currentTime + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration + 0.01);
}

function ringBurst() {
  tone(440, 0.28, 0.16, "sine");
}

function startRinging() {
  phone.classList.add("ringing");
  // The visual ringing state starts immediately on page load.
  // Browsers may block audible autoplay until the first user gesture.
  ringBurst();
  ringTimer = setInterval(() => {
    if (!answered && !ended) ringBurst();
  }, 1100);
}

function stopRinging() {
  clearInterval(ringTimer);
  ringTimer = null;
  phone.classList.remove("ringing");
}

function hangupSound() {
  tone(145, 0.055, 0.11, "square");
  setTimeout(() => tone(92, 0.025, 0.08, "square"), 35);
}

function showControls() {
  callControls.hidden = false;
}

function answerCall() {
  if (answered || ended) return;

  answered = true;
  initAudioContext();
  stopRinging();
  tone(180, 0.045, 0.10, "square");

  led.classList.add("on");
  display.textContent = "LINE OPEN";
  statusLine.textContent = "SPEAKERPHONE ON";
  instruction.textContent = "Someone is listening.";
  speakerButton.disabled = true;
  showControls();

  messageAudio.currentTime = 0;
  messageAudio.play().catch(() => {
    instruction.textContent = "Press SPEAKER again to hear the message.";
    speakerButton.disabled = false;
  });
}

function togglePause() {
  if (!answered || ended) return;

  if (messageAudio.paused) {
    messageAudio.play();
    pauseButton.textContent = "PAUSE";
    pauseButton.classList.remove("paused");
    statusLine.textContent = "SPEAKERPHONE ON";
    instruction.textContent = "Someone is listening.";
  } else {
    messageAudio.pause();
    pauseButton.textContent = "RESUME";
    pauseButton.classList.add("paused");
    statusLine.textContent = "CALL PAUSED";
    instruction.textContent = "The call is paused.";
  }
}

function endCall(reason = "ended") {
  if (ended) return;
  ended = true;

  messageAudio.pause();
  stopRinging();

  led.classList.remove("on");
  display.textContent = "CALL ENDED";
  statusLine.textContent = "LINE QUIET";
  instruction.textContent = reason === "finished" ? "The call has ended." : "You ended the call.";
  callControls.hidden = true;
  speakerButton.disabled = true;

  hangupSound();

  setTimeout(() => {
    afterCall.hidden = false;
    afterCall.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1200);
}

speakerButton.addEventListener("click", answerCall);
pauseButton.addEventListener("click", togglePause);
endButton.addEventListener("click", () => endCall("manual"));

messageAudio.addEventListener("ended", () => endCall("finished"));

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

// Start the ringing state immediately when the page loads.
startRinging();
