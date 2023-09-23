window.addEventListener('scroll', function () {
    var animatedElements = document.querySelectorAll('.bounceToLeftBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('bounceToLeft', 'anime');
        }
    }

    var animatedElements = document.querySelectorAll('.bounceToRightBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('bounceToRight', 'anime');
        }
    }

    var animatedElements = document.querySelectorAll('.fadeInUpBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        // if (positionFromTop - window.innerHeight <= 0) {
        //     element.classList.add('fadeInUp');
        // }
        if (window.innerHeight - positionFromTop >= 270) {
            element.classList.add('fadeInUp');
        }
    }

    var animatedElements = document.querySelectorAll('.fadeInLeftBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        // if (positionFromTop - window.innerHeight <= 0) {
        //     element.classList.add('fadeInUp');
        // }
        if (window.innerHeight - positionFromTop >= 270) {
            element.classList.add('fadeInLeft');
        }
    }

    var animatedElements = document.querySelectorAll('.fadeInRightBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        // if (positionFromTop - window.innerHeight <= 0) {
        //     element.classList.add('fadeInUp');
        // }
        if (window.innerHeight - positionFromTop >= 270) {
            element.classList.add('fadeInRight');
        }
    }
});

//
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "WELLCOM",
    "TO",
    "SYNVORK",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();

function playVideo() {
    var video = document.getElementById("synvork-video");
    var pauseSvg = document.getElementById("PauseSvg");
    var playSvg = document.getElementById("PlaySvg");
    if (video.paused) {
        video.play();
        playSvg.classList.replace('d-inline-block', 'd-none');
        pauseSvg.classList.replace('d-none', 'd-inline-block');
    } else {
        video.pause();
        pauseSvg.classList.replace('d-inline-block', 'd-none');
        playSvg.classList.replace('d-none', 'd-inline-block');
    }
}
