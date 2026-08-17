const lcd = document.getElementById("lcd");
const callLight = document.getElementById("callLight");
const speakerButton = document.getElementById("speakerButton");
const holdButton = document.getElementById("holdButton");
const endButton = document.getElementById("endButton");
const messageAudio = document.getElementById("messageAudio");
const afterCall = document.getElementById("afterCall");
const leaveButton = document.getElementById("leaveButton");
const hangButton = document.getElementById("hangButton");

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
  callLight.classList.add("on");
  speakerButton.disabled = true;

  messageAudio.currentTime = 0;
  messageAudio.play();
}

function toggleHold() {
  if (!answered || ended) return;

  if (messageAudio.paused) {
    messageAudio.play();
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
  callLight.classList.remove("on", "hold");
  lcd.textContent = "CALL ENDED";
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

leaveButton.addEventListener("click", () => {
  alert("Recording comes next.");
});

hangButton.addEventListener("click", () => {
  afterCall.hidden = true;
});
