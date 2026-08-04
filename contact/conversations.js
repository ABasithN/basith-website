const Conversation001 = {
    id: "001",
    title: "The Weather Was Different",
    rarity: "common",
    origin: "Arctic Archive",
    bridgeDuration: 63,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "You're there.",
                "I log these calls. Nobody usually answers.",
                "Weather, mostly. Someone has to write it down."
            ],
            choices: [
                { label: "What do you log?", next: "askLog" },
                { label: "Why does it matter?", next: "askMatter" }
            ]
        },
        askLog: {
            speaker: "future",
            lines: [
                "Snow. Rain. What used to fall and doesn't anymore.",
                "It doesn't do what it used to."
            ],
            next: "middle"
        },
        askMatter: {
            speaker: "future",
            lines: [
                "Somebody should remember what normal looked like.",
                "Might as well be me."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I keep a page just for snow. Mostly blank now.",
                "Complained about it my whole life.",
                "Didn't know I'd miss the complaining."
            ],
            choices: [
                { label: "I remember snow too.", next: "remember" },
                { label: "Tell me what it was like.", next: "describe" }
            ]
        },
        remember: {
            speaker: "future",
            lines: [
                "Then you know the sound it makes. Nobody believes me when I describe it.",
                "Good. Hold onto that."
            ],
            next: "late"
        },
        describe: {
            speaker: "future",
            lines: [
                "Quiet. Loud in a quiet way, if that makes sense.",
                "Everything sounded closer under it."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "I write the blank pages anyway. Someone should know what's missing.",
                "You writing this down too?"
            ],
            choices: [
                { label: "I'll remember it for you.", next: "promise" },
                { label: "What else has changed?", next: "more" }
            ]
        },
        promise: {
            speaker: "future",
            lines: [
                "Good.",
                "That's all I wanted, really."
            ],
            next: "urgency"
        },
        more: {
            speaker: "future",
            lines: [
                "Too much to list before this cuts out.",
                "Snow's the one I miss."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "There's a sound before it goes.",
                "Starting now.",
                "..."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you see snow — really look at—"
            ],
            end: true
        }
    }
};

const Conversation002 = {
    id: "002",
    title: "Piano Keys",
    rarity: "uncommon",
    origin: "Orbital Habitat",
    bridgeDuration: 59,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Hang on — there. Sorry.",
                "Caught me mid-crime. Playing something. Badly.",
                "Nine keys still work up here."
            ],
            choices: [
                { label: "Play it for me.", next: "playAsk" },
                { label: "What's it about?", next: "aboutAsk" }
            ]
        },
        playAsk: {
            speaker: "future",
            lines: [
                "Not really a song for an audience.",
                "But — fine. Don't laugh."
            ],
            next: "middle"
        },
        aboutAsk: {
            speaker: "future",
            lines: [
                "Home. Badly disguised as a song about a window.",
                "Everyone up here writes that one eventually."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Nobody taught me. Diagram and nine working keys.",
                "You get good at making do with what still works."
            ],
            choices: [
                { label: "I wish I could hear the whole thing.", next: "wishHear" },
                { label: "What happened to the rest of the keys?", next: "askKeys" }
            ]
        },
        wishHear: {
            speaker: "future",
            lines: [
                "Me too, honestly.",
                "Maybe next time. If there's a next time."
            ],
            next: "late"
        },
        askKeys: {
            speaker: "future",
            lines: [
                "Salt air. Bad wiring. Take your pick.",
                "The nine that work are stubborn. I like that about them."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Everyone up here has a version of this. A thing that still works.",
                "You hold onto it harder than you'd expect."
            ],
            choices: [
                { label: "I'm still here.", next: "stillHere" },
                { label: "What's yours called?", next: "askName" }
            ]
        },
        stillHere: {
            speaker: "future",
            lines: [
                "Good. Stay a second more."
            ],
            next: "urgency"
        },
        askName: {
            speaker: "future",
            lines: [
                "Doesn't have one. Didn't think it'd need one."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Heading into shadow.",
                "Takes the signal every time—",
                "Wait."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "One more working key and I'd have told you whi—"
            ],
            end: true
        }
    }
};

const Conversation003 = {
    id: "003",
    title: "Wrong Number",
    rarity: "common",
    origin: "UNKNOWN",
    bridgeDuration: 65,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Okay — this is either a prank or the weirdest day of my life.",
                "You're not supposed to be here. Neither am I.",
                "I was trying to reach my brother."
            ],
            choices: [
                { label: "Where's your brother?", next: "askBrother" },
                { label: "I don't understand.", next: "confused" }
            ]
        },
        askBrother: {
            speaker: "future",
            lines: [
                "Station Nine. I get the wrong bridge constantly.",
                "It's honestly embarrassing at this point."
            ],
            next: "middle"
        },
        confused: {
            speaker: "future",
            lines: [
                "Join the club. Nobody explains how these actually work.",
                "You just get whoever answers."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "He'd know what to say right now. He always does.",
                "I mostly just talk until the line decides I'm done."
            ],
            choices: [
                { label: "You're doing fine.", next: "reassure" },
                { label: "What would you tell him?", next: "askTell" }
            ]
        },
        reassure: {
            speaker: "future",
            lines: [
                "Ha. Appreciate that. Even from a wrong number."
            ],
            next: "late"
        },
        askTell: {
            speaker: "future",
            lines: [
                "That I miss the arguing. Sounds stupid out loud.",
                "It isn't, though."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "This is probably the closest I get to reaching him today.",
                "Weird way to spend a wrong number."
            ],
            choices: [
                { label: "I'm glad it was me.", next: "glad" },
                { label: "Try again tomorrow.", next: "tryAgain" }
            ]
        },
        glad: {
            speaker: "future",
            lines: [
                "Yeah. Me too, actually."
            ],
            next: "urgency"
        },
        tryAgain: {
            speaker: "future",
            lines: [
                "Will do. Eventually it has to land right."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Wait, it's going.",
                "Of course.",
                "The one time someone picks u—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you get a wrong number too, don't hang up so fa—"
            ],
            end: true
        }
    }
};

