# The Phone — V1

A tiny one-call prototype.

## Current flow

1. Phone rings automatically.
2. Visitor presses SPEAKER.
3. Green LED turns on.
4. `audio/message-01.wav` plays.
5. When audio ends, a telephone-style disconnect click plays.
6. Green LED turns off.
7. After a short silence, the leave-a-message prompt appears.

## Files

- `index.html`
- `style.css`
- `script.js`
- `audio/message-01.wav`

## Run locally

Because browsers can restrict audio behavior when opening files directly, the easiest local test is VS Code + Live Server, or any simple local web server.

For example, from this folder:

`python3 -m http.server 8000`

Then open:

`http://localhost:8000`

## Next build stages

- Replace the CSS phone with the final designed phone object.
- Add the real speakerphone/ringing sound assets if desired.
- Add five-message daily pool.
- Add visitor message recording.
- Add moderation/storage.
- Add five-minute return logic.
