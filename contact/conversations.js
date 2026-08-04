window.CONTACT_CONVERSATIONS = [

{
  id: "001",

  title: "First Contact",

  rarity: "common",

  origin: "UNKNOWN",

  bridgeDuration: 78,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "Can you hear me?",

        "..."

      ],

      choices: [

        {
          label: "Yes.",
          next: "yes"
        },

        {
          label: "Who's this?",
          next: "who"
        },

        {
          label: "Go on.",
          next: "yes"
        }

      ]

    },

    yes: {

      speaker: "future",

      lines: [

        "Thank God.",

        "I wasn't sure anyone still could.",

        "I've opened this bridge hundreds of times.",

        "You're the first voice that's ever come back."

      ],

      next: "middle"

    },

    who: {

      speaker: "future",

      lines: [

        "I wish I knew how to answer that.",

        "Names don't travel very well across this bridge.",

        "Just... don't leave yet."

      ],

      next: "middle"

    },

    middle: {

      speaker: "future",

      lines: [

        "Can I ask you something?",

        "Not because you can help.",

        "Because you can still answer."

      ],

      choices: [

        {
          label: "Ask me.",
          next: "endA"
        },

        {
          label: "I'm listening.",
          next: "endA"
        },

        {
          label: "Depends.",
          next: "endB"
        }

      ]

    },

    endA: {

      speaker: "future",

      lines: [

        "Do ordinary days still feel ordinary?",

        "...",

        "Promise me you won't rush through them.",

        "You only notice they're precious after they're gone.",

        "...",

        "Wait.",

        "No..."

      ],

      end: true

    },

    endB: {

      speaker: "future",

      lines: [

        "Fair enough.",

        "You don't owe strangers your time.",

        "...",

        "Thank you for giving me a little of it anyway.",

        "...",

        "The bridge is—"

      ],

      end: true

    }

  }

}, 


{

  id: "002",

  title: "The Photograph",

  rarity: "common",

  origin: "RESIDENTIAL ARCHIVE",

  bridgeDuration: 73,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "Do you still print photographs?"

      ],

      choices: [

        {
          label: "Sometimes.",
          next: "yes"
        },

        {
          label: "No.",
          next: "no"
        },

        {
          label: "Why?"
        ,
          next: "why"
        }

      ]

    },

    yes: {

      speaker: "future",

      lines: [

        "Keep doing it.",

        "Digital memories disappear more quietly than people."

      ],

      next: "common"

    },

    no: {

      speaker: "future",

      lines: [

        "Print one.",

        "Just one."

      ],

      next: "common"

    },

    why: {

      speaker: "future",

      lines: [

        "Because one day you'll search for a face.",

        "And a screen won't be enough."

      ],

      next: "common"

    },

    common: {

      speaker: "future",

      lines: [

        "There's a picture beside me.",

        "I've looked at it so many times the paper has become soft.",

        "I don't remember when it was taken anymore.",

        "Only that everyone in it thought there'd be another one.",

        "...",

        "Keep one photograph somewhere safe.",

        "Not for today.",

        "For the version of you that will need it."

      ],

      end: true

    }

  }

}, 


{
  id: "003",

  title: "Wrong Connection",

  rarity: "common",

  origin: "UNKNOWN",

  bridgeDuration: 71,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "...",

        "You're not the person I was trying to reach."

      ],

      choices: [

        { label: "Sorry.", next: "sorry" },

        { label: "Who were you looking for?", next: "who" },

        { label: "I'm here now.", next: "here" }

      ]

    },

    sorry: {

      speaker: "future",

      lines: [

        "Don't be.",

        "Bridges don't always connect where we expect."

      ],

      next: "middle"

    },

    who: {

      speaker: "future",

      lines: [

        "Someone who promised they'd answer.",

        "I still check anyway."

      ],

      next: "middle"

    },

    here: {

      speaker: "future",

      lines: [

        "You are.",

        "Maybe that's enough."

      ],

      next: "middle"

    },

    middle: {

      speaker: "future",

      lines: [

        "Can I ask you something strange?"

      ],

      choices: [

        { label: "Sure.", next: "end" },

        { label: "Go on.", next: "end" },

        { label: "Depends.", next: "end2" }

      ]

    },

    end: {

      speaker: "future",

      lines: [

        "If someone stopped waiting for you...",

        "...would you know?",

        "...",

        "I hope they knew I tried."

      ],

      end: true

    },

    end2: {

      speaker: "future",

      lines: [

        "Fair.",

        "Questions are expensive across this bridge.",

        "...",

        "Goodbye."

      ],

      end: true

    }

  }

},