const Conversation004 = {
    id: "004",
    title: "The Last Garden",
    rarity: "rare",
    origin: "The Garden",
    bridgeDuration: 59,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I'm outside. Mind if I keep working.",
                "Only hour the light's right.",
                "Used to be a hundred gardens. One now. I tend it."
            ],
            choices: [
                { label: "What are you planting?", next: "askPlanting" },
                { label: "Who sends the seeds?", next: "askSeeds" }
            ]
        },
        askPlanting: {
            speaker: "future",
            lines: [
                "Something that won't grow here.",
                "Plant it anyway."
            ],
            next: "middle"
        },
        askSeeds: {
            speaker: "future",
            lines: [
                "Strangers, mostly. Sometimes just a name, no seed at all.",
                "I put the names in the soil too."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "There's a row near the fence. Mira asked for that one.",
                "Never met her. I just do as she asks."
            ],
            choices: [
                { label: "Why do you trust her?", next: "askTrust" },
                { label: "I remember Mira.", next: "sayRemember" }
            ]
        },
        askTrust: {
            speaker: "future",
            lines: [
                "Don't, really. Do it anyway.",
                "Some things only stay alive if somebody keeps digging."
            ],
            next: "late"
        },
        sayRemember: {
            speaker: "future",
            lines: [
                "Do you.",
                "...",
                "Tell me about her sometime. Not today, I think."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "The soil doesn't care whose name it is.",
                "Neither do I, anymore. I just dig."
            ],
            choices: [
                { label: "That's its own kind of faith.", next: "faith" },
                { label: "I wish I had a garden like this.", next: "wishGarden" }
            ]
        },
        faith: {
            speaker: "future",
            lines: [
                "Maybe. Never called it that before."
            ],
            next: "urgency"
        },
        wishGarden: {
            speaker: "future",
            lines: [
                "Start with one name.",
                "It grows from there, somehow."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Light's going.",
                "So is this.",
                "...",
                "Figures."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Tell someone to water the row by the fen—"
            ],
            end: true
        }
    }
};

const Conversation005 = {
    id: "005",
    title: "Nine Minutes, Nine",
    rarity: "uncommon",
    origin: "Station Nine",
    bridgeDuration: 54,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Nine minutes. Always nine.",
                "Station's named for it, apparently.",
                "Worked the relay with a man named Elias."
            ],
            choices: [
                { label: "Tell me about him.", next: "askElias" },
                { label: "Why nine?", next: "askNine" }
            ]
        },
        askElias: {
            speaker: "future",
            lines: [
                "Good at the job. Bad at leaving on good terms.",
                "Or maybe that was me."
            ],
            next: "middle"
        },
        askNine: {
            speaker: "future",
            lines: [
                "He said the number chose the place, not the other way around.",
                "Laughed then. Don't now."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "He's off shift. Long time.",
                "Nobody says where."
            ],
            choices: [
                { label: "Do you miss him?", next: "askMiss" },
                { label: "What would you say to him?", next: "askSay" }
            ]
        },
        askMiss: {
            speaker: "future",
            lines: [
                "Wouldn't put it that way.",
                "But the relay's quieter without him. That's something."
            ],
            next: "late"
        },
        askSay: {
            speaker: "future",
            lines: [
                "That someone still counts. That's it. That's the whole thing."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "I count anyway, whether he hears it or not.",
                "Habit's outlived the reason for it, probably."
            ],
            choices: [
                { label: "I don't think it has.", next: "reassure" },
                { label: "Why?", next: "askWhy" }
            ]
        },
        reassure: {
            speaker: "future",
            lines: [
                "Appreciate you saying that."
            ],
            next: "urgency"
        },
        askWhy: {
            speaker: "future",
            lines: [
                "Because someone should still be counted.",
                "Even if it's just me doing it."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Nobody says where.",
                "Counting anyway.",
                "Almost up."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you hear his name, tell him someone still cou—"
            ],
            end: true
        }
    }
};

