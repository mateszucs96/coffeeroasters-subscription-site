const sub = {
    pref: '',
    type: '',
    quantity: '',
    grind: '',
    deliver: '',
}


class Plan {
    constructor(how = '', type = '', amount = '', grind = '', often = '') {
        this.how = how;
        this.type = type;
        this.amount = amount;
        this.grind = grind;
        this.often = often;
    }
}

class App {
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.navigation-menu');
    accordionHeader = document.querySelectorAll('.accordion__header');
    answers = document.querySelectorAll('.answers');
    summaryContent = document.querySelector('.summary--content');
    placesholders = document.querySelectorAll('.placeholders')

    constructor() {
        this.hamburger.addEventListener('click', this.openMenu.bind(this))
        this.accordionHeader.forEach(el => el.addEventListener('click', this.handleAccordion))
        this.answers.forEach(el => el.addEventListener('click', this.handleAnswers.bind(this)))
    };
    openMenu(e) {
        e.target.attributes.src.nodeValue === './assets/shared/mobile/icon-close.svg'
            ? e.target.attributes.src.nodeValue = './assets/shared/mobile/icon-hamburger.svg'
            : e.target.attributes.src.nodeValue = './assets/shared/mobile/icon-close.svg';
        this.navMenu.style.display === 'flex' ? this.navMenu.style.display = 'none' : this.navMenu.style.display = 'flex';

    };

    updateSummary(arr) {
        this.placesholders.forEach((el, i) => {
            el.textContent = arr[i];

        });
    };

    handleAnswers(e) {


        if (e.target.classList.contains('answer') || e.target.parentElement.classList.contains('answer')) {
            //remove bg
            Array.from(e.target.closest('.answer').parentNode.children).forEach(el => el.style.backgroundColor = '');
            // add bg
            e.target.closest('.answer').style.backgroundColor = 'red';
            const clicked = e.target.closest('.answer').parentNode.classList[1];
            sub[clicked] = e.target.closest('.answer').children[0].textContent.trim();
        };
        const plan = new Plan(sub.pref, sub.type, sub.quantity, sub.grind, sub.deliver);

        this.updateSummary(Object.values(plan));

    };

    handleAccordion(e) {
        const clickedContainer = e.target.closest('.accordion');
        const arrowIcon = clickedContainer.children[0].children[1];
        arrowIcon.classList.contains('rotate') ? arrowIcon.classList.remove('rotate') : arrowIcon.classList.add('rotate')
        if (clickedContainer.children[1].style.display === "" || clickedContainer.children[1].style.display === "none") {
            clickedContainer.children[1].style.display = 'flex';
        } else {
            clickedContainer.children[1].style.display = 'none'
        };
    };
}





const app = new App();
