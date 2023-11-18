let menuBtn = document.querySelector('.menu-bar');
const menu = document.querySelector('nav');

menuBtn?.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

const navLi = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*=' + current + ']')?.classList.add('active');
    });
});

function showSuccessMessage() {
    var successModal = document.getElementById("successMessage");
    successModal.style.display = "block";
}

// Function to close the success message
function closeSuccessMessage() {
    var successModal = document.getElementById("successMessage");
    successModal.style.display = "none";
}

// Function to show the error message
function showErrorMessage() {
    var errorModal = document.getElementById("errorMessage");
    errorModal.style.display = "block";
}

// Function to close the error message
function closeErrorMessage() {
    var errorModal = document.getElementById("errorMessage");
    errorModal.style.display = "none";
}

function checkValidation(id) {
    var element = document.getElementById(id);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (id == 'email') {
        if (element.value != '' && !element.value.match(validRegex)) {
            element.className = 'invalid';
            element.value = 'invalid';
            return 0;
        } else if (element.value != '' && element.value.match(validRegex)) {
            element.className = 'valid';
            return 1;
        } else if (element.value == '') {
            element.className = 'invalid';
            element.value = 'required';
            return 0;
        }
    } else if (element.value == '') {
        element.className = 'invalid';
        element.value = 'required';
        return 0;
    } else {
        element.className = 'valid';

        return 1;
    }
}

document.getElementById("contactSubmitButton")?.addEventListener("click", function (event) {
    event.preventDefault();
    // Get form values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let contactNumber = document.getElementById("contactNumber").value;
    let message = document.getElementById("message").value;

    let list = ['firstName', 'lastName', 'email', 'message'];
    let result = 0;

    list.forEach(x => {
        result += checkValidation(x);
    })
    if (result == list.length) {
        fetch("/submit_contactForm", {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                contactNumber,
                message
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                showSuccessMessage();
                list.forEach(x => {
                    var element = document.getElementById(x);
                    element.value = '';
                    element.className = '';
                    element.placeholder = '';
                })
            })
            .catch(error => {
                showErrorMessage();
            });
    }
});

function changeLanguage() {
    let element = document.getElementById("languageSelect");
    if (element.value == '1') {
        window.location.href = "index.html";
    } else if (element.value == '2') {
        window.location.href = "index_en.html";
    }
}

window.addEventListener('scroll', function () {

    // aboutUs section
    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(1)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_1');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(2)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_2');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(3)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_3');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(4)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_4');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(5)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_5');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(6)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_6');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(7)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_7');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(8)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_8');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(9)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_9');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(10)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_10');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(11)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_11');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(12)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_12');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(13)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_13');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(14)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_14');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(15)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_15');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(16)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_16');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(17)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_17');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(18)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_18');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(19)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_19');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(20)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_20');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(21)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_21');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(22)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_22');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(23)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_23');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(24)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_24');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(25)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_25');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(26)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_26');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(27)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_27');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(28)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_28');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(29)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_29');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(30)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_30');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(31)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_31');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(32)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_32');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(33)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_33');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(34)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_34');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(35)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_35');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(36)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_36');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(37)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_37');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(38)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_38');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(39)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_39');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(40)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_40');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(41)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_41');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(42)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_42');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(43)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_43');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(44)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_44');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(45)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_45');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(46)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_46');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(47)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_47');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(48)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_48');
        }
    }

    var animatedElements = document.querySelectorAll('#aboutUs p > span:nth-child(49)');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_49');
        }
    }

    // Information section
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

        if (window.innerHeight - positionFromTop >= 200) {
            element.classList.add('fadeInUp');
        }
    }

    var animatedElements = document.querySelectorAll('.fadeInLeftBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (window.innerHeight - positionFromTop >= 200) {
            element.classList.add('fadeInLeft');
        }
    }

    var animatedElements = document.querySelectorAll('.fadeInRightBox');
    for (var i = 0; i < animatedElements.length; i++) {
        var element = animatedElements[i];
        var positionFromTop = element.getBoundingClientRect().top;

        if (window.innerHeight - positionFromTop >= 200) {
            element.classList.add('fadeInRight');
        }
    }
});