const Conversation006 = {
    id: "006",
    title: "Static Kindness",
    rarity: "common",
    origin: "Deep Ocean Colony",
    bridgeDuration: 57,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "It's loud down here.",
                "Not sound. Pressure.",
                "Like something's always about to give."
            ],
            choices: [
                { label: "Are you okay?", next: "askOkay" },
                { label: "How do you live like that?", next: "askLive" }
            ]
        },
        askOkay: {
            speaker: "future",
            lines: [
                "You get used to it. Mostly.",
                "Nice of you to ask, though."
            ],
            next: "middle"
        },
        askLive: {
            speaker: "future",
            lines: [
                "You stop noticing what you can't fix.",
                "Focus on what's still soft instead."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Nobody's unkind down here. Almost a rule.",
                "This close to the dark, you stop wasting words."
            ],
            choices: [
                { label: "That sounds hard.", next: "sayHard" },
                { label: "That sounds peaceful.", next: "sayPeaceful" }
            ]
        },
        sayHard: {
            speaker: "future",
            lines: [
                "It was. Isn't anymore.",
                "Forgot how to be sharp with people. Don't miss it."
            ],
            next: "late"
        },
        sayPeaceful: {
            speaker: "future",
            lines: [
                "It is, actually. Didn't expect that answer, did you.",
                "Neither did I, the first year."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Everyone down here's gentle with everyone else.",
                "It's the only thing that makes the pressure bearable."
            ],
            choices: [
                { label: "I'll try to be gentler too.", next: "tryGentle" },
                { label: "I wish it were like that everywhere.", next: "wishEverywhere" }
            ]
        },
        tryGentle: {
            speaker: "future",
            lines: [
                "Good. Costs you nothing."
            ],
            next: "urgency"
        },
        wishEverywhere: {
            speaker: "future",
            lines: [
                "Doesn't have to take the dark to learn it.",
                "Wish someone had told me that sooner."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Pressure does something to the line.",
                "Should let you go before it decide—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Be kind up there. It's cheaper than you thi—"
            ],
            end: true
        }
    }
};

const Conversation007 = {
    id: "007",
    title: "Elias Again",
    rarity: "rare",
    origin: "UNKNOWN",
    bridgeDuration: 67,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Sorry — for a second I thought — never mind. Hi.",
                "Keep hoping the bridge gets it wrong in my favor.",
                "Looking for someone. Station Nine, if that's anything to you?"
            ],
            choices: [
                { label: "Who is he?", next: "askWho" },
                { label: "I don't understand.", next: "confused" }
            ]
        },
        askWho: {
            speaker: "future",
            lines: [
                "Someone I worked with. Someone I owe an answer to.",
                "Eleven bridges now. None of them him."
            ],
            next: "middle"
        },
        confused: {
            speaker: "future",
            lines: [
                "Sorry, I know how it sounds.",
                "Eleven bridges chasing one person. It's a lot, I know."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "He left before I asked him something.",
                "Small thing at the time."
            ],
            choices: [
                { label: "What did you want to ask him?", next: "askAsk" },
                { label: "Keep trying. He might answer.", next: "keepTrying" }
            ]
        },
        askAsk: {
            speaker: "future",
            lines: [
                "Whether he blamed me for the transfer.",
                "Got heavier the longer I sat on it."
            ],
            next: "late"
        },
        keepTrying: {
            speaker: "future",
            lines: [
                "Twelve, then thirteen.",
                "Someone said the bridge remembers who you're looking for."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Want that to be true more than I can say.",
                "You're not him. I know before you even speak now."
            ],
            choices: [
                { label: "I'm sorry.", next: "saySorry" },
                { label: "You'll find him.", next: "sayFind" }
            ]
        },
        saySorry: {
            speaker: "future",
            lines: [
                "Not your fault. Appreciate it anyway."
            ],
            next: "urgency"
        },
        sayFind: {
            speaker: "future",
            lines: [
                "Hope so.",
                "Fourteen, if I have to."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Not upset.",
                "Just — recalibrating, agai—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you meet an Elias — ask if he still thinks about the tra—"
            ],
            end: true
        }
    }
};

const Conversation008 = {
    id: "008",
    title: "The Archive Keeps Everything",
    rarity: "uncommon",
    origin: "The Archive",
    bridgeDuration: 62,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "One moment. Logging the timestamp.",
                "Habit. It's the job.",
                "I have a shelf of things nobody asked me to keep."
            ],
            choices: [
                { label: "Like what?", next: "askLike" },
                { label: "Why keep them?", next: "askWhyKeep" }
            ]
        },
        askLike: {
            speaker: "future",
            lines: [
                "A recording. A grocery list. A key to a door that isn't there.",
                "None of it useful. All of it mine."
            ],
            next: "middle"
        },
        askWhyKeep: {
            speaker: "future",
            lines: [
                "Used to call it a virtue.",
                "Not sure what I'd call it now."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Realized I was keeping things instead of people, eventually.",
                "The shelf filled right when I emptied out."
            ],
            choices: [
                { label: "That sounds lonely.", next: "sayLonely" },
                { label: "What's on the shelf that matters most?", next: "askMost" }
            ]
        },
        sayLonely: {
            speaker: "future",
            lines: [
                "Was. Working on it.",
                "This helps, actually. More than you'd think."
            ],
            next: "late"
        },
        askMost: {
            speaker: "future",
            lines: [
                "A letter I never sent.",
                "Keep meaning to."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Maybe this counts as sending it. A little.",
                "Funny what a stranger can absolve, accidentally."
            ],
            choices: [
                { label: "I remember.", next: "sayRemember" },
                { label: "Send it. Really send it.", next: "urgeSend" }
            ]
        },
        sayRemember: {
            speaker: "future",
            lines: [
                "Good. That's the job done, then."
            ],
            next: "urgency"
        },
        urgeSend: {
            speaker: "future",
            lines: [
                "Maybe I will.",
                "Feels smaller, saying it out loud to someone."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The bridge doesn't log itself.",
                "No time to note the—",
                "..."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "File this under things I should've said soon—"
            ],
            end: true
        }
    }
};

