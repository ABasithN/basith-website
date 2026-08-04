const Conversation001 = {
    id: "001",
    title: "The Weather Was Different",
    rarity: "common",
    origin: "Arctic Archive",
    bridgeDuration: 64,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Oh.",
                "You're actually there.",
                "I log these calls. I don't usually get an answer."
            ],
            choices: [
                { label: "What do you log?", next: "log" },
                { label: "Where are you?", next: "where" }
            ]
        },
        log: {
            speaker: "future",
            lines: [
                "Weather, mostly.",
                "Someone has to write it down.",
                "It doesn't do what it used to do."
            ],
            next: "middle"
        },
        where: {
            speaker: "future",
            lines: [
                "Somewhere cold.",
                "Colder than it should be, and warmer than it should be.",
                "Both, depending on the week."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I keep a page for snow.",
                "It's mostly blank now.",
                "I didn't think I'd miss something I complained about so much."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "There's a sound before the line drops.",
                "I hear it starting.",
                "If you ever see snow — really look at it."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Write it down for me. I won't remember asking—"
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
    bridgeDuration: 81,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Hang on. Let me turn this down.",
                "There. Sorry.",
                "I was playing something. Badly."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Nobody up here taught me. I taught myself off a diagram.",
                "Nine keys still work.",
                "I've written a whole song around the nine that work."
            ],
            choices: [
                { label: "Play it for me", next: "play" },
                { label: "What's it about?", next: "about" }
            ]
        },
        play: {
            speaker: "future",
            lines: [
                "It's not really a song you play into a bridge.",
                "It's a song you play when nobody's listening.",
                "But — okay. A little."
            ],
            next: "urgency"
        },
        about: {
            speaker: "future",
            lines: [
                "Home, I guess. Badly disguised as a song about a window.",
                "Everyone up here writes the same song eventually.",
                "We just don't tell each other that."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The habitat's about to pass into shadow.",
                "It takes the signal with it. Every time.",
                "I hate this part."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If I had one more key that worked, I'd tell you which n—"
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
    bridgeDuration: 42,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Okay, this is either a prank or the weirdest Tuesday of my life.",
                "You're not supposed to be on this line.",
                "Neither am I, honestly."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I was trying to reach my brother. He moved to Station Nine.",
                "I get the wrong bridge more than the right one.",
                "You'd think they'd fix that by now."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's already thinning. I can hear it.",
                "Typical. The one time someone actually answers."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you ever get a wrong number too, don't hang up so fa—"
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
    bridgeDuration: 90,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I'm outside. Do you mind if I keep working while we talk?",
                "It's the only hour the light is right."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "This used to be a hundred gardens. Now it's one, and I tend it.",
                "People send me things to plant. Seeds, mostly. Sometimes just names.",
                "I put the names in the soil too. I don't know if that helps anything."
            ],
            choices: [
                { label: "Whose names?", next: "names" },
                { label: "What are you planting today?", next: "planting" }
            ]
        },
        names: {
            speaker: "future",
            lines: [
                "People who didn't get a garden of their own.",
                "There's one near the fence. Mira asked me to plant that one.",
                "I never met her. I just do what she asks."
            ],
            next: "urgency"
        },
        planting: {
            speaker: "future",
            lines: [
                "Something that isn't supposed to grow here.",
                "It won't. But I like trying anyway.",
                "Some memories only survive if someone keeps digging."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The light's going. So is the bridge, I think.",
                "Funny how both do that at once."
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
                "You've got nine minutes. I know because it's always nine minutes.",
                "Someone named this station after that. I think.",
                "Nobody actually remembers why anymore."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I used to work the relay with a man named Elias.",
                "He said the number nine chose the place, not the other way around.",
                "I laughed at him for that. I don't laugh at it anymore."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "He's not on shift anymore. Nobody says where he went.",
                "I keep count anyway. Nine minutes, every time.",
                "It's almost up."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you ever hear his name again, tell him someone still cou—"
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
    bridgeDuration: 58,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "It's loud down here. Not sound. Pressure.",
                "You get used to feeling like something's always about to give.",
                "Sorry. That's a strange thing to open with."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Nobody down here says anything unkind. It's a rule, almost.",
                "When you live this close to the dark, you stop wasting words.",
                "I forgot how to be sharp with people. I don't miss it."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The pressure's doing something to the line. It happens.",
                "I should let you go before it decides for us."
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
    bridgeDuration: 70,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Sorry — for a second I thought you were someone else.",
                "I keep hoping the bridge will get it wrong in my favor."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I'm looking for someone. Station Nine, if that means anything to you.",
                "He left before I could ask him something I still haven't figured out how to ask.",
                "I've asked it into eleven different bridges now. None of them were him."
            ],
            choices: [
                { label: "What did you want to ask him?", next: "ask" },
                { label: "Keep trying. He might answer.", next: "keep" }
            ]
        },
        ask: {
            speaker: "future",
            lines: [
                "Whether he blamed me for the transfer.",
                "It's a small thing. It just got heavy over time.",
                "Small things do that, if you let them sit."
            ],
            next: "urgency"
        },
        keep: {
            speaker: "future",
            lines: [
                "I will. Twelve, then thirteen.",
                "Someone told me the bridge remembers who you're looking for, eventually.",
                "I don't know if that's true. I want it to be."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "This isn't him either. I can tell now, before you even speak.",
                "I'm not upset. Just — recalibrating."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you ever meet an Elias, ask him if he still thinks about the tra—"
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
    bridgeDuration: 76,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "One moment. I have to log the timestamp before we lose it.",
                "Force of habit. I catalog everything. It's the job."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I have a whole shelf of things nobody asked me to keep.",
                "A voice recording. A grocery list. A key to a door that isn't there anymore.",
                "I don't throw anything away. I used to think that was a virtue."
            ],
            choices: [
                { label: "What changed your mind?", next: "changed" },
                { label: "What's on the shelf that matters most?", next: "shelf" }
            ]
        },
        changed: {
            speaker: "future",
            lines: [
                "I realized I was keeping things instead of people.",
                "The shelf got full right around the time I got empty.",
                "Nobody warns you that's how it trades."
            ],
            next: "urgency"
        },
        shelf: {
            speaker: "future",
            lines: [
                "A letter I never sent. I keep meaning to.",
                "I've kept meaning to for longer than I'd like to admit.",
                "Maybe this counts as sending it. A little."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The bridge doesn't log itself. I should note the time.",
                "There isn't time to note the time."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Catalog this one under things I should have said soon—"
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
    bridgeDuration: 88,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "You're the first voice I've had since the crossing.",
                "I keep expecting it to still be loud. It isn't. That's the strange part."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Everyone talks about Ash Bridge like it's one moment.",
                "It isn't. It's a hundred small ones, stacked until you can't tell which one broke you.",
                "I crossed it anyway. I don't fully know what's on this side yet."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Something's pulling at the line. Like the crossing didn't finish with me.",
                "Maybe it never does."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you ever have to cross something like it — don't look back until you'r—"
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
    bridgeDuration: 50,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "You'll have to talk a little louder. It's coming down hard here.",
                "It's always coming down hard here."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "It's been raining nine years where I am. I stopped counting, then started again.",
                "People adapt to strange things faster than you'd think.",
                "I've almost forgotten what dry sounds like."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "There's thunder now. It always takes the line with it.",
                "I don't think that's a coincidence anymore."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If it ever starts where you are, don't wait for it to sto—"
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
    bridgeDuration: 60,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "This is going to sound strange. I'm not calling to talk to you.",
                "I'm hoping you'll pass something on. If you ever meet her."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Her name is Mira. She used to leave the longest voicemails.",
                "I saved every one. I still listen to them out of order, on purpose.",
                "It makes her sound like she's still deciding what to say next."
            ],
            choices: [
                { label: "What do you want her to know?", next: "know" },
                { label: "Why not tell her yourself?", next: "why" }
            ]
        },
        know: {
            speaker: "future",
            lines: [
                "That I finally answered the last one.",
                "It only took me three years.",
                "Some replies need that long to become true."
            ],
            next: "urgency"
        },
        why: {
            speaker: "future",
            lines: [
                "Because the bridges never find her. Only people who might know her.",
                "It's the closest thing I have to trying.",
                "So I keep trying."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's fading. It always fades right when I get to the important part.",
                "Maybe that's the part I'm not ready to say out loud yet."
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
    bridgeDuration: 66,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "You came through on the fourth frequency. Almost nobody does.",
                "I've only heard about it. I didn't think I'd hear through it."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "We're not supposed to monitor it. It's technically decommissioned.",
                "I listen anyway. Most nights, nothing. Tonight, you.",
                "I don't know what that means. I'm choosing not to overthink it."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The fourth frequency doesn't hold long. It never has.",
                "That's probably why nobody uses it anymore. Too honest, too short."
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
    bridgeDuration: 46,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Hold on, I've got flour on my hands.",
                "There. Sorry. I was in the middle of something."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I cook for people who don't ask me to. It's easier than talking to them.",
                "Everyone here's lost something. Nobody says it out loud.",
                "The food says it for us, I think."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Something's beeping. Either the oven or the bridge. Possibly both.",
                "I should really go check."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you ever cook for someone who won't ask, that's how you kno—"
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
    bridgeDuration: 62,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "You caught us between songs. Give me a second to step out.",
                "We sing down here more than we talk. It travels better through rock."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Nobody remembers who started it. It just kept going.",
                "Forty of us, most nights. Sometimes more.",
                "It's the only time the tunnels don't feel like tunnels."
            ],
            choices: [
                { label: "What do you sing about?", next: "about" },
                { label: "Sing something for me", next: "sing" }
            ]
        },
        about: {
            speaker: "future",
            lines: [
                "Mostly the surface. None of us have seen it.",
                "We sing about things we've only been told existed.",
                "It sounds more true when forty voices believe it together."
            ],
            next: "urgency"
        },
        sing: {
            speaker: "future",
            lines: [
                "Alone I'm not much. You'd want the forty.",
                "But — okay. Just a line."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "They're calling me back. The signal doesn't reach far from the chamber.",
                "I'm already at the edge of it."
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
    bridgeDuration: 40,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Day one thousand and something. I stopped writing the exact number down.",
                "You're the first new voice in longer than I want to admit."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I talk to the relay sometimes, like it can answer.",
                "It never does. You did.",
                "I don't know what to do with that yet."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The relay's cycling down for the dust storm.",
                "It does that whether I'm ready or not."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Day one thousand and something, plus one voice that answer—"
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
    bridgeDuration: 72,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "You're not my brother. I know his voice better than anyone's.",
                "But you'll do. Everyone's a little bit of practice for him lately."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "He went to Station Nine and stopped writing.",
                "Not stopped like he forgot. Stopped like he decided to.",
                "I've been rehearsing what I'll say when the bridge finally gets it right."
            ],
            choices: [
                { label: "What will you say?", next: "say" },
                { label: "Why do you think he stopped?", next: "why" }
            ]
        },
        say: {
            speaker: "future",
            lines: [
                "That I'm not angry. That I was, and now I'm just tired of being angry.",
                "It's a shorter speech than it used to be.",
                "Grief edits well, if you let it."
            ],
            next: "urgency"
        },
        why: {
            speaker: "future",
            lines: [
                "I think he blamed himself for something small.",
                "Small things do that to people who already blame themselves for everything.",
                "I wish he knew nobody else was keeping score."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The bridge is thinning. Of course it's thinning now.",
                "It always thins right when I get close to saying it."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you ever reach Station Nine, tell him I'm not keeping sco—"
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
    bridgeDuration: 48,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I write a letter every week. Nobody's asked me to.",
                "Nobody reads them either, as far as I know."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I file them anyway. In case the archive outlives the reason for it.",
                "Someone, someday, might want to know what an ordinary week looked like.",
                "That's all most of them are. Ordinary weeks."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "I should write tonight down too. This counts as a week now.",
                "Maybe the most interesting one in a while."
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
    bridgeDuration: 44,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Are you allowed to be on this frequency? I'm not, technically.",
                "Don't tell my mother. She thinks I'm asleep."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "There's a man here everyone talks about like he's a ghost.",
                "Elias. He's not a ghost, he just doesn't say much.",
                "He gave me his old radio. I think that's how I found this frequency."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "I hear footsteps. If that's my mother, I have to go.",
                "It's my mother."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "If you ever meet Elias, tell him the radio still work—"
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
    bridgeDuration: 84,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "Someone told me a stranger might ask for me eventually.",
                "I didn't believe them. I still half don't."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "My name's Mira, if that means anything on your end.",
                "I've had a lot of things said to me secondhand over the years.",
                "It's strange, being the name in someone else's story."
            ],
            choices: [
                { label: "Someone planted a row for you", next: "row" },
                { label: "Someone finally answered your last voicemail", next: "voicemail" }
            ]
        },
        row: {
            speaker: "future",
            lines: [
                "The fence garden. I know it.",
                "I never asked who tends the row with my name on it.",
                "I think I liked not knowing. It felt less lonely, somehow."
            ],
            next: "urgency"
        },
        voicemail: {
            speaker: "future",
            lines: [
                "It took him three years. That sounds about right.",
                "I stopped waiting for an answer a long time ago.",
                "I'm glad I was wrong to stop."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The bridge is going. It always goes right after good news.",
                "I've noticed that before. I hate that I've noticed that before."
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Tell them I finally stopped keeping the light on for no reas—"
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
    bridgeDuration: 96,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I've been on every frequency there is, looking for one voice.",
                "I don't expect it to be yours. I've stopped expecting, mostly."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "There's a station, a garden, an archive, a choir underground.",
                "I've spoken to all of them, chasing the same name through every one.",
                "Somewhere out there, someone's still counting days for me too. I hope."
            ],
            choices: [
                { label: "What happens if you never find them?", next: "never" },
                { label: "What happens if you do?", next: "find" }
            ]
        },
        never: {
            speaker: "future",
            lines: [
                "Then I keep planting rows and writing letters no one reads.",
                "That's not nothing. I used to think it was nothing.",
                "It isn't."
            ],
            next: "urgency"
        },
        find: {
            speaker: "future",
            lines: [
                "I don't think I say anything at all. I think I just listen.",
                "I've had enough people talk at me across enough bridges.",
                "I'd just want to hear them breathe for a second."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Every bridge collapses the same way, in the end.",
                "I used to be afraid of that. I'm not anymore.",
                "Something always answers eventually. Even if it isn't who you asked for."
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
