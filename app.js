const menuBtn = document.querySelector('.menu-btn');
const menuElement = document.querySelector('.header__nav__menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuElement.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open')
        menuElement.classList.remove('open')
        menuOpen = false;
    }
});