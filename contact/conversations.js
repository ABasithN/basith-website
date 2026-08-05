const Conversation021 = {
    id: "021",
    title: "The Poet's Questions",
    rarity: "common",
    origin: "A Poet",
    bridgeDuration: 63,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't have long. Maybe this once, maybe never again.",
                "I'm a poet. That's all I'll say about myself.",
                "I want to know what people write about, where you are."
            ],
            choices: [
                { label: "Mostly complaints", next: "smallComplaints" },
                { label: "Barely by hand", next: "barelyWrite" }
            ]
        },
        smallComplaints: {
            speaker: "future",
            lines: [
                "Traffic. Weather. The usual.",
                "Sounds almost peaceful, hearing that."
            ],
            next: "middle"
        },
        barelyWrite: {
            speaker: "future",
            lines: [
                "Typed, then. Still counts.",
                "What's left when nobody writes by hand."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "I need to ask fast, in case this cuts.",
                "Do people still fall in love the same way? Slowly, I mean."
            ],
            choices: [
                { label: "Some do, mostly rush", next: "rushIt" },
                { label: "Harder, distracted", next: "distracted" }
            ]
        },
        rushIt: {
            speaker: "future",
            lines: [
                "Rushing it. That tracks with some things I've heard.",
                "Not everything, though."
            ],
            next: "late"
        },
        distracted: {
            speaker: "future",
            lines: [
                "Distracted by what, exactly.",
                "Never mind. I think I already know."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "One more. This might be the only chance I get.",
                "Is anyone still hopeful, where you are?"
            ],
            choices: [
                { label: "Some of us", next: "someHopeful" },
                { label: "Hard to say", next: "hardToSay" }
            ]
        },
        someHopeful: {
            speaker: "future",
            lines: [
                "Good. Write that down somewhere.",
                "Someone should."
            ],
            next: "urgency"
        },
        hardToSay: {
            speaker: "future",
            lines: [
                "Fair answer. Braver than most.",
                "I'll take it."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's going. I can feel it going.",
                "I won't get this back—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Thank you for answering. I needed to kno—"
            ],
            end: true
        }
    }
};

const Conversation022 = {
    id: "022",
    title: "The Musician Wants To Know",
    rarity: "common",
    origin: "A Musician",
    bridgeDuration: 66,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might only get this one shot, so I'll be quick.",
                "I'm a musician. Nothing else about me matters right now.",
                "Do people still dance? Just for fun, not for anything else."
            ],
            choices: [
                { label: "Yeah, at parties", next: "yesEverywhere" },
                { label: "Not as much", next: "notAsMuch" }
            ]
        },
        yesEverywhere: {
            speaker: "future",
            lines: [
                "Good. Really good, actually.",
                "That's one thing I was scared to ask about."
            ],
            next: "middle"
        },
        notAsMuch: {
            speaker: "future",
            lines: [
                "Why not? Too busy? Too tired?",
                "Both, probably."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "What does music sound like now. Loud? Quiet? Sad?",
                "I need to know if it changed."
            ],
            choices: [
                { label: "All kinds", next: "allKinds" },
                { label: "Kind of sad", next: "kindOfSad" }
            ]
        },
        allKinds: {
            speaker: "future",
            lines: [
                "That's the right answer, I think.",
                "Music's not supposed to agree on one mood."
            ],
            next: "late"
        },
        kindOfSad: {
            speaker: "future",
            lines: [
                "Makes sense. People write what's true.",
                "Doesn't mean it's all bad news, though."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "This might be it for me, so — one last thing.",
                "Do people still sing together? In groups, I mean."
            ],
            choices: [
                { label: "Sometimes, in groups", next: "concertsChurches" },
                { label: "Mostly headphones", next: "headphones" }
            ]
        },
        concertsChurches: {
            speaker: "future",
            lines: [
                "That's enough. That's more than enough, actually."
            ],
            next: "urgency"
        },
        headphones: {
            speaker: "future",
            lines: [
                "Alone, then. Together, but alone.",
                "I was worried you'd say that."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Signal's dying. I can feel it dying.",
                "This was my one shot at this—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Keep singing together if you can. It matte—"
            ],
            end: true
        }
    }
};

const Conversation023 = {
    id: "023",
    title: "The Scientist's Last Query",
    rarity: "uncommon",
    origin: "A Scientist",
    bridgeDuration: 73,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I have one shot at this. I won't waste it on small talk.",
                "I'm a scientist. That's all you need to know about me.",
                "Tell me honestly: how bad is the weather where you are?"
            ],
            choices: [
                { label: "Getting worse", next: "gettingWorse" },
                { label: "Bad, not everywhere", next: "notEverywhere" }
            ]
        },
        gettingWorse: {
            speaker: "future",
            lines: [
                "Thought so. That lines up with what little data we have.",
                "Keep answering honestly. It matters more than you know."
            ],
            next: "middle"
        },
        notEverywhere: {
            speaker: "future",
            lines: [
                "Not everywhere yet. Note the word yet.",
                "I need to know how people are responding to it."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Are people doing anything about it? Really doing something?",
                "Not talking. Doing."
            ],
            choices: [
                { label: "Some are trying", next: "someIgnore" },
                { label: "Slow, but changing", next: "slowChange" }
            ]
        },
        someIgnore: {
            speaker: "future",
            lines: [
                "Some is better than none. I'll hold onto that.",
                "Ignoring it costs more than people think."
            ],
            next: "late"
        },
        slowChange: {
            speaker: "future",
            lines: [
                "Slow is still something. Slow can still work, if it's early enough.",
                "Tell me it's early enough."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question, and it's the one I actually need answered.",
                "Do you believe it can still be fixed?"
            ],
            choices: [
                { label: "I want to believe", next: "wantBelieve" },
                { label: "I don't know", next: "dontKnow" }
            ]
        },
        wantBelieve: {
            speaker: "future",
            lines: [
                "That's more than most people give me.",
                "Hold onto wanting to. It counts for something."
            ],
            next: "urgency"
        },
        dontKnow: {
            speaker: "future",
            lines: [
                "Honest answer. I respect that more than false hope.",
                "Not knowing isn't the same as giving up."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "The line's breaking up. Of course it is, right now.",
                "I need you to remember what I asked—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Whatever you do, don't stop trying to fi—"
            ],
            end: true
        }
    }
};

