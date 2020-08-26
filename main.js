'use strict'

// navbar가 top에 있으면 투명, 아니면 light-blue
const navbar = document.querySelector('#navbar');
const nabvarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > nabvarHeight) {
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
    }
});