const Conversation009 = {
    id: "009",
    title: "Ash Bridge Crossing",
    rarity: "rare",
    origin: "Ash Bridge",
    bridgeDuration: 53,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "First voice since the crossing.",
                "Keep expecting it to still be loud.",
                "It isn't. That's the strange part."
            ],
            choices: [
                { label: "What happened at the crossing?", next: "askCrossing" },
                { label: "You're safe now.", next: "sayNowSafe" }
            ]
        },
        askCrossing: {
            speaker: "future",
            lines: [
                "Everyone talks about it like one moment.",
                "It's a hundred small ones. Stacked."
            ],
            next: "middle"
        },
        sayNowSafe: {
            speaker: "future",
            lines: [
                "Don't know that yet.",
                "Hope you're right."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Crossed anyway. Still don't know what's on this side.",
                "Quiet's almost worse than the noise was."
            ],
            choices: [
                { label: "What do you remember most?", next: "askRemember" },
                { label: "I'm here. Keep going.", next: "sayKeepGoing" }
            ]
        },
        askRemember: {
            speaker: "future",
            lines: [
                "The station. Just the shape of it, mostly.",
                "Everything else went soft."
            ],
            next: "late"
        },
        sayKeepGoing: {
            speaker: "future",
            lines: [
                "Okay.",
                "Okay, staying on."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Something's pulling at the line.",
                "Like the crossing didn't finish with me."
            ],
            choices: [
                { label: "What do you mean?", next: "askMean" },
                { label: "Hold on. I'm still here.", next: "holdOn" }
            ]
        },
        askMean: {
            speaker: "future",
            lines: [
                "I rem—",
                "..."
            ],
            next: "urgency"
        },
        holdOn: {
            speaker: "future",
            lines: [
                "Trying.",
                "..."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "the station.",
                "..."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you cross something like it — don't look back till you'r—"
            ],
            end: true
        }
    }
};

const Conversation010 = {
    id: "010",
    title: "Rain That Doesn't Stop",
    rarity: "common",
    origin: "The Rain",
    bridgeDuration: 56,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Talk louder. Coming down hard.",
                "Always coming down hard.",
                "Nine years of it where I am."
            ],
            choices: [
                { label: "How do you manage?", next: "askManage" },
                { label: "What do you miss most?", next: "askMiss" }
            ]
        },
        askManage: {
            speaker: "future",
            lines: [
                "Stopped counting. Started again.",
                "You find a rhythm in it, eventually."
            ],
            next: "middle"
        },
        askMiss: {
            speaker: "future",
            lines: [
                "Dry. Almost forgot what it sounds like.",
                "Silence, mostly. I miss silence."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "You learn to talk through it or you stop talking altogether.",
                "I chose the first one. Barely."
            ],
            choices: [
                { label: "I'm listening. Keep talking.", next: "keepTalking" },
                { label: "Does it ever let up?", next: "askLetUp" }
            ]
        },
        keepTalking: {
            speaker: "future",
            lines: [
                "Appreciate that.",
                "Not everyone has the patience for it."
            ],
            next: "late"
        },
        askLetUp: {
            speaker: "future",
            lines: [
                "Never has. Might not ever.",
                "Doesn't mean you stop living in it."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Sorry. I know I sound tired of it.",
                "Some days I am. Not today, somehow."
            ],
            choices: [
                { label: "Why not today?", next: "askWhyNot" },
                { label: "I don't understand.", next: "confused" }
            ]
        },
        askWhyNot: {
            speaker: "future",
            lines: [
                "You answered.",
                "Doesn't take much, some days."
            ],
            next: "urgency"
        },
        confused: {
            speaker: "future",
            lines: [
                "Neither do I, honestly.",
                "Just felt true saying it."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Thunder now.",
                "Always takes the line with i—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If it starts where you are, don't wait for it to sto—"
            ],
            end: true
        }
    }
};

