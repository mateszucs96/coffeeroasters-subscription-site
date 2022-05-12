const sub = {
    pref: '_____',
    type: '_____',
    quantity: '_____',
    grind: '_____',
    deliver: '_____',
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
    //selectors
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.navigation-menu');
    accordionHeader = document.querySelectorAll('.accordion__header');
    answers = document.querySelectorAll('.answers');
    summaryContent = document.querySelector('.summary--content');
    placesholders = document.querySelectorAll('.placeholders');
    how = document.querySelectorAll('.how');
    grind = document.querySelectorAll('.grind-text');
    steps = document.querySelector('.steps-container');
    modal = document.querySelector('.modal');
    openModal = document.querySelector('.btn--modal');
    closeModal = document.querySelector('.btn--close');
    modalPlaceholders = document.querySelectorAll('.modal-placeholders');

    constructor() {
        this.hamburger.addEventListener('click', this.openMenu.bind(this))
        this.accordionHeader.forEach(el => el.addEventListener('click', this.handleAccordion))
        this.answers.forEach(el => el.addEventListener('click', this.handleAnswers.bind(this)))
        this.openModal.addEventListener('click', () => {
            this.modal.showModal();
        });
        this.closeModal.addEventListener('click', () => {
            this.modal.close();
        })
    };
    openMenu(e) {
        e.target.attributes.src.nodeValue === './assets/shared/mobile/icon-close.svg'
            ? e.target.attributes.src.nodeValue = './assets/shared/mobile/icon-hamburger.svg'
            : e.target.attributes.src.nodeValue = './assets/shared/mobile/icon-close.svg';
        this.navMenu.style.display === 'flex' ? this.navMenu.style.display = 'none' : this.navMenu.style.display = 'flex';

    };

    //update summary section
    updateSummary(arr) {
        // update summary textcontent based on the choosen answer
        this.placesholders.forEach((el, i) => {
            el.textContent = arr[i];
            // if (el.textContent !== '_____') {
            //     // this.steps.children[i].children[0].classList.add('completed');

            // }
        });
        this.modalPlaceholders.forEach((el, i) => {
            el.textContent = arr[i];
            // if (el.textContent !== '_____') {
            //     // this.steps.children[i].children[0].classList.add('completed');

            // }
        });
        // if capsule is choosen...
        if (arr[0] === 'Capsule') {
            // ...'using' is before the first placeholder 
            this.how.forEach(el => el.textContent = 'using');
            //... 'Want us to grind them?' accordion disabled
            this.accordionHeader[3].style.opacity = '0.5';
            this.accordionHeader[3].removeEventListener('click', this.handleAccordion);
            this.grind.forEach(el => el.style.display = 'none');
            this.steps.children[3].style.opacity = '0.2';
            this.steps.children[3].style.cursor = 'default';
        }
        // if others is choosen... 
        if (arr[0] === 'Filter' || arr[0] === 'Espresso') {
            // ... 'as' is before the first placeholder
            this.how.forEach(el => el.textContent = 'as');
            //... 'Want us to grind them?' accordion enabled
            this.accordionHeader[3].addEventListener('click', this.handleAccordion)
            this.accordionHeader[3].style.opacity = '1';
            this.grind.forEach(el => el.style.display = 'inline');
            this.steps.children[3].style.opacity = '0.5';
            this.steps.children[3].style.cursor = 'pointer';
        }

    };

    // handling answers based on selection 
    handleAnswers(e) {


        if (e.target.classList.contains('answer') || e.target.parentElement.classList.contains('answer')) {
            //remove bg
            Array.from(e.target.closest('.answer').parentNode.children).forEach(el => el.style.backgroundColor = '');
            // add bg
            e.target.closest('.answer').style.backgroundColor = '#0E8784';
            // selected answer
            const clicked = e.target.closest('.answer').parentNode.classList[1];
            // pass it to the 'sub' object
            sub[clicked] = e.target.closest('.answer').children[0].textContent.trim();
        };
        // create 'plan' instance based on 'sub' object
        const plan = new Plan(sub.pref, sub.type, sub.quantity, sub.grind, sub.deliver);

        // update summary section from 'plan'
        this.updateSummary(Object.values(plan));

    };

    // accordion functionality
    handleAccordion(e) {
        // clicked accordion section
        const clickedContainer = e.target.closest('.accordion');

        const arrowIcon = clickedContainer.children[0].children[1];
        // rotate arrow icon
        arrowIcon.classList.contains('rotate') ? arrowIcon.classList.remove('rotate') : arrowIcon.classList.add('rotate')
        // show / hide accordion body
        if (clickedContainer.children[1].style.display === "" || clickedContainer.children[1].style.display === "none") {
            clickedContainer.children[1].style.display = 'flex';
        } else {
            clickedContainer.children[1].style.display = 'none'
        };
    };
}
const app = new App();
