// Nav icon logic

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row')

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll')
}

// Phone mask 

mask('[data-tel-input]');

// remove '+' and show placeholder

const phoneInput = document.querySelectorAll('[data-tel-input]');
phoneInput.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value === '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if (input.value === '+') input.value = '';
    })
});