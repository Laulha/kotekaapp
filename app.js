const menuBtn = document.querySelector('.menu-btn');
const menuElement = document.querySelector('.header__nav__menu');
const overlay_mobile = document.querySelector('.overlay-menu-mobile');
const btn_telechargement = document.querySelector('.telecharger');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuElement.classList.add('open');
        overlay_mobile.classList.add('open');
        btn_telechargement.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuElement.classList.remove('open');
        overlay_mobile.classList.remove('open');
        btn_telechargement.classList.remove('open');
        menuOpen = false;
    }
});

overlay_mobile.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuElement.classList.add('open');
        overlay_mobile.classList.add('open');
        btn_telechargement.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuElement.classList.remove('open');
        overlay_mobile.classList.remove('open');
        btn_telechargement.classList.remove('open');
        menuOpen = false;
    }
});