{
  id: "004",

  title: "The Rain",

  rarity: "common",

  origin: "WEATHER OBSERVATORY",

  bridgeDuration: 76,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "Is it raining where you are?"

      ],

      choices: [

        { label: "Yes.", next: "yes" },

        { label: "No.", next: "no" },

        { label: "Why?", next: "why" }

      ]

    },

    yes: {

      speaker: "future",

      lines: [

        "Stay outside a little longer."

      ],

      next: "middle"

    },

    no: {

      speaker: "future",

      lines: [

        "I hope it does soon."

      ],

      next: "middle"

    },

    why: {

      speaker: "future",

      lines: [

        "Because I can't remember what it sounds like anymore."

      ],

      next: "middle"

    },

    middle: {

      speaker: "future",

      lines: [

        "I spent years running from the rain.",

        "Then one day it stopped coming.",

        "...",

        "Funny what becomes precious."

      ],

      choices: [

        { label: "I'll remember.", next: "end" },

        { label: "I'm sorry.", next: "end" },

        { label: "What happened?", next: "end2" }

      ]

    },

    end: {

      speaker: "future",

      lines: [

        "Thank you.",

        "Stand in the next storm for both of us."

      ],

      end: true

    },

    end2: {

      speaker: "future",

      lines: [

        "I don't think there's enough bridge left to explain."

      ],

      end: true

    }

  }

},


{
  id: "005",

  title: "The Promise",

  rarity: "common",

  origin: "PRIVATE CHANNEL",

  bridgeDuration: 82,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "Have you ever broken a promise?"

      ],

      choices: [

        { label: "Yes.", next: "yes" },

        { label: "No.", next: "no" },

        { label: "Maybe.", next: "maybe" }

      ]

    },

    yes: {

      speaker: "future",

      lines: [

        "Then you already know."

      ],

      next: "middle"

    },

    no: {

      speaker: "future",

      lines: [

        "I hope you never do."

      ],

      next: "middle"

    },

    maybe: {

      speaker: "future",

      lines: [

        "Those are usually the ones that hurt the most."

      ],

      next: "middle"

    },

    middle: {

      speaker: "future",

      lines: [

        "I kept telling myself there would be tomorrow.",

        "Tomorrow is a dangerous word.",

        "...",

        "It always sounds closer than it is."

      ],

      choices: [

        { label: "What happened?", next: "end1" },

        { label: "I'm listening.", next: "end2" },

        { label: "Go on.", next: "end2" }

      ]

    },

    end1: {

      speaker: "future",

      lines: [

        "...",

        "I ran out of tomorrows."

      ],

      end: true

    },

    end2: {

      speaker: "future",

      lines: [

        "If someone matters...",

        "...don't make them wait for the version of you that finally has time."

      ],

      end: true

    }

  }

},


{
  id: "006",

  title: "The Gardener",

  rarity: "common",

  origin: "COMMUNITY GARDENS",

  bridgeDuration: 81,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "Do you have a plant that's older than you expected?"

      ],

      choices: [

        { label: "Yes.", next: "yes" },

        { label: "No.", next: "no" },

        { label: "Why?", next: "why" }

      ]

    },

    yes: {

      speaker: "future",

      lines: [

        "Keep watering it."

      ],

      next: "middle"

    },

    no: {

      speaker: "future",

      lines: [

        "Find one."

      ],

      next: "middle"

    },

    why: {

      speaker: "future",

      lines: [

        "Some things survive simply because someone remembered."

      ],

      next: "middle"

    },

    middle: {

      speaker: "future",

      lines: [

        "I planted a tree.",

        "I never sat beneath it.",

        "...",

        "I hope somebody did."

      ],

      end: true

    }

  }

},


