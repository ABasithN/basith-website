# The Call — V5

This is the first proper integrated build.

Architecture:
- `background.png` is only the environment.
- The phone, handset, LCD, keypad, controls, green LED and coiled cord are HTML/CSS/SVG.
- The phone is positioned responsively over the wall.
- `audio/ring.mp3` is the telephone ring.
- `audio/message-01.mp3` is the current voice message.

Interaction:
INCOMING CALL + blinking ANSWER
→ SPEAKER
→ CALL IN PROGRESS + green LED + voice
→ HOLD / RESUME
→ END CALL
→ CALL ENDED + click
→ quiet follow-up

Browser note:
Some browsers prevent audible autoplay on page load. The ring is triggered on load, but the browser may suppress it until the first user gesture. The voice message is always initiated by the SPEAKER click.
