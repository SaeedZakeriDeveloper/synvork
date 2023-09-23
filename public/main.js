const menuBtn = document.querySelector('.menu-bar');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});

let review = document.querySelector('#review'),
    dots = document.querySelectorAll('#review-dots li'),
    reviewContent = document.querySelectorAll('#review-content .review-box'),
    leftArrow = document.querySelector('#left-arrow'),
    rightArrow = document.querySelector('#right-arrow'),
    reviewSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    reviewTimer;

window.onload = function () {
    function playSlide(slide) {
        for (let i = 0; i < dots.length; i++) {
            reviewContent[i].classList.remove('active');
            reviewContent[i].classList.remove('inactive');
            dots[i].classList.remove('active');
        }
        if (slide < 0) {
            slide = currentSlide = reviewContent.length - 1;
        }
        if (slide > reviewContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            reviewContent[currentActive].classList.add("inactive");
        }
        reviewContent[slide].classList.add("active");
        dots[slide].classList.add("active");
        currentActive = currentSlide;

        clearTimeout(reviewTimer);
        reviewTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, reviewSpeed)
    }

    leftArrow.addEventListener("click", () => {
        playSlide(currentSlide -= 1);
    })
    rightArrow.addEventListener("click", () => {
        playSlide(currentSlide += 1);
    })
    for (let j = 0; j < dots.length; j++) {
        dots[j].addEventListener("click", () => {
            playSlide(currentSlide = dots.indexOf(this));
        })
    }
    playSlide(currentSlide);
}

const navLi = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
        if (current === 'about') {
            document.querySelector('.like .fa-thumbs-up').classList.add('active');
        } else {
            document.querySelector('.like .fa-thumbs-up').classList.remove('active');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*=' + current + ']').classList.add('active');
    });
});

function openModal() {
    var list = ['activity', 'firstName', 'lastName', 'email', 'description', 'phoneNumber', 'address'];
    var invalidEmailBox = document.getElementById('invalidEmailBox');

    list.forEach(x => {
        var element = document.getElementById(x);
        element.value = '';
        element.className = '';
        element.placeholder = '';
        invalidEmailBox.style.visibility = 'hidden';
    })
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "none";
}

document.querySelector(".btn").addEventListener("click", openModal);

// Function to show the form with a slide-down animation
function showFormWithSlideDown() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "block";
}

// Function to show the form with a slide-down animation
function showFormWithSlideDown() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "block";
}

// Function to close the modal (hide the form)
function closeModal() {
    var modal = document.getElementById("requestFormModal");
    modal.style.display = "none";
}

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

function changeLanguage() {
    let element = document.getElementById("langBtn");
    let className = element.getAttribute("class");
    if (className == 'franceBtn') {
        element.classList.remove('franceBtn');
        element.classList.add('unitedBtn');
        window.location.href = "index.html";
    } else if (className == 'unitedBtn') {
        element.classList.remove('unitedBtn');
        element.classList.add('franceBtn');
        window.location.href = "index_en.html";
    }
}

const button = document.querySelector('.shakeEffect');

setInterval(() => {
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
        button.classList.add('fast');
        setTimeout(() => {
            button.classList.remove('fast');
        }, 500); // Keep the faster animation for 0.5 seconds
    }, 400); // Keep the standard animation for 0.5 seconds
}, 3000); // Repeat every 3 seconds

document.getElementById("contactSubmitButton").addEventListener("click", function (event) {
    event.preventDefault();
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var message = document.getElementById("message").value;

    var list = ['firstName', 'lastName', 'email', 'contactNumber', 'message'];
    var result = 0;

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
                var invalidEmailBox = document.getElementById('contactInvalidEmailBox');

                list.forEach(x => {
                    var element = document.getElementById(x);
                    element.value = '';
                    element.className = '';
                    element.placeholder = '';
                    invalidEmailBox.style.visibility = 'hidden';
                })
            })
            .catch(error => {
                showErrorMessage();
            });
    }
});


const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "If",
    "You",
    "Like",
    "It",
    "Please",
    "Give",
    "a Love",
    ":)",
    "by @DotOnion"
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


