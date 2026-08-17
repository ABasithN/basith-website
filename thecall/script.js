const lcd = document.getElementById("lcd");
const answerPrompt = document.getElementById("answerPrompt");
const callLight = document.getElementById("callLight");
const speakerButton = document.getElementById("speakerButton");
const holdButton = document.getElementById("holdButton");
const endButton = document.getElementById("endButton");
const messageAudio = document.getElementById("messageAudio");
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

function answerCall() {
  if (answered || ended) return;

  answered = true;
  clickSound();

  lcd.textContent = "CALL IN PROGRESS";
  answerPrompt.classList.add("off");
  callLight.classList.add("on");
  speakerButton.disabled = true;

  messageAudio.currentTime = 0;
  messageAudio.play().catch(() => {});
}

function toggleHold() {
  if (!answered || ended) return;

  if (messageAudio.paused) {
    messageAudio.play().catch(() => {});
    holdButton.textContent = "HOLD";
    callLight.classList.remove("hold");
    lcd.textContent = "CALL IN PROGRESS";
  } else {
    messageAudio.pause();
    holdButton.textContent = "RESUME";
    callLight.classList.add("hold");
    lcd.textContent = "CALL ON HOLD";
  }
}

function endCall() {
  if (ended) return;

  ended = true;
  messageAudio.pause();

  lcd.textContent = "CALL ENDED";
  callLight.classList.remove("on", "hold");
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
endButton.addEventListener("click", endCall);
messageAudio.addEventListener("ended", endCall);
