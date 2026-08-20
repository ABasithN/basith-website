# THE OTHER SIDE v0.9

Standalone static build.

Changes in v0.9:
- Fixed landing and notification button event handling.
- Added ESCAPE BACK on the experience screen and ending screen.
- Uses "I'm from the agency" / "I am the client".
- Role reveal is "Well, you're the client now." / "Well, you're the agency now."
- WhatsApp is renamed WhatisUp.
- Slack is renamed Mycoresoft Teams.
- Teams includes an ecosystem of existing rooms: #brand-x-agency, #creative, #account, #production, #random, #general, plus direct messages.
- Notifications use a real button event handler and explicitly open the requested channel.
- Incoming scene content is only committed once the user opens the notification, avoiding duplicate inbound messages.
- User choices are typed and then appear as sent messages.
- Email remains threaded and preserves history.
- Three distinct experiences: The Brief, The Scope, The Campaign.
- Desktop laptop uses a locked 16:10 screen/device ratio.
- Mobile switches to a full-screen communication UI.

Deployment:
Upload index.html, styles.css and script.js to /theotherside/. Hard refresh after replacing files.
