import ScrollMagic from "scrollmagic";

export default () => {
    const controller = new ScrollMagic.Controller();
    const revealElements = document.querySelectorAll('[data-animation]');

    for (let i = 0; i < revealElements.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: revealElements[i],
            offset: 50,
            triggerHook: 0.9,
            reverse: false
        })
        .setClassToggle(revealElements[i], "animated")
        .addTo(controller);
    }
}

