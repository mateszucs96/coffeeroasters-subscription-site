const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation-menu');
const openMenu = (e) => {
    e.target.attributes.src.nodeValue === './assets/shared/mobile/icon-close.svg'
        ? e.target.attributes.src.nodeValue = './assets/shared/mobile/icon-hamburger.svg'
        : e.target.attributes.src.nodeValue = './assets/shared/mobile/icon-close.svg';
    navMenu.style.display === 'flex' ? navMenu.style.display = 'none' : navMenu.style.display = 'flex';

};

hamburger.addEventListener('click', openMenu)