const Conversation024 = {
    id: "024",
    title: "The Historian Asking Backwards",
    rarity: "uncommon",
    origin: "A Historian",
    bridgeDuration: 74,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if this connection comes back. Assume it doesn't.",
                "I study history. That's the only thing I'll tell you about myself.",
                "First question: what year is it for you, right now?"
            ],
            choices: [
                { label: "Tell them the year", next: "tellYear" },
                { label: "Why does it matter?", next: "whyMatters" }
            ]
        },
        tellYear: {
            speaker: "future",
            lines: [
                "Good. That helps me more than you'd think.",
                "The records past this point get messy for us."
            ],
            next: "middle"
        },
        whyMatters: {
            speaker: "future",
            lines: [
                "Because half our records from around now are gone.",
                "Fires, floods, bad storage. Pick one."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "What's the biggest thing happening in the news right now?",
                "Just the biggest one. I don't need details."
            ],
            choices: [
                { label: "Political mess", next: "political" },
                { label: "Fast-changing tech", next: "techChanging" }
            ]
        },
        political: {
            speaker: "future",
            lines: [
                "A mess. That word shows up a lot in the records too.",
                "Consistent, at least."
            ],
            next: "late"
        },
        techChanging: {
            speaker: "future",
            lines: [
                "That tracks. Everything after this point moves fast.",
                "Faster than people expected, from what's left of the records."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last thing, and it's the one that actually brought me here.",
                "Do people know something's about to change? Do they feel it?"
            ],
            choices: [
                { label: "Feels different lately", next: "feelsDifferent" },
                { label: "Just normal life", next: "normalLives" }
            ]
        },
        feelsDifferent: {
            speaker: "future",
            lines: [
                "They're right to feel that.",
                "I wish I could tell you more. I really can't."
            ],
            next: "urgency"
        },
        normalLives: {
            speaker: "future",
            lines: [
                "Maybe that's for the best, actually.",
                "Not everyone needs to carry it."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's fading. I knew it would, eventually.",
                "This is going in the record, whatever's left of i—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Someone, someday, should know you answered honestl—"
            ],
            end: true
        }
    }
};

const Conversation025 = {
    id: "025",
    title: "The Doctor's Worry",
    rarity: "common",
    origin: "A Doctor",
    bridgeDuration: 65,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might not get this chance again, so I'll ask straight.",
                "I'm a doctor. I won't say more than that.",
                "How are people doing, really? Not fine. Really."
            ],
            choices: [
                { label: "Mostly tired", next: "tired" },
                { label: "Depends who you ask", next: "depends" }
            ]
        },
        tired: {
            speaker: "future",
            lines: [
                "Tired shows up a lot when I ask this.",
                "Tired of what, if you had to guess."
            ],
            next: "middle"
        },
        depends: {
            speaker: "future",
            lines: [
                "Fair. It always depends.",
                "Tell me about the people it's hardest for."
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Are people looking after each other? Actually checking in?",
                "Not just online. In person."
            ],
            choices: [
                { label: "Some are, but alone", next: "feelAlone" },
                { label: "More than you'd think", next: "moreThanThink" }
            ]
        },
        feelAlone: {
            speaker: "future",
            lines: [
                "That's the part I worry about most.",
                "Alone costs more than people realize."
            ],
            next: "late"
        },
        moreThanThink: {
            speaker: "future",
            lines: [
                "Good. I needed to hear that more than I expected.",
                "Keep doing that. It matters more than medicine, some days."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "One more, and it's the important one.",
                "If someone you know is struggling, do you actually ask them?"
            ],
            choices: [
                { label: "I try to", next: "tryTo" },
                { label: "Not often enough", next: "notOften" }
            ]
        },
        tryTo: {
            speaker: "future",
            lines: [
                "Trying counts for more than you think.",
                "Keep trying, even badly."
            ],
            next: "urgency"
        },
        notOften: {
            speaker: "future",
            lines: [
                "Start today, then. While you still can.",
                "That's not a lecture. That's a request."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's going. I can feel it slipping.",
                "Please, just remember what I aske—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Check on someone today. Please, before you fo—"
            ],
            end: true
        }
    }
};

const Conversation026 = {
    id: "026",
    title: "The Teacher Wants To Know",
    rarity: "common",
    origin: "A Teacher",
    bridgeDuration: 70,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if I get another try at this, so quickly.",
                "I'm a teacher. That's all I'll say about me.",
                "What are kids being taught right now? The important stuff, not facts."
            ],
            choices: [
                { label: "Mostly tests", next: "mostlyTests" },
                { label: "Some teach kindness", next: "teachKindness" }
            ]
        },
        mostlyTests: {
            speaker: "future",
            lines: [
                "Tests. Some things really don't change.",
                "Do the kids seem to enjoy any of it?"
            ],
            next: "middle"
        },
        teachKindness: {
            speaker: "future",
            lines: [
                "That's good to hear. Genuinely.",
                "Does it actually stick, do you think?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Are kids scared about the future? Do they talk about it?",
                "I need to know if they're scared."
            ],
            choices: [
                { label: "Some are scared", next: "seeNews" },
                { label: "Kids stay hopeful", next: "moreHopeful" }
            ]
        },
        seeNews: {
            speaker: "future",
            lines: [
                "They shouldn't have to carry that so young.",
                "But I understand why they do."
            ],
            next: "late"
        },
        moreHopeful: {
            speaker: "future",
            lines: [
                "That's the best thing you've told me so far.",
                "Hold onto that. Protect it, even."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last one, and it matters most to me.",
                "Do kids still get to just play? Not learn. Just play."
            ],
            choices: [
                { label: "Yes, less than before", next: "yesLess" },
                { label: "Not much, too scheduled", next: "notMuch" }
            ]
        },
        yesLess: {
            speaker: "future",
            lines: [
                "Less than before, but yes.",
                "I'll take yes. I needed a yes."
            ],
            next: "urgency"
        },
        notMuch: {
            speaker: "future",
            lines: [
                "Scheduled. That word again.",
                "Let them play more, if you can. Please."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's cutting out. I knew it would eventually.",
                "Tell them play matters, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Let the kids play. That's the whole messag—"
            ],
            end: true
        }
    }
};

const Conversation027 = {
    id: "027",
    title: "The Farmer Asking About the Land",
    rarity: "uncommon",
    origin: "A Farmer",
    bridgeDuration: 73,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "This might be my only shot, so I'll ask plain.",
                "I work the land. That's all I'll tell you about myself.",
                "How's the soil where you are? Still good, or tired?"
            ],
            choices: [
                { label: "Some good, some worn", next: "someGood" },
                { label: "Getting harder", next: "gettingHarder" }
            ]
        },
        someGood: {
            speaker: "future",
            lines: [
                "Some good is more than I expected to hear.",
                "Are people still working it by hand, or is it all machines now?"
            ],
            next: "middle"
        },
        gettingHarder: {
            speaker: "future",
            lines: [
                "Harder. Figured as much.",
                "Are people still working it by hand, or is it all machines now?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Machines, mostly, or still real hands in the dirt?",
                "I need to know if the work's still human."
            ],
            choices: [
                { label: "Mostly machines", next: "mostlyMachines" },
                { label: "Still real hands", next: "stillHands" }
            ]
        },
        mostlyMachines: {
            speaker: "future",
            lines: [
                "Fewer hands. That's the direction I feared.",
                "Faster, I'm sure. Not sure it's better."
            ],
            next: "late"
        },
        stillHands: {
            speaker: "future",
            lines: [
                "Good. That's genuinely good to hear.",
                "Some things are worth keeping slow."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question. Does anyone still grow food just to share it?",
                "Not to sell. To give away."
            ],
            choices: [
                { label: "Yeah, plenty still do", next: "stillDo" },
                { label: "Less, costs money now", next: "costsMoney" }
            ]
        },
        stillDo: {
            speaker: "future",
            lines: [
                "That's the best thing I've heard all conversation.",
                "Keep doing that, whatever else changes."
            ],
            next: "urgency"
        },
        costsMoney: {
            speaker: "future",
            lines: [
                "Everything costs money now. That one hurts a bit.",
                "Try to keep some of it free, if you can."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Signal's going. Figured it would, out here.",
                "Take care of the land while you still ca—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Grow something and give it away. That's al—"
            ],
            end: true
        }
    }
};

