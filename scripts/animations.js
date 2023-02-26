$(document).ready(function () {
    console.log("here")
    anime({
        targets: '.cta-btns-container .cta',
        keyframes: [
            {translateX:  0, translateY: 0, boxShadow: "5px 5px 0px 0px #262262",},
            {translateX: -5, translateY: -5, boxShadow: "10px 10px 0px 0px #262262",},
            {translateX:  0, translateY: 0, boxShadow: "5px 5px 0px 0px #262262",}
        ],
        delay: anime.stagger(350),
        direction: 'alternate',
        autoplay: true,
        loop: true,
        ease: 'easeInOutQuart',
    });    
});