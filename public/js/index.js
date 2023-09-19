window.addEventListener('scroll', function () {
    var animatedElements = document.querySelectorAll('.fadeInLeftBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('fadeInLeft');
        }
    }

    var animatedElements = document.querySelectorAll('.fadeInRightBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('fadeInRight');
        }
    }

    var animatedElements = document.querySelectorAll('.fadeInUpBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('fadeInUp');
        }
    }
});

//
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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