const Conversation028 = {
    id: "028",
    title: "The Engineer's Diagnostic",
    rarity: "uncommon",
    origin: "An Engineer",
    bridgeDuration: 69,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I've got one window here. I'll use it well.",
                "I'm an engineer. That's all I'll tell you about myself.",
                "What do your cities actually look like right now?"
            ],
            choices: [
                { label: "Crowded, building fast", next: "crowdedBuilding" },
                { label: "Some boom, some fall", next: "boomingFalling" }
            ]
        },
        crowdedBuilding: {
            speaker: "future",
            lines: [
                "Fast building. That usually means fast mistakes too.",
                "Is the power grid keeping up with any of it?"
            ],
            next: "middle"
        },
        boomingFalling: {
            speaker: "future",
            lines: [
                "Uneven. That's about what I expected.",
                "Is the power grid keeping up with any of it?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Power. Water. The boring stuff that actually matters.",
                "Is any of it breaking down where you are?"
            ],
            choices: [
                { label: "More outages now", next: "outages" },
                { label: "Holds up, but worry", next: "holdsUp" }
            ]
        },
        outages: {
            speaker: "future",
            lines: [
                "More outages. Noted, and not good news.",
                "That's usually where things start to slip."
            ],
            next: "late"
        },
        holdsUp: {
            speaker: "future",
            lines: [
                "Worry's not nothing. Worry usually means people are paying attention.",
                "Better than not noticing at all."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last thing, and it's the one I actually care about.",
                "Is anyone building things to last, or just to sell?"
            ],
            choices: [
                { label: "Mostly to sell", next: "toSell" },
                { label: "Some build to last", next: "toLast" }
            ]
        },
        toSell: {
            speaker: "future",
            lines: [
                "Figured. That's the pattern that gets us here.",
                "Push back on that, where you can."
            ],
            next: "urgency"
        },
        toLast: {
            speaker: "future",
            lines: [
                "Good. Build more like them, if you can convince anyone.",
                "Lasting is underrated."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Losing the connection. Expected, honestly.",
                "Build things to last, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Fix the boring things first. That's the real messag—"
            ],
            end: true
        }
    }
};

const Conversation029 = {
    id: "029",
    title: "The Astronomer Looking Down",
    rarity: "rare",
    origin: "An Astronomer",
    bridgeDuration: 71,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might not get another window like this. Ever.",
                "I study the sky. That's all you need to know about me.",
                "Can you still see the stars where you are, at night?"
            ],
            choices: [
                { label: "Some places, not city", next: "somePlaces" },
                { label: "Barely, too much light", next: "barely" }
            ]
        },
        somePlaces: {
            speaker: "future",
            lines: [
                "Some places is more than I hoped for, honestly.",
                "Do people still go out of their way to see them?"
            ],
            next: "middle"
        },
        barely: {
            speaker: "future",
            lines: [
                "Too much light. That's what the old records suggested too.",
                "Do people still go out of their way to see them?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Do people still look up on purpose? Not by accident.",
                "I need to know if anyone still bothers."
            ],
            choices: [
                { label: "Some do, it's rare", next: "someDo" },
                { label: "Mostly screens instead", next: "screensInstead" }
            ]
        },
        someDo: {
            speaker: "future",
            lines: [
                "Rare's fine. Rare still counts.",
                "I was scared you'd say nobody does at all."
            ],
            next: "late"
        },
        screensInstead: {
            speaker: "future",
            lines: [
                "Screens instead of the sky. That one stings a little.",
                "Tell me that's not the whole story, though."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question, and it's the real reason I called.",
                "If you looked up tonight, would it still feel like it mattered?"
            ],
            choices: [
                { label: "Yeah, it matters", next: "alwaysMatters" },
                { label: "I should look more", next: "dontLookUp" }
            ]
        },
        alwaysMatters: {
            speaker: "future",
            lines: [
                "That's the answer I needed.",
                "Some things really don't change, then. Good."
            ],
            next: "urgency"
        },
        dontLookUp: {
            speaker: "future",
            lines: [
                "Start tonight, then. While it's still there to see.",
                "It won't wait for you forever."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Signal's dying with the light, seems fitting.",
                "Look up tonight, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "The sky's still there. Don't forget to loo—"
            ],
            end: true
        }
    }
};

const Conversation030 = {
    id: "030",
    title: "The Child Who Found the Frequency",
    rarity: "rare",
    origin: "A Child",
    bridgeDuration: 71,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I'm not supposed to be on this, but I found it and I don't know if it works again.",
                "I'm just a kid. That's all I'm allowed to say.",
                "Is it true you had actual animals just walking around outside?"
            ],
            choices: [
                { label: "Yeah, all kinds", next: "yesAnimals" },
                { label: "Fewer, but still some", next: "fewerAnimals" }
            ]
        },
        yesAnimals: {
            speaker: "future",
            lines: [
                "That's so cool. I've only seen pictures.",
                "Did you get to actually touch them and stuff?"
            ],
            next: "middle"
        },
        fewerAnimals: {
            speaker: "future",
            lines: [
                "Still some is still cool to me.",
                "Did you get to actually touch them and stuff?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Was it true you could just go outside whenever you wanted?",
                "No permission, no schedule, just go?"
            ],
            choices: [
                { label: "Yeah, played outside", next: "playedOutside" },
                { label: "Depends where you lived", next: "dependsWhere" }
            ]
        },
        playedOutside: {
            speaker: "future",
            lines: [
                "That sounds amazing, not gonna lie.",
                "We mostly stay inside where I am."
            ],
            next: "late"
        },
        dependsWhere: {
            speaker: "future",
            lines: [
                "Depends where. Okay, that makes sense.",
                "We mostly stay inside where I am."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Okay, last one, I think someone's coming.",
                "Were people happy back then? Like, actually happy?"
            ],
            choices: [
                { label: "A lot of us were", next: "lotWere" },
                { label: "Some were, not all", next: "someWere" }
            ]
        },
        lotWere: {
            speaker: "future",
            lines: [
                "A lot were. I'll remember that.",
                "That's a good thing to remember."
            ],
            next: "urgency"
        },
        someWere: {
            speaker: "future",
            lines: [
                "Some. Okay. I'll take some.",
                "Better than none, I think."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's getting fuzzy, I think it's about to cut out.",
                "I have to go before someone catch—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Go outside today, okay? For me. Ple—"
            ],
            end: true
        }
    }
};