const Conversation011 = {
    id: "011",
    title: "Mira's Voicemail",
    rarity: "uncommon",
    origin: "UNKNOWN",
    bridgeDuration: 64,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "This is going to sound strange. I'm not calling to talk to you, exactly.",
                "Hoping you'll pass something on. If you ever meet her.",
                "Her name's Mira."
            ],
            choices: [
                { label: "Tell me about her.", next: "askAbout" },
                { label: "What do you want her to know?", next: "askKnow" }
            ]
        },
        askAbout: {
            speaker: "future",
            lines: [
                "Left the longest voicemails. Saved every one.",
                "Still listen out of order, on purpose."
            ],
            next: "middle"
        },
        askKnow: {
            speaker: "future",
            lines: [
                "That I finally answered the last one.",
                "Took three years."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "It makes her sound like she's still deciding what to say next.",
                "I like that. Keeps her close, somehow."
            ],
            choices: [
                { label: "Why not tell her yourself?", next: "askWhyNot" },
                { label: "Some replies take time.", next: "sayTakeTime" }
            ]
        },
        askWhyNot: {
            speaker: "future",
            lines: [
                "The bridges never find her, only people who might know her.",
                "Closest thing I have to trying."
            ],
            next: "late"
        },
        sayTakeTime: {
            speaker: "future",
            lines: [
                "Three years is a lot of time, though.",
                "Long enough to know I meant it, at least."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "So I keep trying. Bridge after bridge.",
                "Someone has to eventually be the right one."
            ],
            choices: [
                { label: "I'll remember her name.", next: "rememberName" },
                { label: "She'd want to know you tried.", next: "sheKnows" }
            ]
        },
        rememberName: {
            speaker: "future",
            lines: [
                "Mira.",
                "Thank you for that."
            ],
            next: "urgency"
        },
        sheKnows: {
            speaker: "future",
            lines: [
                "Hope so.",
                "Hope so more than I can say."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Fading.",
                "Always fades right at the important par—",
                "..."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Tell her the garden by the fence is still—"
            ],
            end: true
        }
    }
};

const Conversation012 = {
    id: "012",
    title: "Fourth Frequency",
    rarity: "rare",
    origin: "Temporal Observatory",
    bridgeDuration: 62,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Fourth frequency. Almost nobody comes through on this one.",
                "Heard about it. Didn't expect to hear through it. Neat trick.",
                "Officially decommissioned, this line."
            ],
            choices: [
                { label: "Why do you monitor it then?", next: "askMonitor" },
                { label: "What's special about it?", next: "askSpecial" }
            ]
        },
        askMonitor: {
            speaker: "future",
            lines: [
                "Boredom. Curiosity. Poor judgment.",
                "Pick whichever sounds better on a report."
            ],
            next: "middle"
        },
        askSpecial: {
            speaker: "future",
            lines: [
                "Too honest, they say. Doesn't hold long.",
                "Explains a lot about tonight, then."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Most nights, nothing. Tonight, you. Lucky me, I guess.",
                "Not overthinking it. Definitely not."
            ],
            choices: [
                { label: "Maybe it's not luck.", next: "sayNotLuck" },
                { label: "I'm glad it was tonight.", next: "sayGladTonight" }
            ]
        },
        sayNotLuck: {
            speaker: "future",
            lines: [
                "Careful. That's how people end up believing in things.",
                "...I might already."
            ],
            next: "late"
        },
        sayGladTonight: {
            speaker: "future",
            lines: [
                "Me too. Best conversation all month, and I mean that."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Wish this frequency behaved like the others. Longer, less honest.",
                "Trade-offs, I suppose."
            ],
            choices: [
                { label: "Honest is better.", next: "sayHonestBetter" },
                { label: "I'll remember this one.", next: "sayRememberThis" }
            ]
        },
        sayHonestBetter: {
            speaker: "future",
            lines: [
                "Easy for you to say. You get to leave.",
                "Kidding. Mostly."
            ],
            next: "urgency"
        },
        sayRememberThis: {
            speaker: "future",
            lines: [
                "Good. Somebody should."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Never holds long. Too honest for that.",
                "Figures.",
                "Best conversation all mont—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If it finds you again, don't tell anyone how you got throu—"
            ],
            end: true
        }
    }
};

const Conversation013 = {
    id: "013",
    title: "The Quiet Kitchen",
    rarity: "common",
    origin: "Quantum Refuge",
    bridgeDuration: 60,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "One second, flour on my hands — there.",
                "Sorry, love. Mid-something, as always.",
                "I cook for people who never ask."
            ],
            choices: [
                { label: "Why cook if they don't ask?", next: "askWhyCook" },
                { label: "That sounds like love.", next: "sayLove" }
            ]
        },
        askWhyCook: {
            speaker: "future",
            lines: [
                "Easier than talking. Always has been.",
                "The food says it for us, mostly."
            ],
            next: "middle"
        },
        sayLove: {
            speaker: "future",
            lines: [
                "Maybe it is. Never called it that.",
                "Sounds nicer than 'coping', I'll admit."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Everyone here's lost something. Nobody says it out loud.",
                "So we eat instead. Feels less like a confession."
            ],
            choices: [
                { label: "What did you lose?", next: "askLost" },
                { label: "I understand.", next: "sayUnderstand" }
            ]
        },
        askLost: {
            speaker: "future",
            lines: [
                "Not today. Ask me something easier.",
                "...thank you for asking, though."
            ],
            next: "late"
        },
        sayUnderstand: {
            speaker: "future",
            lines: [
                "Do you.",
                "Then you know why the kitchen stays busy."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Come by if you're ever near. I'll feed you without asking questions.",
                "That's the whole offer, really."
            ],
            choices: [
                { label: "I'd like that.", next: "sayLike" },
                { label: "That's a kind offer.", next: "sayKind" }
            ]
        },
        sayLike: {
            speaker: "future",
            lines: [
                "Good. I'll set a place."
            ],
            next: "urgency"
        },
        sayKind: {
            speaker: "future",
            lines: [
                "Costs me nothing. Gives me everything, some nights."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Something's beeping.",
                "Oven or bridge.",
                "Could be eithe—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you cook for someone who won't ask, that's how you kno—"
            ],
            end: true
        }
    }
};

