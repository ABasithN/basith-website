/* ==========================================================
   CONTACT — audio.js
   ----------------------------------------------------------
   Optional audio layer.
   Listens to CONTACT_MACHINE events.
   Never controls application state.
========================================================== */

(() => {

    const contact = new Audio("audio/contact.wav");
    const disconnect = new Audio("audio/disconnect.wav");

    contact.preload = "auto";
    disconnect.preload = "auto";

    contact.volume = 0.65;
    disconnect.volume = 0.60;

    function play(sound) {
        if (!sound) return;

        try {

            sound.pause();
            sound.currentTime = 0;

            const p = sound.play();

            if (p) {
                p.catch(() => {});
            }

        } catch (e) {}
    }

    window.CONTACT_AUDIO = {

        contact() {
            play(contact);
        },

        disconnect() {
            play(disconnect);
        }

    };

    function attach() {

        if (!window.CONTACT_MACHINE) {
            requestAnimationFrame(attach);
            return;
        }

        CONTACT_MACHINE.on("relay-click", () => {

            CONTACT_AUDIO.contact();

        });

        CONTACT_MACHINE.on("bridge-collapse", () => {

            CONTACT_AUDIO.disconnect();

        });

    }

    attach();

})();