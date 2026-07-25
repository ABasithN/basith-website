/* ---------------------------------------------
   Story: Dad
   Format guide:
   - existing: message(s) already on screen when the page loads
   - draft: an ordered list of "settled" states the compose
     box passes through. The engine auto-computes the type/
     delete animation between each state by diffing the text.
     Just write what's fully visible at each pause — no need
     to spell out individual keystrokes.
   - pause: "short" | "medium" | "long" — how long it sits
     before the next change begins
   - sent: true -> becomes a blue bubble in the thread
           false -> stays in the box, never sent
--------------------------------------------- */

window.STORIES = window.STORIES || [];
window.STORIES.push({
  contact: "Dad",

  existing: [
    { from: "them", text: "Drive safe." }
  ],

  draft: [
    { text: "I got the promotion today.", pause: "medium" },
    { text: "", pause: "short" },
    { text: "I wish you were the first person I could tell.", pause: "long" },
    { text: "I wish you were here.", pause: "long" },
    { text: "Hope you're sleeping well.", pause: "long" }
  ],

  sent: false
});
