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
    let successModal = document.getElementById("successMessage");
    successModal.style.display = "block";
}

// Function to close the success message
function closeSuccessMessage() {
    let successModal = document.getElementById("successMessage");
    successModal.style.display = "none";
}

// Function to show the error message
function showErrorMessage() {
    let errorModal = document.getElementById("errorMessage");
    errorModal.style.display = "block";
}

// Function to close the error message
function closeErrorMessage() {
    let errorModal = document.getElementById("errorMessage");
    errorModal.style.display = "none";
}

function checkValidation(id) {
    let element = document.getElementById(id);
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (id === 'email') {
        if (element.value !== '' && !element.value.match(validRegex)) {
            element.className = 'invalid';
            element.value = 'invalid';
            return 0;
        } else if (element.value !== '' && element.value.match(validRegex)) {
            element.className = 'valid';
            return 1;
        } else if (element.value === '') {
            element.className = 'invalid';
            element.value = 'required';
            return 0;
        }
    } else if (element.value === '') {
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
    if (result === list.length) {
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
                    let element = document.getElementById(x);
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
    if (element.value === '1') {
        window.location.href = "index.html";
    } else if (element.value === '2') {
        window.location.href = "index_en.html";
    }
}

window.addEventListener('scroll', function () {

    // aboutUs section
    let animatedElement1 = document.querySelectorAll('#aboutUs p > span:nth-child(1)');
    for (let i = 0; i < animatedElement1.length; i++) {
        let element = animatedElement1[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_1');
        }
    }

    let animatedElement2 = document.querySelectorAll('#aboutUs p > span:nth-child(2)');
    for (let i = 0; i < animatedElement2.length; i++) {
        let element = animatedElement2[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_2');
        }
    }

    let animatedElement3 = document.querySelectorAll('#aboutUs p > span:nth-child(3)');
    for (let i = 0; i < animatedElement3.length; i++) {
        let element = animatedElement3[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_3');
        }
    }

    let animatedElement4 = document.querySelectorAll('#aboutUs p > span:nth-child(4)');
    for (let i = 0; i < animatedElement4.length; i++) {
        let element = animatedElement4[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_4');
        }
    }

    let animatedElement5 = document.querySelectorAll('#aboutUs p > span:nth-child(5)');
    for (let i = 0; i < animatedElement5.length; i++) {
        let element = animatedElement5[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_5');
        }
    }

    let animatedElement6 = document.querySelectorAll('#aboutUs p > span:nth-child(6)');
    for (let i = 0; i < animatedElement6.length; i++) {
        let element = animatedElement6[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_6');
        }
    }

    let animatedElement7 = document.querySelectorAll('#aboutUs p > span:nth-child(7)');
    for (let i = 0; i < animatedElement7.length; i++) {
        let element = animatedElement7[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_7');
        }
    }

    let animatedElement8 = document.querySelectorAll('#aboutUs p > span:nth-child(8)');
    for (let i = 0; i < animatedElement8.length; i++) {
        let element = animatedElement8[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_8');
        }
    }

    let animatedElement9 = document.querySelectorAll('#aboutUs p > span:nth-child(9)');
    for (let i = 0; i < animatedElement9.length; i++) {
        let element = animatedElement9[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_9');
        }
    }

    let animatedElement10 = document.querySelectorAll('#aboutUs p > span:nth-child(10)');
    for (let i = 0; i < animatedElement10.length; i++) {
        let element = animatedElement10[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_10');
        }
    }

    let animatedElement11 = document.querySelectorAll('#aboutUs p > span:nth-child(11)');
    for (let i = 0; i < animatedElement11.length; i++) {
        let element = animatedElement11[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_11');
        }
    }

    let animatedElement12 = document.querySelectorAll('#aboutUs p > span:nth-child(12)');
    for (let i = 0; i < animatedElement12.length; i++) {
        let element = animatedElement12[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_12');
        }
    }

    let animatedElement13 = document.querySelectorAll('#aboutUs p > span:nth-child(13)');
    for (let i = 0; i < animatedElement13.length; i++) {
        let element = animatedElement13[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_13');
        }
    }

    let animatedElement14 = document.querySelectorAll('#aboutUs p > span:nth-child(14)');
    for (let i = 0; i < animatedElement14.length; i++) {
        let element = animatedElement14[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_14');
        }
    }

    let animatedElement15 = document.querySelectorAll('#aboutUs p > span:nth-child(15)');
    for (let i = 0; i < animatedElement15.length; i++) {
        let element = animatedElement15[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_15');
        }
    }

    let animatedElement16 = document.querySelectorAll('#aboutUs p > span:nth-child(16)');
    for (let i = 0; i < animatedElement16.length; i++) {
        let element = animatedElement16[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_16');
        }
    }

    let animatedElement17 = document.querySelectorAll('#aboutUs p > span:nth-child(17)');
    for (let i = 0; i < animatedElement17.length; i++) {
        let element = animatedElement17[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_17');
        }
    }

    let animatedElement18 = document.querySelectorAll('#aboutUs p > span:nth-child(18)');
    for (let i = 0; i < animatedElement18.length; i++) {
        let element = animatedElement18[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_18');
        }
    }

    let animatedElement19 = document.querySelectorAll('#aboutUs p > span:nth-child(19)');
    for (let i = 0; i < animatedElement19.length; i++) {
        let element = animatedElement19[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_19');
        }
    }

    let animatedElement20 = document.querySelectorAll('#aboutUs p > span:nth-child(20)');
    for (let i = 0; i < animatedElement20.length; i++) {
        let element = animatedElement20[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_20');
        }
    }

    let animatedElement21 = document.querySelectorAll('#aboutUs p > span:nth-child(21)');
    for (let i = 0; i < animatedElement21.length; i++) {
        let element = animatedElement21[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_21');
        }
    }

    let animatedElement22 = document.querySelectorAll('#aboutUs p > span:nth-child(22)');
    for (let i = 0; i < animatedElement22.length; i++) {
        let element = animatedElement22[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_22');
        }
    }

    let animatedElement23 = document.querySelectorAll('#aboutUs p > span:nth-child(23)');
    for (let i = 0; i < animatedElement23.length; i++) {
        let element = animatedElement23[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_23');
        }
    }

    let animatedElement24 = document.querySelectorAll('#aboutUs p > span:nth-child(24)');
    for (let i = 0; i < animatedElement24.length; i++) {
        let element = animatedElement24[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_24');
        }
    }

    let animatedElement25 = document.querySelectorAll('#aboutUs p > span:nth-child(25)');
    for (let i = 0; i < animatedElement25.length; i++) {
        let element = animatedElement25[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_25');
        }
    }

    let animatedElement26 = document.querySelectorAll('#aboutUs p > span:nth-child(26)');
    for (let i = 0; i < animatedElement26.length; i++) {
        let element = animatedElement26[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_26');
        }
    }

    let animatedElement27 = document.querySelectorAll('#aboutUs p > span:nth-child(27)');
    for (let i = 0; i < animatedElement27.length; i++) {
        let element = animatedElement27[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_27');
        }
    }

    let animatedElement28 = document.querySelectorAll('#aboutUs p > span:nth-child(28)');
    for (let i = 0; i < animatedElement28.length; i++) {
        let element = animatedElement28[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_28');
        }
    }

    let animatedElement29 = document.querySelectorAll('#aboutUs p > span:nth-child(29)');
    for (let i = 0; i < animatedElement29.length; i++) {
        let element = animatedElement29[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_29');
        }
    }

    let animatedElement30 = document.querySelectorAll('#aboutUs p > span:nth-child(30)');
    for (let i = 0; i < animatedElement30.length; i++) {
        let element = animatedElement30[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_30');
        }
    }

    let animatedElement31 = document.querySelectorAll('#aboutUs p > span:nth-child(31)');
    for (let i = 0; i < animatedElement31.length; i++) {
        let element = animatedElement31[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_31');
        }
    }

    let animatedElement32 = document.querySelectorAll('#aboutUs p > span:nth-child(32)');
    for (let i = 0; i < animatedElement32.length; i++) {
        let element = animatedElement32[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_32');
        }
    }

    let animatedElement33 = document.querySelectorAll('#aboutUs p > span:nth-child(33)');
    for (let i = 0; i < animatedElement33.length; i++) {
        let element = animatedElement33[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_33');
        }
    }

    let animatedElement34 = document.querySelectorAll('#aboutUs p > span:nth-child(34)');
    for (let i = 0; i < animatedElement34.length; i++) {
        let element = animatedElement34[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_34');
        }
    }

    let animatedElement35 = document.querySelectorAll('#aboutUs p > span:nth-child(35)');
    for (let i = 0; i < animatedElement35.length; i++) {
        let element = animatedElement35[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_35');
        }
    }

    let animatedElement36 = document.querySelectorAll('#aboutUs p > span:nth-child(36)');
    for (let i = 0; i < animatedElement36.length; i++) {
        let element = animatedElement36[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_36');
        }
    }

    let animatedElement37 = document.querySelectorAll('#aboutUs p > span:nth-child(37)');
    for (let i = 0; i < animatedElement37.length; i++) {
        let element = animatedElement37[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_37');
        }
    }

    let animatedElement38 = document.querySelectorAll('#aboutUs p > span:nth-child(38)');
    for (let i = 0; i < animatedElement38.length; i++) {
        let element = animatedElement38[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_38');
        }
    }

    let animatedElement39 = document.querySelectorAll('#aboutUs p > span:nth-child(39)');
    for (let i = 0; i < animatedElement39.length; i++) {
        let element = animatedElement39[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_39');
        }
    }

    let animatedElement40 = document.querySelectorAll('#aboutUs p > span:nth-child(40)');
    for (let i = 0; i < animatedElement40.length; i++) {
        let element = animatedElement40[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_40');
        }
    }

    let animatedElement41 = document.querySelectorAll('#aboutUs p > span:nth-child(41)');
    for (let i = 0; i < animatedElement41.length; i++) {
        let element = animatedElement41[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_41');
        }
    }

    let animatedElement42 = document.querySelectorAll('#aboutUs p > span:nth-child(42)');
    for (let i = 0; i < animatedElement42.length; i++) {
        let element = animatedElement42[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_42');
        }
    }

    let animatedElement43 = document.querySelectorAll('#aboutUs p > span:nth-child(43)');
    for (let i = 0; i < animatedElement43.length; i++) {
        let element = animatedElement43[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_43');
        }
    }

    let animatedElement44 = document.querySelectorAll('#aboutUs p > span:nth-child(44)');
    for (let i = 0; i < animatedElement44.length; i++) {
        let element = animatedElement44[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_44');
        }
    }

    let animatedElement45 = document.querySelectorAll('#aboutUs p > span:nth-child(45)');
    for (let i = 0; i < animatedElement45.length; i++) {
        let element = animatedElement45[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_45');
        }
    }

    let animatedElement46 = document.querySelectorAll('#aboutUs p > span:nth-child(46)');
    for (let i = 0; i < animatedElement46.length; i++) {
        let element = animatedElement46[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_46');
        }
    }

    let animatedElement47 = document.querySelectorAll('#aboutUs p > span:nth-child(47)');
    for (let i = 0; i < animatedElement47.length; i++) {
        let element = animatedElement47[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_47');
        }
    }

    let animatedElement48 = document.querySelectorAll('#aboutUs p > span:nth-child(48)');
    for (let i = 0; i < animatedElement48.length; i++) {
        let element = animatedElement48[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_48');
        }
    }

    let animatedElement49 = document.querySelectorAll('#aboutUs p > span:nth-child(49)');
    for (let i = 0; i < animatedElement49.length; i++) {
        let element = animatedElement49[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_49');
        }
    }

    let animatedElement50 = document.querySelectorAll('#aboutUs p > span:nth-child(50)');
    for (let i = 0; i < animatedElement50.length; i++) {
        let element = animatedElement50[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_50');
        }
    }

    let animatedElement51 = document.querySelectorAll('#aboutUs p > span:nth-child(51)');
    for (let i = 0; i < animatedElement51.length; i++) {
        let element = animatedElement51[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_51');
        }
    }

    let animatedElement52 = document.querySelectorAll('#aboutUs p > span:nth-child(52)');
    for (let i = 0; i < animatedElement52.length; i++) {
        let element = animatedElement52[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_52');
        }
    }

    let animatedElement53 = document.querySelectorAll('#aboutUs p > span:nth-child(53)');
    for (let i = 0; i < animatedElement53.length; i++) {
        let element = animatedElement53[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_53');
        }
    }

    let animatedElement54 = document.querySelectorAll('#aboutUs p > span:nth-child(54)');
    for (let i = 0; i < animatedElement54.length; i++) {
        let element = animatedElement54[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_54');
        }
    }

    let animatedElement55 = document.querySelectorAll('#aboutUs p > span:nth-child(55)');
    for (let i = 0; i < animatedElement55.length; i++) {
        let element = animatedElement55[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_55');
        }
    }

    let animatedElement56 = document.querySelectorAll('#aboutUs p > span:nth-child(56)');
    for (let i = 0; i < animatedElement56.length; i++) {
        let element = animatedElement56[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_56');
        }
    }

    let animatedElement57 = document.querySelectorAll('#aboutUs p > span:nth-child(57)');
    for (let i = 0; i < animatedElement57.length; i++) {
        let element = animatedElement57[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_57');
        }
    }

    let animatedElement58 = document.querySelectorAll('#aboutUs p > span:nth-child(58)');
    for (let i = 0; i < animatedElement58.length; i++) {
        let element = animatedElement58[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_58');
        }
    }

    let animatedElement59 = document.querySelectorAll('#aboutUs p > span:nth-child(59)');
    for (let i = 0; i < animatedElement59.length; i++) {
        let element = animatedElement59[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_59');
        }
    }

    let animatedElement60 = document.querySelectorAll('#aboutUs p > span:nth-child(60)');
    for (let i = 0; i < animatedElement60.length; i++) {
        let element = animatedElement60[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_60');
        }
    }

    let animatedElement61 = document.querySelectorAll('#aboutUs p > span:nth-child(61)');
    for (let i = 0; i < animatedElement61.length; i++) {
        let element = animatedElement61[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_61');
        }
    }

    let animatedElement62 = document.querySelectorAll('#aboutUs p > span:nth-child(62)');
    for (let i = 0; i < animatedElement62.length; i++) {
        let element = animatedElement62[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_62');
        }
    }

    let animatedElement63 = document.querySelectorAll('#aboutUs p > span:nth-child(63)');
    for (let i = 0; i < animatedElement63.length; i++) {
        let element = animatedElement63[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('animation_63');
        }
    }

    // Information section
    let bounceToLeftElement = document.querySelectorAll('.bounceToLeftBox');
    for (let i = 0; i < bounceToLeftElement.length; i++) {
        let element = bounceToLeftElement[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('bounceToLeft', 'anime');
        }
    }

    let bounceToRightElement = document.querySelectorAll('.bounceToRightBox');
    for (let i = 0; i < bounceToRightElement.length; i++) {
        let element = bounceToRightElement[i];
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight <= 0) {
            element.classList.add('bounceToRight', 'anime');
        }
    }
});

// Get the button
let upButton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
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
    let video = document.getElementById("synvork-video");
    let pauseSvg = document.getElementById("PauseSvg");
    let playSvg = document.getElementById("PlaySvg");
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
let $closeBtnArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

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

$closeBtnArr.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const Information_1 = document.getElementById('Information_1');
    Information_1?.addEventListener('click', function () {
        const image = document.getElementById("Information_img_1");
        image.classList.add("clicked");
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
        const image = document.getElementById("Information_img_2");
        image.classList.add("clicked");
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
        const image = document.getElementById("Information_img_3");
        image.classList.add("clicked");
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
        const image = document.getElementById("Information_img_4");
        image.classList.add("clicked");
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
        const image = document.getElementById("Information_img_1");
        image.classList.add("clicked");
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
        const image = document.getElementById("Information_img_2");
        image.classList.add("clicked");
        const p = document.createElement('p');
        p.textContent = "Beyond pharmaceutical machinery, we extend our refurbishing capabilities to laboratory equipment.\n" +
            "                From ovens to advanced freezers, centrifuges, and chromatography systems, including HPLC, UPLC, GC,\n" +
            "                and Preparative HPLC, we breathe new life into vital lab instruments."
        p.classList.add('fade-in');
        Information_en_2.replaceWith(p);
    });

    const Information_en_3 = document.getElementById('Information_en_3');
    Information_en_3?.addEventListener('click', function () {
        const image = document.getElementById("Information_img_3");
        image.classList.add("clicked");
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
        const image = document.getElementById("Information_img_4");
        image.classList.add("clicked");
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
        p.textContent = "Les machines pharmaceutiques rénovées offrent une option économique avec une excellente performance," +
            " permettant d'économiser sur l'investissement en capital élevé requis pour de nouveaux équipements.";
        about_box_2.style.animation = 'rotation 1s ease-in-out';
        about_h2_2.replaceWith(p);
    });

    const about_box_3 = document.getElementById('about_box_3');
    const about_h2_3 = document.getElementById('about_h2_3');
    about_box_3?.addEventListener('click', function () {
        const p = document.createElement('p');
        p.textContent = "SYNVORK se spécialise dans la personnalisation de machines rénovées pour répondre aux besoins" +
            " de production uniques, les intégrant de manière transparente dans les lignes de production existantes.";
        about_box_3.style.animation = 'rotation 1s ease-in-out';
        about_h2_3.replaceWith(p);
    });

    const about_box_4 = document.getElementById('about_box_4');
    const about_h2_4 = document.getElementById('about_h2_4');
    about_box_4?.addEventListener('click', function () {
        const p = document.createElement('p');
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


const image = document.getElementById("image");
// const description = document.getElementById("description");

document.getElementById("Information_en_2").addEventListener("click", () => {
    image.classList.add("clicked");
    // description.style.display = "block"; /* Optionally, display the description after the animation */
});