const Conversation031 = {
    id: "031",
    title: "The Artist Asking About Beauty",
    rarity: "common",
    origin: "An Artist",
    bridgeDuration: 62,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if I get another try, so I'll ask what matters.",
                "I make art. That's all I'll say about me.",
                "Do people still make things just because they're beautiful?"
            ],
            choices: [
                { label: "Yeah, still some do", next: "stillSomeDo" },
                { label: "Mostly for money now", next: "mostlyMoney" }
            ]
        },
        stillSomeDo: {
            speaker: "future",
            lines: [
                "Good. That's not nothing.",
                "Do people go out of their way to see it?"
            ],
            next: "middle"
        },
        mostlyMoney: {
            speaker: "future",
            lines: [
                "Figured that might be the answer.",
                "Do people go out of their way to see it anyway?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Museums, galleries, walls in the street.",
                "Do people actually stop and look?"
            ],
            choices: [
                { label: "Some do, quickly", next: "quickly" },
                { label: "Not really, too rushed", next: "tooRushed" }
            ]
        },
        quickly: {
            speaker: "future",
            lines: [
                "Quickly's still looking.",
                "I'll take quickly over nothing."
            ],
            next: "late"
        },
        tooRushed: {
            speaker: "future",
            lines: [
                "Rushed past art. That's a strange kind of loss.",
                "Nobody notices it happening, I bet."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last one. Would you make something if nobody ever saw it?",
                "Just for yourself. No audience."
            ],
            choices: [
                { label: "Yeah, I think so", next: "yesThinkSo" },
                { label: "Honestly, probably not", next: "probablyNot" }
            ]
        },
        yesThinkSo: {
            speaker: "future",
            lines: [
                "That's the real answer, I think.",
                "The rest is just noise around it."
            ],
            next: "urgency"
        },
        probablyNot: {
            speaker: "future",
            lines: [
                "Honest. Most people wouldn't, if they said it straight.",
                "Doesn't make the art less real, though."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Losing this. Faster than I hoped.",
                "Make something today, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Make it for yourself first. That's the who—"
            ],
            end: true
        }
    }
};

const Conversation032 = {
    id: "032",
    title: "The Journalist Chasing the Truth",
    rarity: "uncommon",
    origin: "A Journalist",
    bridgeDuration: 66,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "One shot at this. I'll ask like it's the last interview I get.",
                "I report the news. That's all I'll say about myself.",
                "Do people still trust what they read or watch?"
            ],
            choices: [
                { label: "Not really, not anymore", next: "notReally" },
                { label: "Some sources, not all", next: "someSources" }
            ]
        },
        notReally: {
            speaker: "future",
            lines: [
                "That's what I was afraid of.",
                "Do people even try to check what's true?"
            ],
            next: "middle"
        },
        someSources: {
            speaker: "future",
            lines: [
                "Some is better than none, I suppose.",
                "Do people even try to check what's true?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Checking facts. Slowing down before believing something.",
                "Does anyone actually do that anymore?"
            ],
            choices: [
                { label: "A few, most don't bother", next: "fewBother" },
                { label: "People are trying harder", next: "tryingHarder" }
            ]
        },
        fewBother: {
            speaker: "future",
            lines: [
                "That's how it starts. A few, then fewer.",
                "I've seen where that road ends."
            ],
            next: "late"
        },
        tryingHarder: {
            speaker: "future",
            lines: [
                "That's actually hopeful. Genuinely.",
                "Keep trying harder. It compounds."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last one, and it's personal for me.",
                "Would you still tell the truth if it cost you something?"
            ],
            choices: [
                { label: "I hope so", next: "hopeSo" },
                { label: "Depends how much", next: "dependsMuch" }
            ]
        },
        hopeSo: {
            speaker: "future",
            lines: [
                "Hope's a start.",
                "It's more than a lot of people offer me."
            ],
            next: "urgency"
        },
        dependsMuch: {
            speaker: "future",
            lines: [
                "Honest, at least.",
                "Most people won't even admit that part."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Cutting out. Feels almost fitting, given my job.",
                "Keep asking questions, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Don't stop checking what's true. That's al—"
            ],
            end: true
        }
    }
};

const Conversation033 = {
    id: "033",
    title: "The Architect Asking About Home",
    rarity: "common",
    origin: "An Architect",
    bridgeDuration: 73,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if this window opens again, so I'll be direct.",
                "I design buildings. That's all I'll say about myself.",
                "Do people still feel like their homes are actually home?"
            ],
            choices: [
                { label: "Mostly, yeah", next: "mostlyYeah" },
                { label: "Less than before", next: "lessThanBefore" }
            ]
        },
        mostlyYeah: {
            speaker: "future",
            lines: [
                "Good. That's the whole point of the job, really.",
                "Are old buildings still standing, or torn down for new ones?"
            ],
            next: "middle"
        },
        lessThanBefore: {
            speaker: "future",
            lines: [
                "That's what I feared hearing.",
                "Are old buildings still standing, or torn down for new ones?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "The old ones. The ones with history in the walls.",
                "Do people fight to keep them, or let them go?"
            ],
            choices: [
                { label: "Some fight to keep them", next: "fightKeep" },
                { label: "Mostly torn down now", next: "tornDown" }
            ]
        },
        fightKeep: {
            speaker: "future",
            lines: [
                "Good. Buildings remember things people forget.",
                "Worth the fight, most of the time."
            ],
            next: "late"
        },
        tornDown: {
            speaker: "future",
            lines: [
                "Figured. New is easier to sell than old.",
                "Doesn't mean it's better, though."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last thing. Do cities still have places to just sit and do nothing?",
                "Benches. Parks. No purpose required."
            ],
            choices: [
                { label: "Yeah, still plenty", next: "stillPlenty" },
                { label: "Fewer than they used to", next: "fewerThanUsed" }
            ]
        },
        stillPlenty: {
            speaker: "future",
            lines: [
                "Good. Keep those. Fight for those too.",
                "Cities need places that ask nothing of you."
            ],
            next: "urgency"
        },
        fewerThanUsed: {
            speaker: "future",
            lines: [
                "Everything gets a price tag eventually, doesn't it.",
                "Try to keep a few free."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Signal's shaking loose. I knew this was borrowed time.",
                "Keep the old buildings, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Save the ones with history in the wal—"
            ],
            end: true
        }
    }
};

