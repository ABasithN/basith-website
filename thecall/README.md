# The Call — V2

This version adds visitor control during the call.

## Flow

1. The phone enters its ringing state immediately on page load.
2. Visitor presses SPEAKER.
3. Green LED turns on.
4. Message plays.
5. Visitor can PAUSE / RESUME at any time.
6. Visitor can END CALL at any time.
7. If the message finishes naturally, a short hang-up click plays.
8. Green LED turns off.
9. After a short silence, the leave-a-message prompt appears.

## Browser autoplay note

A browser may block audible ringing until the first user interaction. The phone's visual ringing state starts immediately. Once the visitor interacts with the page, the browser can play the generated ringing tone normally.

## Files

- index.html
- style.css
- script.js
- audio/message-01.mp3
