const menuBtn = document.querySelector('.menu-btn');
const menuElement = document.querySelector('.header__nav__menu');
const overlay_mobile = document.querySelector('.overlay-menu-mobile');
const btn_telechargement = document.querySelector('.telecharger');
const btnSelectPays = document.querySelector('.licence__plan__select-box');
const paysAffiche = document.querySelector('.licence__plan__select-box__liste');
let menuOpen = false;
let selectPays = false;

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

btnSelectPays.addEventListener('click', () => {
    if (!selectPays) {
        paysAffiche.classList.add('clique');
        selectPays = true;
    } else {
        paysAffiche.classList.remove('clique');
        selectPays = false;
    }
});

const elementListeSelcection = document.querySelectorAll('.licence__plan__select-box__liste div');
const titrePays = document.querySelector('.licence__plan__select-box__titre span');

elementListeSelcection.forEach(element => {
    
    element.addEventListener('click', () => {
        
        let pays = element.innerHTML;
        titrePays.innerHTML = pays;

        switch (pays) {
            case 'Algérie':
                
                break;

            case 'Congo RC':
            
                break;

            case 'Cameroun':
        
                break;
        
            default:
                break;
        }

    })
});