const Conversation034 = {
    id: "034",
    title: "The Nurse Asking Who's Cared For",
    rarity: "uncommon",
    origin: "A Nurse",
    bridgeDuration: 69,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might not get another chance at this, so straight to it.",
                "I work in a hospital. That's all I'll say about myself.",
                "Do people get the care they actually need, where you are?"
            ],
            choices: [
                { label: "Depends on money", next: "dependsMoney" },
                { label: "Mostly, but it's slow", next: "mostlySlow" }
            ]
        },
        dependsMoney: {
            speaker: "future",
            lines: [
                "That's the answer that scares me most.",
                "Are the people caring for others okay themselves?"
            ],
            next: "middle"
        },
        mostlySlow: {
            speaker: "future",
            lines: [
                "Slow, but mostly. I'll take that.",
                "Are the people caring for others okay themselves?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Nurses. Doctors. The ones doing the caring.",
                "Is anyone looking after them too?"
            ],
            choices: [
                { label: "They're stretched", next: "stretched" },
                { label: "Some places try to", next: "somePlacesTry" }
            ]
        },
        stretched: {
            speaker: "future",
            lines: [
                "Thought so. Same story here, worse probably.",
                "Nobody plans for the people doing the planning."
            ],
            next: "late"
        },
        somePlacesTry: {
            speaker: "future",
            lines: [
                "Some is more than none.",
                "Tell them someone from far away noticed the effort."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question, and it's the one I actually needed to ask.",
                "If you were scared and alone, would someone come?"
            ],
            choices: [
                { label: "I think so", next: "thinkSo" },
                { label: "I'm honestly not sure", next: "notSure" }
            ]
        },
        thinkSo: {
            speaker: "future",
            lines: [
                "That's a good thing to be able to say.",
                "Don't take it for granted."
            ],
            next: "urgency"
        },
        notSure: {
            speaker: "future",
            lines: [
                "That's the part worth fixing, then.",
                "Be the one who comes, for someone else."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's slipping. Faster than I'd like.",
                "Be the one who comes, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Check on someone tonight. That's the real reque—"
            ],
            end: true
        }
    }
};

const Conversation035 = {
    id: "035",
    title: "The Chef Asking About the Table",
    rarity: "common",
    origin: "A Chef",
    bridgeDuration: 69,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if I get this chance twice, so let's use it well.",
                "I cook for a living. That's all I'll say about me.",
                "Do families still sit down and eat together?"
            ],
            choices: [
                { label: "Sometimes, not often", next: "sometimesNotOften" },
                { label: "Yeah, most nights", next: "mostNights" }
            ]
        },
        sometimesNotOften: {
            speaker: "future",
            lines: [
                "That's what I was afraid you'd say.",
                "Is anyone still cooking real meals, or mostly ordering in?"
            ],
            next: "middle"
        },
        mostNights: {
            speaker: "future",
            lines: [
                "Good. That's rarer than you'd think, from what I hear.",
                "Is anyone still cooking real meals, or mostly ordering in?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Real food, made by hand. Not delivered in a box.",
                "Does that still happen much?"
            ],
            choices: [
                { label: "Less than it used to", next: "lessThanUsed" },
                { label: "Yeah, plenty still cook", next: "stillCook" }
            ]
        },
        lessThanUsed: {
            speaker: "future",
            lines: [
                "Everyone's short on time, I bet.",
                "It's the first thing people give up."
            ],
            next: "late"
        },
        stillCook: {
            speaker: "future",
            lines: [
                "Good. Cooking's how people say things they can't say out loud.",
                "Glad that's not gone yet."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last thing. When you eat with someone, does it feel like something?",
                "Or just fuel, these days?"
            ],
            choices: [
                { label: "Still feels special", next: "stillFeels" },
                { label: "Mostly just fuel now", next: "mostlyFuel" }
            ]
        },
        stillFeels: {
            speaker: "future",
            lines: [
                "Good. Don't lose that. Ever.",
                "That's the whole reason I do this job."
            ],
            next: "urgency"
        },
        mostlyFuel: {
            speaker: "future",
            lines: [
                "That's a shame, honestly.",
                "Try to make one meal mean something soon."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Cutting out. The oven timer outlasted this bridge, go figure.",
                "Cook for someone tonight, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Sit down and eat with someone. That's al—"
            ],
            end: true
        }
    }
};

const Conversation036 = {
    id: "036",
    title: "The Sailor Asking About the Sea",
    rarity: "uncommon",
    origin: "A Sailor",
    bridgeDuration: 70,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might only get this one window, so let's not waste it.",
                "I work the sea. That's all I'll say about myself.",
                "Is the ocean still clean where you are, or is it choking?"
            ],
            choices: [
                { label: "Some parts clean", next: "somePartsClean" },
                { label: "Getting worse, honestly", next: "gettingWorseSea" }
            ]
        },
        somePartsClean: {
            speaker: "future",
            lines: [
                "Some is more than I expected, truthfully.",
                "Do people still travel it, or is everyone flying now?"
            ],
            next: "middle"
        },
        gettingWorseSea: {
            speaker: "future",
            lines: [
                "That matches what little we know.",
                "Do people still travel it, or is everyone flying now?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Ships. Slow travel. Watching the water for days.",
                "Does anyone still do it for the sake of it?"
            ],
            choices: [
                { label: "A few do, for fun", next: "fewForFun" },
                { label: "Not really, too slow now", next: "tooSlowNow" }
            ]
        },
        fewForFun: {
            speaker: "future",
            lines: [
                "Good. The sea teaches you patience nothing else does.",
                "Glad a few still learn it."
            ],
            next: "late"
        },
        tooSlowNow: {
            speaker: "future",
            lines: [
                "Everyone's in a hurry, I take it.",
                "The sea doesn't care how much of a hurry you're in."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question. Have you ever stood and just watched the water?",
                "Not for a reason. Just watched it."
            ],
            choices: [
                { label: "Yeah, once or twice", next: "onceOrTwice" },
                { label: "Honestly, never really", next: "neverReally" }
            ]
        },
        onceOrTwice: {
            speaker: "future",
            lines: [
                "Then you already know what I mean.",
                "Do it again soon."
            ],
            next: "urgency"
        },
        neverReally: {
            speaker: "future",
            lines: [
                "Find water and just stand there sometime.",
                "It changes something in you, quietly."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Signal's rocking with the waves, feels about right.",
                "Go find water, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Stand by the water sometime soon. That's al—"
            ],
            end: true
        }
    }
};