const Conversation014 = {
    id: "014",
    title: "Underground Choir",
    rarity: "uncommon",
    origin: "Underground Civilization",
    bridgeDuration: 66,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Caught us between songs! Give me a sec to sneak out.",
                "Sing more than we talk down here. Travels better through rock.",
                "Forty of us, most nights."
            ],
            choices: [
                { label: "What do you sing about?", next: "askAbout" },
                { label: "Sing something for me.", next: "askSing" }
            ]
        },
        askAbout: {
            speaker: "future",
            lines: [
                "The surface. None of us have seen it.",
                "We sing about things we've only been told exist."
            ],
            next: "middle"
        },
        askSing: {
            speaker: "future",
            lines: [
                "Alone I'm nothing, you want the forty.",
                "But — fine. One line. Don't tell them."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Sounds truer with forty voices believing it at once.",
                "Only time the tunnels don't feel like tunnels."
            ],
            choices: [
                { label: "I wish I could hear all forty.", next: "wishForty" },
                { label: "Do you believe the songs?", next: "askBelieve" }
            ]
        },
        wishForty: {
            speaker: "future",
            lines: [
                "You and me both, honestly.",
                "It's better than anything I could do alone."
            ],
            next: "late"
        },
        askBelieve: {
            speaker: "future",
            lines: [
                "Some nights. Other nights it's just nice to be loud together.",
                "Either way works, if you ask me."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Nobody remembers who started it. Just kept going.",
                "Suppose that's how most good things survive down here."
            ],
            choices: [
                { label: "I'll listen for it someday.", next: "sayListen" },
                { label: "Keep singing.", next: "sayKeepSinging" }
            ]
        },
        sayListen: {
            speaker: "future",
            lines: [
                "You won't find it. But nice thought."
            ],
            next: "urgency"
        },
        sayKeepSinging: {
            speaker: "future",
            lines: [
                "Always do."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Calling me back.",
                "Signal doesn't reach far from the chambe—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you ever see the surface, sing something up there for u—"
            ],
            end: true
        }
    }
};

const Conversation015 = {
    id: "015",
    title: "The Man Who Counts Days",
    rarity: "common",
    origin: "Mars Research Relay",
    bridgeDuration: 53,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Day one thousand, something.",
                "Stopped writing the number.",
                "First new voice in a while."
            ],
            choices: [
                { label: "Are you alone out there?", next: "askAlone" },
                { label: "What do you do all day?", next: "askDo" }
            ]
        },
        askAlone: {
            speaker: "future",
            lines: [
                "Mostly. The relay keeps me company. Sort of.",
                "Talk to it sometimes. Like it'll answer."
            ],
            next: "middle"
        },
        askDo: {
            speaker: "future",
            lines: [
                "Count. Wait. Maintain what needs maintaining.",
                "Not much of a list, I know."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "It never does. The relay, I mean.",
                "You did, though."
            ],
            choices: [
                { label: "I'm glad I did.", next: "sayGlad" },
                { label: "What do you talk to it about?", next: "askAboutWhat" }
            ]
        },
        sayGlad: {
            speaker: "future",
            lines: [
                "Me too.",
                "Don't get many days like this one."
            ],
            next: "late"
        },
        askAboutWhat: {
            speaker: "future",
            lines: [
                "Nothing important. Just to hear a voice, mine or otherwise.",
                "Turns out that matters more than I thought it would."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "This'll be day one thousand, something, plus one.",
                "The day it answered back."
            ],
            choices: [
                { label: "I won't forget this either.", next: "wontForget" },
                { label: "Stay safe out there.", next: "staySafe" }
            ]
        },
        wontForget: {
            speaker: "future",
            lines: [
                "Good. Somebody should keep the count too."
            ],
            next: "urgency"
        },
        staySafe: {
            speaker: "future",
            lines: [
                "Trying to. Most days."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Relay's cycling down for the storm.",
                "Doesn't ask if I'm read—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Day one thousand, something, plus one voice that answer—"
            ],
            end: true
        }
    }
};

