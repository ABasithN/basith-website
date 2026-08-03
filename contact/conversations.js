window.CONTACT_CONVERSATIONS = [

{
    origin: "UNKNOWN",

    durationRange: [45,60],

    start: "start",

    nodes: {

        start: {

            speaker: "future",

            lines: [

                "CONNECTION ESTABLISHED",

                "...",

                "Can you hear me?",

                "Please don't leave.",

                "I don't know how long this bridge will stay open.",

                "I've been trying to reach someone.",

                "For what feels like years.",

                "You're the first person who's answered.",

                "...",

                "Can I ask you something?"

            ],

            choices: [

                {
                    label: "I'm here.",
                    next: "reply"
                },

                {
                    label: "Go ahead.",
                    next: "reply"
                },

                {
                    label: "Who are you?",
                    next: "reply"
                }

            ]

        },

        reply: {

            speaker: "future",

            lines: [

                "Thank you.",

                "Everyone else closed the connection.",

                "I thought maybe...",

                "...it wasn't possible anymore.",

                "Wait.",

                "Something just changed.",

                "The bridge is becoming unstable.",

                "If we lose this connection...",

                "...please remember that someone reached you."

            ],

            end: true

        }

    }

}

];