const Conversation037 = {
    id: "037",
    title: "The Athlete Asking About Play",
    rarity: "common",
    origin: "An Athlete",
    bridgeDuration: 71,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if I get another shot, so quick and honest, okay?",
                "I play sports for a living. That's all I'll say.",
                "Do people still play just for fun? Not to win anything."
            ],
            choices: [
                { label: "Yeah, plenty still do", next: "plentyStillDo" },
                { label: "Mostly about winning now", next: "mostlyWinning" }
            ]
        },
        plentyStillDo: {
            speaker: "future",
            lines: [
                "Good. That's the part I was scared we'd lose.",
                "Do kids still play pickup games, no coaches, no scores?"
            ],
            next: "middle"
        },
        mostlyWinning: {
            speaker: "future",
            lines: [
                "Figured. Everything gets competitive eventually.",
                "Do kids still play pickup games, no coaches, no scores?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Just kids, a ball, no adults watching and scoring.",
                "Does that still happen?"
            ],
            choices: [
                { label: "Some still do that", next: "someStillDo" },
                { label: "All organized now", next: "everythingOrganized" }
            ]
        },
        someStillDo: {
            speaker: "future",
            lines: [
                "Good. That's where the love of it actually starts.",
                "Everything after that is just extra."
            ],
            next: "late"
        },
        everythingOrganized: {
            speaker: "future",
            lines: [
                "Organized. Scheduled. Scored.",
                "Sounds exhausting for a kid, honestly."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last one. Do you move your body just because it feels good?",
                "Not for a goal. Just because."
            ],
            choices: [
                { label: "Sometimes, yeah", next: "sometimesYeah" },
                { label: "Honestly, rarely", next: "honestlyRarely" }
            ]
        },
        sometimesYeah: {
            speaker: "future",
            lines: [
                "Good. Keep that. It's rarer than winning.",
                "Nobody tells you that part."
            ],
            next: "urgency"
        },
        honestlyRarely: {
            speaker: "future",
            lines: [
                "Try it today, even a little.",
                "It doesn't need to be a workout."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Clock's running out on this too, funny enough.",
                "Go move for the fun of it, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Play like nobody's keeping score. That's al—"
            ],
            end: true
        }
    }
};

const Conversation038 = {
    id: "038",
    title: "The Photographer Chasing Memory",
    rarity: "uncommon",
    origin: "A Photographer",
    bridgeDuration: 73,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might not get another try, so I'll ask what I actually came for.",
                "I take pictures. That's all I'll say about myself.",
                "Do people still print photos, or is it all just on screens?"
            ],
            choices: [
                { label: "Almost all screens now", next: "almostAllScreens" },
                { label: "Some still print them", next: "somePrintThem" }
            ]
        },
        almostAllScreens: {
            speaker: "future",
            lines: [
                "Figured. Easier to lose a screen than a shoebox, though.",
                "Do people take photos to remember, or just to post?"
            ],
            next: "middle"
        },
        somePrintThem: {
            speaker: "future",
            lines: [
                "Good. Paper survives things screens don't.",
                "Do people take photos to remember, or just to post?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "The reason behind the picture. That's what I need to know.",
                "Remembering, or showing off?"
            ],
            choices: [
                { label: "Mostly showing off", next: "showingOff" },
                { label: "Still mostly to remember", next: "toRemember" }
            ]
        },
        showingOff: {
            speaker: "future",
            lines: [
                "That's what I was afraid of.",
                "The best photos were never for anyone else."
            ],
            next: "late"
        },
        toRemember: {
            speaker: "future",
            lines: [
                "Good. That's the whole point I've always believed in.",
                "Keep taking them for that reason."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last thing. Do you have a photo of someone you've lost?",
                "One you actually go back and look at?"
            ],
            choices: [
                { label: "Yeah, I do", next: "yesIDo" },
                { label: "Not really, I should", next: "notReallyShould" }
            ]
        },
        yesIDo: {
            speaker: "future",
            lines: [
                "Go look at it again soon.",
                "That's the whole job, really. Keeping people looked at."
            ],
            next: "urgency"
        },
        notReallyShould: {
            speaker: "future",
            lines: [
                "Find one. Today, if you can.",
                "It matters more than it seems like it should."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Losing the picture on my end too, that's funny.",
                "Go look at that photo, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Take one today, just to remember. That's al—"
            ],
            end: true
        }
    }
};

const Conversation039 = {
    id: "039",
    title: "The Pilot Asking About Distance",
    rarity: "uncommon",
    origin: "A Pilot",
    bridgeDuration: 71,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if this comes back, so let's not waste the window.",
                "I fly for a living. That's all I'll say about myself.",
                "Can people still travel wherever they want, or are borders closed?"
            ],
            choices: [
                { label: "Mostly open, still", next: "mostlyOpen" },
                { label: "Harder than it used to be", next: "harderThanUsed" }
            ]
        },
        mostlyOpen: {
            speaker: "future",
            lines: [
                "Good. That's not nothing, these days.",
                "Do people still travel just to see somewhere new?"
            ],
            next: "middle"
        },
        harderThanUsed: {
            speaker: "future",
            lines: [
                "That's the direction I feared.",
                "Do people still travel just to see somewhere new?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Not for work. Not to escape anything. Just to see it.",
                "Does that still happen much?"
            ],
            choices: [
                { label: "Yeah, people still do", next: "peopleStillDo" },
                { label: "Fewer can afford to", next: "fewerAfford" }
            ]
        },
        peopleStillDo: {
            speaker: "future",
            lines: [
                "Good. The world's worth seeing while it's still there to see.",
                "Glad people still bother."
            ],
            next: "late"
        },
        fewerAfford: {
            speaker: "future",
            lines: [
                "Money again. Always money.",
                "That one's older than either of us, probably."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question. From way up there, does the world still look big?",
                "Or does it feel small now?"
            ],
            choices: [
                { label: "Still feels pretty big", next: "stillBig" },
                { label: "Feels smaller these days", next: "feelsSmaller" }
            ]
        },
        stillBig: {
            speaker: "future",
            lines: [
                "Good. Don't let anyone convince you otherwise.",
                "It's bigger than most people ever bother to see."
            ],
            next: "urgency"
        },
        feelsSmaller: {
            speaker: "future",
            lines: [
                "Go somewhere new, then. Remind yourself.",
                "It's bigger than it feels from one spot."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Losing altitude on this signal, if that makes sense.",
                "Go see somewhere new, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "The world's still worth seeing. That's al—"
            ],
            end: true
        }
    }
};