// Get the button
let upButton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upButton.style.display = "block";
    } else {
        upButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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

let $cont = document.querySelector('.cont');
let $elsArr = [].slice.call(document.querySelectorAll('.el'));
let $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function () {
    $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function ($el) {
    $el.addEventListener('click', function () {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        this.classList.add('s--active');
    });
});

$closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const Information_1 = document.getElementById('Information_1');
    Information_1?.addEventListener('click', function () {
        // Create a new paragraph element
        const p = document.createElement('p');
        // Apply styles to the paragraph
        // p.style.color = 'red';
        p.textContent = "Notre expertise englobe la rénovation de machines pharmaceutiques" +
            " telles que l'équipement de formes posologiques solides, les lignes injectables et" +
            " l'équipement biopharmaceutique. Nous excellons dans la rénovation de machines telles" +
            " que l'emballage sous blister, la presse à comprimés, le remplissage de flacons et les" +
            " systèmes de purification. Notre compétence s'étend des formes posologiques solides à" +
            " l'équipement biopharmaceutique en amont et en aval.";
        p.classList.add('fade-in');
        Information_1.replaceWith(p);
    });

    const Information_2 = document.getElementById('Information_2');
    Information_2?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Au-delà des machines pharmaceutiques, nous étendons nos compétences de rénovation" +
            " aux équipements de laboratoire. Des fours aux congélateurs avancés, en passant par" +
            " les centrifugeuses et les systèmes de chromatographie, y compris HPLC, UPLC, GC et HPLC préparative," +
            " nous redonnons vie à des instruments de laboratoire essentiels.";
        p.classList.add('fade-in');
        Information_2.replaceWith(p);
    });

    const Information_3 = document.getElementById('Information_3');
    Information_3?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Chez SYNVORK, la qualité est notre pierre angulaire. Nous suivons des processus de rénovation" +
            " rigoureux et des mesures de contrôle qualité pour garantir que chaque machine et équipement que" +
            " nous rénovons répond ou dépasse les normes de l'industrie. Notre équipe d'experts, armée d'une" +
            " connaissance approfondie de l'industrie, est dédiée à fournir des machines fiables et performantes à nos clients.";
        p.classList.add('fade-in');
        Information_3.replaceWith(p);
    });

    const Information_4 = document.getElementById('Information_4');
    Information_4?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Nous accordons la priorité à la durabilité et à la rentabilité dans l'industrie pharmaceutique" +
            " en rénovant les machines existantes, réduisant les déchets et diminuant l'empreinte carbone." +
            " Nos équipements rénovés offrent une alternative financièrement responsable à l'achat de nouvelles machines," +
            " permettant aux entreprises d'utiliser leurs ressources de manière plus efficiente.";
        p.classList.add('fade-in');
        Information_4.replaceWith(p);
    });

    // eng
    const Information_en_1 = document.getElementById('Information_en_1');
    Information_en_1?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Our expertise encompasses refurbishing pharmaceutical machines" +
            " like solid dosage form equipment injectable lines, and biopharmaceutical" +
            " equipment. We excel in refurbishing machines such as blistering, tablet press," +
            " vial filling, and purification systems. Our proficiency extends from solid dosage" +
            " forms to up-stream and down-stream biopharmaceutical equipment."
        p.classList.add('fade-in');
        Information_en_1.replaceWith(p);
    });

    const Information_en_2 = document.getElementById('Information_en_2');
    Information_en_2?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Beyond pharmaceutical machinery, we extend our refurbishing capabilities to laboratory equipment.\n" +
            "                From ovens to advanced freezers, centrifuges, and chromatography systems, including HPLC, UPLC, GC,\n" +
            "                and Preparative HPLC, we breathe new life into vital lab instruments."
        p.classList.add('fade-in');
        Information_en_2.replaceWith(p);
    });

    const Information_en_3 = document.getElementById('Information_en_3');
    Information_en_3?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "At SYNVORK, quality is our cornerstone. We follow stringent refurbishing processes and quality\n" +
            "                control measures to ensure that every machine and equipment we refurbish meets or exceeds industry\n" +
            "                standards. Our team of experts, armed with extensive industry knowledge, is dedicated to\n" +
            "                delivering reliable, high-performance machinery to our clients.";
        p.classList.add('fade-in');
        Information_en_3.replaceWith(p);
    });

    const Information_en_4 = document.getElementById('Information_en_4');
    Information_en_4?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "We prioritize sustainability and cost-effectiveness in the pharmaceutical industry by refurbishing\n" +
            "                existing machinery, reducing waste, and lowering carbon footprint. Our refurbished equipment offers\n" +
            "                a financially responsible alternative to buying new machines, allowing businesses to use their\n" +
            "                resources more efficiently.";
        p.classList.add('fade-in');
        Information_en_4.replaceWith(p);
    });

    // About section
    const about_box_1 = document.getElementById('about_box_1');
    const about_h2_1 = document.getElementById('about_h2_1');
    about_box_1?.addEventListener('click', function () {
        const p = document.createElement('p');
        // p.textContent = "Refurbished machinery provides reliable production processes through rigorous testing and\n" +
        //     "                    inspections, increasing client confidence in equipment surpassing industry standards.";

        p.textContent = "Les machines rénovées offrent des processus de production fiables grâce à des tests" +
            " et des inspections rigoureux, renforçant la confiance des clients dans des équipements dépassant" +
            " les normes de l'industrie.";


        about_box_1.style.animation = 'rotation 1s ease-in-out';
        about_h2_1.replaceWith(p);
    });

    const about_box_2 = document.getElementById('about_box_2');
    const about_h2_2 = document.getElementById('about_h2_2');
    about_box_2?.addEventListener('click', function () {
        const p = document.createElement('p');
        // p.textContent = "Refurbished pharmaceutical machinery offers a cost-effective option with excellent performance,\n" +
        //     "                    saving on the high capital investment required for new equipment.";


        p.textContent = "Les machines pharmaceutiques rénovées offrent une option économique avec une excellente performance," +
            " permettant d'économiser sur l'investissement en capital élevé requis pour de nouveaux équipements.";


        about_box_2.style.animation = 'rotation 1s ease-in-out';
        about_h2_2.replaceWith(p);
    });

    const about_box_3 = document.getElementById('about_box_3');
    const about_h2_3 = document.getElementById('about_h2_3');
    about_box_3?.addEventListener('click', function () {
        const p = document.createElement('p');
        // p.textContent = "SYNVORK specializes in customizing refurbished machines to fit unique production needs,\n" +
        //     "                    seamlessly\n" +
        //     "                    integrating them into existing production lines.";


        p.textContent = "SYNVORK se spécialise dans la personnalisation de machines rénovées pour répondre aux besoins" +
            " de production uniques, les intégrant de manière transparente dans les lignes de production existantes.";

        about_box_3.style.animation = 'rotation 1s ease-in-out';
        about_h2_3.replaceWith(p);
    });

    const about_box_4 = document.getElementById('about_box_4');
    const about_h2_4 = document.getElementById('about_h2_4');
    about_box_4?.addEventListener('click', function () {
        const p = document.createElement('p');
        // p.textContent = "Refurbished machines in pharmaceutical production save time and money by allowing businesses to\n" +
        //     "                    quickly meet market demands, making them more efficient than new machines.";

        p.textContent = "Les machines rénovées dans la production pharmaceutique permettent d'économiser du temps et de l'argent" +
            " en permettant aux entreprises de répondre rapidement aux demandes du marché, les rendant plus efficaces que les" +
            " nouvelles machines.";

        about_box_4.style.animation = 'rotation 1s ease-in-out';
        about_h2_4.replaceWith(p);
    });

    // eng
    const about_box_en_1 = document.getElementById('about_box_en_1');
    const about_h2_en_1 = document.getElementById('about_h2_en_1');
    about_box_en_1?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Refurbished machinery provides reliable production processes through rigorous testing and\n" +
            "                    inspections, increasing client confidence in equipment surpassing industry standards.";
        about_box_en_1.style.animation = 'rotation 1s ease-in-out';
        about_h2_en_1.replaceWith(p);
    });

    const about_box_en_2 = document.getElementById('about_box_en_2');
    const about_h2_en_2 = document.getElementById('about_h2_en_2');
    about_box_en_2?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Refurbished pharmaceutical machinery offers a cost-effective option with excellent performance,\n" +
            "                    saving on the high capital investment required for new equipment.";
        about_box_en_2.style.animation = 'rotation 1s ease-in-out';
        about_h2_en_2.replaceWith(p);
    });

    const about_box_en_3 = document.getElementById('about_box_en_3');
    const about_h2_en_3 = document.getElementById('about_h2_en_3');
    about_box_en_3?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "SYNVORK specializes in customizing refurbished machines to fit unique production needs,\n" +
            "                    seamlessly\n" +
            "                    integrating them into existing production lines.";
        about_box_en_3.style.animation = 'rotation 1s ease-in-out';
        about_h2_en_3.replaceWith(p);
    });

    const about_box_en_4 = document.getElementById('about_box_en_4');
    const about_h2_en_4 = document.getElementById('about_h2_en_4');
    about_box_en_4?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Refurbished machines in pharmaceutical production save time and money by allowing businesses to\n" +
            "                    quickly meet market demands, making them more efficient than new machines.";
        about_box_en_4.style.animation = 'rotation 1s ease-in-out';
        about_h2_en_4.replaceWith(p);
    });
});