{
  id: "007",

  title: "The Lighthouse",

  rarity: "common",

  origin: "COASTAL STATION",

  bridgeDuration: 74,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "Can you see the stars tonight?"

      ],

      choices: [

        { label: "Yes.", next: "yes" },

        { label: "No.", next: "no" },

        { label: "I don't know.", next: "idk" }

      ]

    },

    yes: {

      speaker: "future",

      lines: [

        "Good."

      ],

      next: "middle"

    },

    no: {

      speaker: "future",

      lines: [

        "I miss them."

      ],

      next: "middle"

    },

    idk: {

      speaker: "future",

      lines: [

        "Look up for me."

      ],

      next: "middle"

    },

    middle: {

      speaker: "future",

      lines: [

        "People think light exists to be seen.",

        "...",

        "Sometimes it's enough that it tells someone they're not alone."

      ],

      end: true

    }

  }

},


{
  id: "008",

  title: "The Empty Chair",

  rarity: "common",

  origin: "PRIVATE RESIDENCE",

  bridgeDuration: 79,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "There's still a chair I never moved."

      ],

      choices: [

        { label: "Why?", next: "why" },

        { label: "Whose was it?", next: "whose" },

        { label: "I understand.", next: "understand" }

      ]

    },

    why: {

      speaker: "future",

      lines: [

        "Moving it would've meant accepting it."

      ],

      next: "middle"

    },

    whose: {

      speaker: "future",

      lines: [

        "Someone who laughed loudly."

      ],

      next: "middle"

    },

    understand: {

      speaker: "future",

      lines: [

        "Then you know."

      ],

      next: "middle"

    },

    middle: {

      speaker: "future",

      lines: [

        "Grief doesn't always arrive.",

        "...",

        "Sometimes it simply stays."

      ],

      end: true

    }

  }

},


{
  id: "009",

  title: "The Song",

  rarity: "common",

  origin: "AUDIO ARCHIVE",

  bridgeDuration: 77,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "What's the last song that made you stop what you were doing?"

      ],

      choices: [

        { label: "I don't know.", next: "idk" },

        { label: "I remember.", next: "remember" },

        { label: "Why?", next: "why" }

      ]

    },

    idk: {

      speaker: "future",

      lines: [

        "I hope one finds you."

      ],

      next: "middle"

    },

    remember: {

      speaker: "future",

      lines: [

        "Keep it."

      ],

      next: "middle"

    },

    why: {

      speaker: "future",

      lines: [

        "Songs remember us better than we remember ourselves."

      ],

      next: "middle"

    },

    middle: {

      speaker: "future",

      lines: [

        "There's one melody I can't quite recall anymore.",

        "...",

        "I only remember how it made the room feel."

      ],

      end: true

    }

  }

},


{
  id: "010",

  title: "The Last Goodbye",

  rarity: "common",

  origin: "UNVERIFIED SIGNAL",

  bridgeDuration: 83,

  start: "opening",

  nodes: {

    opening: {

      speaker: "future",

      lines: [

        "Can I tell you something before this bridge closes?"

      ],

      choices: [

        { label: "Yes.", next: "yes" },

        { label: "Go ahead.", next: "yes" },

        { label: "I'm listening.", next: "yes" }

      ]

    },

    yes: {

      speaker: "future",

      lines: [

        "People always imagine they'll recognise their last conversation.",

        "...",

        "Most don't.",

        "...",

        "So if someone calls you tomorrow...",

        "...",

        "answer."

      ],

      end: true

    }

  }

},




];