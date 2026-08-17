# The Call — V3

This version uses the photographic telephone as the only phone on the page.

Fixes:
- Removes the duplicate HTML/CSS telephone.
- Removes the duplicate "Someone is calling." text below the image.
- Adds a transparent clickable hotspot over the photographed SPEAKER button.
- Adds a real green LED overlay over the photographed CALL light.
- Fixes the JavaScript so it no longer tries to access the removed CSS phone elements.
- Includes a ring sound and the working message audio.
- Keeps PAUSE / RESUME and END CALL.

Important browser limitation:
Browsers can block audible autoplay on first page load. The visual phone is therefore immediately in the incoming-call state, but the audible ring may not begin until the visitor has interacted with the page. The message itself is triggered by the SPEAKER click, so it can play after that user gesture.
