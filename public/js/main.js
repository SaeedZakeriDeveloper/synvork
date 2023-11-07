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
    Information_1.addEventListener('click', function () {
        // Create a new paragraph element
        const p = document.createElement('p');

        // Apply styles to the paragraph
        //   p.style.color = 'red';

        p.textContent = "Our expertise encompasses refurbishing pharmaceutical machines" +
            " like solid dosage form equipment injectable lines, and biopharmaceutical" +
            " equipment. We excel in refurbishing machines such as blistering, tablet press," +
            " vial filling, and purification systems. Our proficiency extends from solid dosage" +
            " forms to up-stream and down-stream biopharmaceutical equipment."
        // Replace the h1 with the new paragraph
        Information_1.replaceWith(p);
    });

    const Information_2 = document.getElementById('Information_2');
    Information_2.addEventListener('click', function () {
        // Create a new paragraph element
        const p = document.createElement('p');
        p.textContent = "Beyond pharmaceutical machinery, we extend our refurbishing capabilities to laboratory equipment.\n" +
            "                From ovens to advanced freezers, centrifuges, and chromatography systems, including HPLC, UPLC, GC,\n" +
            "                and Preparative HPLC, we breathe new life into vital lab instruments."

        // Apply styles to the paragraph
        //   p.style.color = 'red';
        //   p.style.fontWeight = 'bold';

        // Replace the h1 with the new paragraph
        Information_2.replaceWith(p);
    });

    const Information_3 = document.getElementById('Information_3');
    Information_3.addEventListener('click', function () {
        // Create a new paragraph element
        const p = document.createElement('p');
        p.textContent = "At SYNVORK, quality is our cornerstone. We follow stringent refurbishing processes and quality\n" +
            "                control measures to ensure that every machine and equipment we refurbish meets or exceeds industry\n" +
            "                standards. Our team of experts, armed with extensive industry knowledge, is dedicated to\n" +
            "                delivering reliable, high-performance machinery to our clients.";

        // Apply styles to the paragraph
        //   p.style.color = 'red';
        //   p.style.fontWeight = 'bold';

        // Replace the h1 with the new paragraph
        Information_3.replaceWith(p);
    });

    const Information_4 = document.getElementById('Information_4');
    Information_4.addEventListener('click', function () {
        // Create a new paragraph element
        const p = document.createElement('p');
        p.textContent = "We prioritize sustainability and cost-effectiveness in the pharmaceutical industry by refurbishing\n" +
            "                existing machinery, reducing waste, and lowering carbon footprint. Our refurbished equipment offers\n" +
            "                a financially responsible alternative to buying new machines, allowing businesses to use their\n" +
            "                resources more efficiently.";

        // Apply styles to the paragraph
        //   p.style.color = 'red';
        //   p.style.fontWeight = 'bold';

        // Replace the h1 with the new paragraph
        Information_4.replaceWith(p);
    });


    // About section
    const about_box_1 = document.getElementById('about_box_1');
    const about_h2_1 = document.getElementById('about_h2_1');
    about_h2_1.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Refurbished machinery provides reliable production processes through rigorous testing and\n" +
            "                    inspections, increasing client confidence in equipment surpassing industry standards.";
        about_box_1.style.animation = 'rotation .5s linear';
        about_h2_1.replaceWith(p);
    });

    const about_box_2 = document.getElementById('about_box_2');
    const about_h2_2 = document.getElementById('about_h2_2');
    about_h2_2.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Refurbished pharmaceutical machinery offers a cost-effective option with excellent performance,\n" +
            "                    saving on the high capital investment required for new equipment.";
        about_box_2.style.animation = 'rotation .5s linear';
        about_h2_2.replaceWith(p);
    });

    const about_box_3 = document.getElementById('about_box_3');
    const about_h2_3 = document.getElementById('about_h2_3');
    about_h2_3.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "SYNVORK specializes in customizing refurbished machines to fit unique production needs,\n" +
            "                    seamlessly\n" +
            "                    integrating them into existing production lines.";
        about_box_3.style.animation = 'rotation .5s linear';
        about_h2_3.replaceWith(p);
    });

    const about_box_4 = document.getElementById('about_box_4');
    const about_h2_4 = document.getElementById('about_h2_4');
    about_h2_4.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "Refurbished machines in pharmaceutical production save time and money by allowing businesses to\n" +
            "                    quickly meet market demands, making them more efficient than new machines.";
        about_box_4.style.animation = 'rotation .5s linear';
        about_h2_4.replaceWith(p);
    });

});