const Conversation016 = {
    id: "016",
    title: "Elias's Sister",
    rarity: "rare",
    origin: "UNKNOWN",
    bridgeDuration: 67,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "You're not my brother.",
                "I know his voice better than anyone's. You'll do.",
                "Went to Station Nine. Stopped writing."
            ],
            choices: [
                { label: "What happened?", next: "askHappened" },
                { label: "I'm sorry.", next: "saySorry" }
            ]
        },
        askHappened: {
            speaker: "future",
            lines: [
                "Not forgot. Decided.",
                "There's a difference, and it matters to me more than it should."
            ],
            next: "middle"
        },
        saySorry: {
            speaker: "future",
            lines: [
                "Don't be. Not your doing.",
                "I've had longer than you to sit with it."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I've rehearsed what I'll say when the bridge finally gets it right.",
                "Practiced it so many times it barely feels true anymore."
            ],
            choices: [
                { label: "What will you say?", next: "askSay" },
                { label: "Why do you think he stopped?", next: "askWhy" }
            ]
        },
        askSay: {
            speaker: "future",
            lines: [
                "That I'm not angry anymore. Just tired of being angry.",
                "Shorter speech than it used to be."
            ],
            next: "late"
        },
        askWhy: {
            speaker: "future",
            lines: [
                "Blamed himself for something small.",
                "Small things do that, to people who already blame themselves for everything."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "I'm not keeping score anymore. Haven't been for a while.",
                "Wish he knew that without me having to say it."
            ],
            choices: [
                { label: "I'll tell him if I can.", next: "sayTellHim" },
                { label: "He probably knows.", next: "sayProbablyKnows" }
            ]
        },
        sayTellHim: {
            speaker: "future",
            lines: [
                "Would mean more than you'd think.",
                "Thank you."
            ],
            next: "urgency"
        },
        sayProbablyKnows: {
            speaker: "future",
            lines: [
                "Hope so.",
                "People rarely know the things you assume they do."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Thinning. Of course, right when I get clo—",
                "Don't—",
                "...",
                "trust—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you reach him — tell him I'm not keeping sco—"
            ],
            end: true
        }
    }
};

const Conversation017 = {
    id: "017",
    title: "Letters No One Reads",
    rarity: "common",
    origin: "Arctic Archive",
    bridgeDuration: 69,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Write a letter every week, which is a fairly ridiculous habit if you think about it, but here we are.",
                "Nobody reads them. Far as I know."
            ],
            choices: [
                { label: "Why keep writing them?", next: "askWhy" },
                { label: "I'd read one.", next: "sayRead" }
            ]
        },
        askWhy: {
            speaker: "future",
            lines: [
                "In case the archive outlives the reason for it.",
                "Someone might want to know what an ordinary week looked like."
            ],
            next: "middle"
        },
        sayRead: {
            speaker: "future",
            lines: [
                "Would you. That's either very kind or very bored of you.",
                "I'll take it either way."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "That's all most of them are, honestly. Embarrassingly ordinary.",
                "Weather, meals, small complaints nobody will ever litigate."
            ],
            choices: [
                { label: "That sounds comforting.", next: "sayComforting" },
                { label: "What's in this week's letter?", next: "askThisWeek" }
            ]
        },
        sayComforting: {
            speaker: "future",
            lines: [
                "Didn't expect that word for it. I'll take it, though.",
                "Comforting works."
            ],
            next: "late"
        },
        askThisWeek: {
            speaker: "future",
            lines: [
                "Hadn't started it yet. Now I know how.",
                "'A stranger answered the bridge.' Good opening line, that."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Should write tonight down properly. Most interesting week in a while, actually.",
                "You've earned yourself a paragraph."
            ],
            choices: [
                { label: "I'm honored.", next: "sayHonored" },
                { label: "Make it a good one.", next: "sayGoodOne" }
            ]
        },
        sayHonored: {
            speaker: "future",
            lines: [
                "Don't get used to it. Standards are low most weeks."
            ],
            next: "urgency"
        },
        sayGoodOne: {
            speaker: "future",
            lines: [
                "I'll do my best.",
                "No promises on the ending, though."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Should write tonight down too.",
                "Most interesting week in a while, actuall—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Dear whoever reads this — a stranger answered the bridge toda—"
            ],
            end: true
        }
    }
};

const Conversation018 = {
    id: "018",
    title: "The Boy From Station Nine",
    rarity: "uncommon",
    origin: "Station Nine",
    bridgeDuration: 63,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Are you even allowed on this frequency, I'm not, technically,",
                "don't tell my mum, she thinks I'm asleep, okay go quick—",
                "There's a man everyone talks about like he's a ghost."
            ],
            choices: [
                { label: "Who is he?", next: "askWho" },
                { label: "I won't tell.", next: "sayWontTell" }
            ]
        },
        askWho: {
            speaker: "future",
            lines: [
                "Elias. Not a ghost, just quiet.",
                "Gave me his old radio, that's how I found this, isn't that—"
            ],
            next: "middle"
        },
        sayWontTell: {
            speaker: "future",
            lines: [
                "Good, good, thank you.",
                "Okay so there's this man, Elias—"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "He doesn't talk to anyone really, except sometimes to me.",
                "Says I remind him of someone. Never says who."
            ],
            choices: [
                { label: "That's sweet, in a way.", next: "saySweet" },
                { label: "Ask him who someday.", next: "askHimSomeday" }
            ]
        },
        saySweet: {
            speaker: "future",
            lines: [
                "I guess? He's weird about it, honestly.",
                "But yeah, sweet, maybe."
            ],
            next: "late"
        },
        askHimSomeday: {
            speaker: "future",
            lines: [
                "I've tried! He just goes quiet quieter, if that's a thing.",
                "Adults are so strange sometimes."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Anyway I should probably actually be asleep, this was—",
                "wait,"
            ],
            choices: [
                { label: "Go, before you get caught.", next: "sayGo" },
                { label: "It's okay, stay a second.", next: "sayStay" }
            ]
        },
        sayGo: {
            speaker: "future",
            lines: [
                "Yeah, yeah, okay—"
            ],
            next: "urgency"
        },
        sayStay: {
            speaker: "future",
            lines: [
                "Just one more second, then—"
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Footsteps.",
                "If that's her I have to—",
                "It's her.",
                "I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you meet Elias, tell him the radio still work—"
            ],
            end: true
        }
    }
};

