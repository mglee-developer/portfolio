'use strict'

// navbar가 top에 있으면 투명, 아니면 light-blue
const navbar = document.querySelector('#navbar');
// const bodyContainer = document.querySelector('.body__container');
const nabvarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > nabvarHeight) {
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
    }

    // if(window.scrollY > 0) {
    //     const arrowBtn = crateArrowBtn();
    //     bodyContainer.appendChild(arrowBtn);
    // }
});

// when we click menu, scrolling
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }

    scrollIntoView(link);
});

// when we click 'clickme' button, scrolling
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
});

// home transparent
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

// Show "Arrow up" Button
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
});

// Click "Arrow up" Button, Scrolling
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}