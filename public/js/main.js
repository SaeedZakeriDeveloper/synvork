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


var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});




document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header1');
  
    header1.addEventListener('click', function() {
      // Create a new paragraph element
      const p = document.createElement('p');
      p.textContent = " Our expertise encompasses refurbishing pharmaceutical machines like solid dosage form equipment injectable lines, and biopharmaceutical equipment. We excel in refurbishing machines such as blistering, tablet press, vial filling, and purification systems. Our proficiency extends from solid dosage forms to up-stream and down-stream biopharmaceutical equipment " 
      
      // Apply styles to the paragraph
    //   p.style.color = 'red';
    //   p.style.fontWeight = 'bold';
  
      // Replace the h1 with the new paragraph
      header1.replaceWith(p);
    });
  });