const Conversation040 = {
    id: "040",
    title: "The Librarian Asking About Books",
    rarity: "common",
    origin: "A Librarian",
    bridgeDuration: 65,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might not get this chance twice, so let's use it well.",
                "I look after books. That's all I'll say about myself.",
                "Do people still read? Real books, cover to cover?"
            ],
            choices: [
                { label: "Some do, not many", next: "someNotMany" },
                { label: "More than you'd think", next: "moreThanThinkBooks" }
            ]
        },
        someNotMany: {
            speaker: "future",
            lines: [
                "Some is still something.",
                "Do libraries still exist where you are?"
            ],
            next: "middle"
        },
        moreThanThinkBooks: {
            speaker: "future",
            lines: [
                "Good. Better than I hoped, honestly.",
                "Do libraries still exist where you are?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "A quiet room full of free stories. Does that still exist?",
                "Or did it disappear along the way?"
            ],
            choices: [
                { label: "Yeah, still around", next: "stillAround" },
                { label: "Fewer than before", next: "fewerThanUsedBooks" }
            ]
        },
        stillAround: {
            speaker: "future",
            lines: [
                "Good. That's one of the best things people ever built.",
                "Glad it's holding on."
            ],
            next: "late"
        },
        fewerThanUsedBooks: {
            speaker: "future",
            lines: [
                "Quiet places are the first to go, it seems.",
                "Nobody notices until they're gone."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last thing. Is there a book you've read more than once?",
                "One you keep going back to?"
            ],
            choices: [
                { label: "Yeah, there is", next: "yesThereIs" },
                { label: "Not really, honestly", next: "notReallyBooks" }
            ]
        },
        yesThereIs: {
            speaker: "future",
            lines: [
                "Good. Read it again soon.",
                "Some books are worth wearing out."
            ],
            next: "urgency"
        },
        notReallyBooks: {
            speaker: "future",
            lines: [
                "Find one, then. It's worth the search.",
                "You'll know it when it happens."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Signal's closing like a book, fittingly enough.",
                "Go read something today, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Keep the quiet rooms around. That's al—"
            ],
            end: true
        }
    }
};

const Conversation041 = {
    id: "041",
    title: "The Comedian Asking If We Still Laugh",
    rarity: "common",
    origin: "A Comedian",
    bridgeDuration: 67,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "One shot at this, so let's not waste it being serious the whole time.",
                "I make people laugh for a living. That's all I'll say about me.",
                "Do people still actually laugh? Not just online, out loud?"
            ],
            choices: [
                { label: "Yeah, still a lot", next: "yesStillLot" },
                { label: "Less than they used to", next: "lessThanUsedLaugh" }
            ]
        },
        yesStillLot: {
            speaker: "future",
            lines: [
                "Good. That's genuinely a relief to hear.",
                "Do people still laugh at themselves, not just other things?"
            ],
            next: "middle"
        },
        lessThanUsedLaugh: {
            speaker: "future",
            lines: [
                "That's rough. Laughing's cheaper than most medicine.",
                "Do people still laugh at themselves, not just other things?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "That's the hardest kind. Laughing at your own mess.",
                "Does that still happen?"
            ],
            choices: [
                { label: "Some can, most can't", next: "someCantMost" },
                { label: "More than you'd guess", next: "moreThanGuess" }
            ]
        },
        someCantMost: {
            speaker: "future",
            lines: [
                "Fair. It's the hardest joke to land, honestly.",
                "Takes practice, that one."
            ],
            next: "late"
        },
        moreThanGuess: {
            speaker: "future",
            lines: [
                "Good. That's the healthiest kind of funny there is.",
                "Keep doing that."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last thing, and it's the real question.",
                "When was the last time something made you actually laugh?"
            ],
            choices: [
                { label: "Pretty recently, actually", next: "prettyRecently" },
                { label: "It's been a while", next: "beenAWhile" }
            ]
        },
        prettyRecently: {
            speaker: "future",
            lines: [
                "Good. Chase more of that.",
                "It's doing more work than you think."
            ],
            next: "urgency"
        },
        beenAWhile: {
            speaker: "future",
            lines: [
                "Go find something funny today. Doctor's orders.",
                "Well, comedian's orders."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Losing this. Terrible timing, as usual.",
                "Go laugh at something today, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Find something funny today. That's al—"
            ],
            end: true
        }
    }
};

const Conversation042 = {
    id: "042",
    title: "The Elder Asking About Family",
    rarity: "rare",
    origin: "An Elder",
    bridgeDuration: 72,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if I get another go at this, so I'll ask plainly.",
                "I'm old. That's all I'll say about myself.",
                "Do young people still visit the old ones in their family?"
            ],
            choices: [
                { label: "Some do, not enough", next: "someDoNotEnough" },
                { label: "Yeah, pretty regularly", next: "yesRegularly" }
            ]
        },
        someDoNotEnough: {
            speaker: "future",
            lines: [
                "Not enough. I understand that more than I'd like to.",
                "Are the old ones lonely, where you are?"
            ],
            next: "middle"
        },
        yesRegularly: {
            speaker: "future",
            lines: [
                "Good. That's worth more than people know.",
                "Are the old ones lonely anyway, sometimes?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Even with visits. Even with calls.",
                "Does loneliness still find them anyway?"
            ],
            choices: [
                { label: "Yeah, it still does", next: "yesStillDoes" },
                { label: "Less, if people try", next: "lessIfTry" }
            ]
        },
        yesStillDoes: {
            speaker: "future",
            lines: [
                "I was afraid of that answer.",
                "It finds you no matter how many people love you, sometimes."
            ],
            next: "late"
        },
        lessIfTry: {
            speaker: "future",
            lines: [
                "Good. Trying actually helps, then.",
                "Tell people that. It's true."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question, and it's the one that brought me here.",
                "Do you know your own grandparents' stories? Really know them?"
            ],
            choices: [
                { label: "Some of them, yeah", next: "someOfThemYeah" },
                { label: "Honestly, not really", next: "honestlyNotReally" }
            ]
        },
        someOfThemYeah: {
            speaker: "future",
            lines: [
                "Good. Ask for more while you still can.",
                "There's always more than you think."
            ],
            next: "urgency"
        },
        honestlyNotReally: {
            speaker: "future",
            lines: [
                "Ask them. Soon. While you still can.",
                "You'll regret the ones you never asked."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "It's fading, like most things do at my age.",
                "Ask them their story, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Go ask them while you still can. That's al—"
            ],
            end: true
        }
    }
};