const Conversation019 = {
    id: "019",
    title: "Mira Waits",
    rarity: "rare",
    origin: "The Garden",
    bridgeDuration: 69,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Someone told me a stranger might ask for me eventually.",
                "Didn't believe them. Still half don't.",
                "Mira. If that means anything to you."
            ],
            choices: [
                { label: "Someone planted a row for you.", next: "sayRow" },
                { label: "Someone finally answered your last voicemail.", next: "sayVoicemail" }
            ]
        },
        sayRow: {
            speaker: "future",
            lines: [
                "The fence garden. I know it.",
                "Never asked who tends the row with my name on it."
            ],
            next: "middle"
        },
        sayVoicemail: {
            speaker: "future",
            lines: [
                "Three years. Sounds about right for him.",
                "Stopped waiting on that a long time ago."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Strange, being the name in someone else's story.",
                "You spend so long being the one who waits."
            ],
            choices: [
                { label: "Were you waiting?", next: "askWaiting" },
                { label: "You're not just a name to them.", next: "sayNotJustName" }
            ]
        },
        askWaiting: {
            speaker: "future",
            lines: [
                "Longer than I'd admit to most people.",
                "Liked not knowing who was tending the row. Felt less lonely, somehow."
            ],
            next: "late"
        },
        sayNotJustName: {
            speaker: "future",
            lines: [
                "No. Suppose I'm not.",
                "Takes a stranger to say it plainly, apparently."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Glad I was wrong to stop waiting, if I'm honest.",
                "Doesn't happen often, being glad to be wrong."
            ],
            choices: [
                { label: "I'm glad too.", next: "sayGladToo" },
                { label: "What will you do now?", next: "askNow" }
            ]
        },
        sayGladToo: {
            speaker: "future",
            lines: [
                "Thank you for that.",
                "Means more than it should, coming from a stranger."
            ],
            next: "urgency"
        },
        askNow: {
            speaker: "future",
            lines: [
                "Stop leaving the light on for no reason, maybe.",
                "Start leaving it on for a good one instead."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Going.",
                "Always goes right after good news.",
                "..."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Tell them I finally stopped leaving the light on for no reas—"
            ],
            end: true
        }
    }
};

const Conversation020 = {
    id: "020",
    title: "The Last Bridge",
    rarity: "rare",
    origin: "Ash Bridge",
    bridgeDuration: 69,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Every frequency there is, looking for one voice.",
                "Don't expect it to be yours.",
                "Stopped expecting, mostly. A station, a garden, an archive, a choir underground."
            ],
            choices: [
                { label: "Who are you looking for?", next: "askWho" },
                { label: "I'm sorry you haven't found them.", next: "saySorry" }
            ]
        },
        askWho: {
            speaker: "future",
            lines: [
                "Doesn't matter who, not really, not to you.",
                "Matters that I keep looking. That's the part I can control."
            ],
            next: "middle"
        },
        saySorry: {
            speaker: "future",
            lines: [
                "Don't be. The looking's become its own kind of company.",
                "Strange thing to admit, but true."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Spoken to all of them, chasing the same name through every one.",
                "Someone out there's still counting days for me too. I hope."
            ],
            choices: [
                { label: "What happens if you never find them?", next: "askNever" },
                { label: "What happens if you do?", next: "askFind" }
            ]
        },
        askNever: {
            speaker: "future",
            lines: [
                "Keep planting rows. Writing letters no one reads.",
                "Used to think that was nothing. It isn't."
            ],
            next: "late"
        },
        askFind: {
            speaker: "future",
            lines: [
                "I don't think I say anything at all.",
                "Just want to hear them breathe a second."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Every bridge dies the same way, in the end.",
                "Used to be afraid of that."
            ],
            choices: [
                { label: "And now?", next: "askAndNow" },
                { label: "I wish I had thirty more seconds with you.", next: "sayThirtyMore" }
            ]
        },
        askAndNow: {
            speaker: "future",
            lines: [
                "Not anymore.",
                "Something always answers eventually. Even the wrong—"
            ],
            next: "urgency"
        },
        sayThirtyMore: {
            speaker: "future",
            lines: [
                "Me too.",
                "Everyone always does, right at the end."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "...",
                "Even the wrong voice answering beats no voice at all."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Whoever you're looking for — they're probably looking too—"
            ],
            end: true
        }
    }
};

window.CONTACT_CONVERSATIONS = [
    Conversation001,
    Conversation002,
    Conversation003,
    Conversation004,
    Conversation005,
    Conversation006,
    Conversation007,
    Conversation008,
    Conversation009,
    Conversation010,
    Conversation011,
    Conversation012,
    Conversation013,
    Conversation014,
    Conversation015,
    Conversation016,
    Conversation017,
    Conversation018,
    Conversation019,
    Conversation020
];
