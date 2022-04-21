class App {
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.navigation-menu');
    constructor() {
        this.hamburger.addEventListener('click', this.openMenu)
    }
    openMenu = (e) => {
        e.target.attributes.src.nodeValue === './assets/shared/mobile/icon-close.svg' ? e.target.attributes.src.nodeValue = './assets/shared/mobile/icon-hamburger.svg' : e.target.attributes.src.nodeValue = './assets/shared/mobile/icon-close.svg'
        this.navMenu.style.display === 'flex' ? this.navMenu.style.display = 'none' : this.navMenu.style.display = 'flex';

    }
}


const app = new App();