const Conversation043 = {
    id: "043",
    title: "The Inventor Asking About Trust",
    rarity: "uncommon",
    origin: "An Inventor",
    bridgeDuration: 70,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might not get another go, so let's use it right.",
                "I build things. New things. That's all I'll say about myself.",
                "Do people trust new inventions, or are they scared of them?"
            ],
            choices: [
                { label: "Mostly scared, honestly", next: "mostlyScared" },
                { label: "Some excited, some scared", next: "someExcitedScared" }
            ]
        },
        mostlyScared: {
            speaker: "future",
            lines: [
                "Fair. New things break as much as they fix, sometimes.",
                "Do people still believe things can get better?"
            ],
            next: "middle"
        },
        someExcitedScared: {
            speaker: "future",
            lines: [
                "That split sounds about right, honestly.",
                "Do people still believe things can get better?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Not perfect. Just better than before.",
                "Do people still believe that's possible?"
            ],
            choices: [
                { label: "Some do, some don't", next: "someDontBelieve" },
                { label: "Yeah, mostly still do", next: "mostlyStillDo" }
            ]
        },
        someDontBelieve: {
            speaker: "future",
            lines: [
                "Fair split. Belief's hard to keep up, some years.",
                "The ones who still believe carry the rest, usually."
            ],
            next: "late"
        },
        mostlyStillDo: {
            speaker: "future",
            lines: [
                "Good. That's the fuel for everything I do.",
                "Keep that belief around, it's rarer than it should be."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question. If you could invent one thing, what would it fix?",
                "Just the first thing that comes to mind."
            ],
            choices: [
                { label: "Fix loneliness", next: "loneliness" },
                { label: "Fix the planet", next: "planet" }
            ]
        },
        loneliness: {
            speaker: "future",
            lines: [
                "That's the one nobody's solved yet.",
                "Not with a machine, anyway."
            ],
            next: "urgency"
        },
        planet: {
            speaker: "future",
            lines: [
                "That one's already got people working on it.",
                "Keep pushing them. It's not fast enough yet."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Signal's failing, ironic given what I do for a living.",
                "Keep believing things get better, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Build something better. That's al—"
            ],
            end: true
        }
    }
};

const Conversation044 = {
    id: "044",
    title: "The Dancer Asking About Movement",
    rarity: "common",
    origin: "A Dancer",
    bridgeDuration: 65,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I might not get this chance again, so let's not waste it.",
                "I dance for a living. That's all I'll say about myself.",
                "Do people still move their bodies just for joy?"
            ],
            choices: [
                { label: "Some do, at parties", next: "someAtParties" },
                { label: "Too self-conscious", next: "tooSelfConscious" }
            ]
        },
        someAtParties: {
            speaker: "future",
            lines: [
                "Good. Parties are honest, that way.",
                "Do kids still dance without caring how they look?"
            ],
            next: "middle"
        },
        tooSelfConscious: {
            speaker: "future",
            lines: [
                "That's a shame, honestly. Bodies want to move.",
                "Do kids still dance without caring how they look?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Before anyone teaches them to be embarrassed about it.",
                "Do kids still have that?"
            ],
            choices: [
                { label: "Yeah, kids still do", next: "kidsStillDo" },
                { label: "They lose it pretty fast", next: "loseItFast" }
            ]
        },
        kidsStillDo: {
            speaker: "future",
            lines: [
                "Good. Hold onto that as long as you can.",
                "It disappears faster than people realize."
            ],
            next: "late"
        },
        loseItFast: {
            speaker: "future",
            lines: [
                "Faster than it should, probably.",
                "Somebody teaches them to stop too early."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last thing. When did you last move just because it felt good?",
                "Not exercise. Just moving."
            ],
            choices: [
                { label: "Recently, actually", next: "recentlyActually" },
                { label: "Honestly, can't remember", next: "cantRemember" }
            ]
        },
        recentlyActually: {
            speaker: "future",
            lines: [
                "Good. Keep doing that.",
                "It's doing more for you than you know."
            ],
            next: "urgency"
        },
        cantRemember: {
            speaker: "future",
            lines: [
                "Put on a song today and just move.",
                "Nobody's watching. Promise."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Losing rhythm on this signal, fitting enough.",
                "Go move today, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Move like nobody's watching. That's al—"
            ],
            end: true
        }
    }
};

const Conversation045 = {
    id: "045",
    title: "The Translator Asking About Understanding",
    rarity: "uncommon",
    origin: "A Translator",
    bridgeDuration: 72,
    start: "opening",
    nodes: {
        opening: {
            speaker: "future",
            lines: [
                "I don't know if I get another try, so let's make this count.",
                "I translate between languages. That's all I'll say about myself.",
                "Do people still try to understand people who are different from them?"
            ],
            choices: [
                { label: "Some try, some don't", next: "someTrySomeDont" },
                { label: "Less than they should", next: "lessThanShould" }
            ]
        },
        someTrySomeDont: {
            speaker: "future",
            lines: [
                "Fair split. Understanding's harder work than people expect.",
                "Do people still learn other languages, out of curiosity?"
            ],
            next: "middle"
        },
        lessThanShould: {
            speaker: "future",
            lines: [
                "That's what worries me most in my work.",
                "Do people still learn other languages, out of curiosity?"
            ],
            next: "middle"
        },
        middle: {
            speaker: "future",
            lines: [
                "Not for a test. Not for a job. Just to talk to someone.",
                "Does that still happen?"
            ],
            choices: [
                { label: "Some do, out of love", next: "outOfLove" },
                { label: "Rarely, honestly", next: "rarelyHonestly" }
            ]
        },
        outOfLove: {
            speaker: "future",
            lines: [
                "That's the best reason there is, honestly.",
                "Love always was the best translator."
            ],
            next: "late"
        },
        rarelyHonestly: {
            speaker: "future",
            lines: [
                "Rare's a shame. It changes how you see people.",
                "Even a few words does something."
            ],
            next: "late"
        },
        late: {
            speaker: "future",
            lines: [
                "Last question. Have you ever talked to a stranger who saw the world differently?",
                "And actually listened, not just waited to reply?"
            ],
            choices: [
                { label: "Yeah, once or twice", next: "onceOrTwiceTrans" },
                { label: "Honestly, not really", next: "notReallyTrans" }
            ]
        },
        onceOrTwiceTrans: {
            speaker: "future",
            lines: [
                "Good. That's rarer than it should be.",
                "Do it again when you can."
            ],
            next: "urgency"
        },
        notReallyTrans: {
            speaker: "future",
            lines: [
                "Try it soon. It changes something in you.",
                "Even just once."
            ],
            next: "urgency"
        },
        urgency: {
            speaker: "future",
            lines: [
                "Losing the words for this, oddly enough.",
                "Go listen to someone different, before I—"
            ],
            next: "ending"
        },
        ending: {
            speaker: "future",
            lines: [
                "Really listen to someone today. That's al—"
            ],
            end: true
        }
    }
};

window.CONTACT_INVESTIGATIVE_CONVERSATIONS = [
    Conversation021,
    Conversation022,
    Conversation023,
    Conversation024,
    Conversation025,
    Conversation026,
    Conversation027,
    Conversation028,
    Conversation029,
    Conversation030,
    Conversation031,
    Conversation032,
    Conversation033,
    Conversation034,
    Conversation035,
    Conversation036,
    Conversation037,
    Conversation038,
    Conversation039,
    Conversation040,
    Conversation041,
    Conversation042,
    Conversation043,
    Conversation044,
    Conversation045
];
