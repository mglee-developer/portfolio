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

// when we click menu, scrolling
const navbarMenu = document.querySelector('.navbar__menu');
const items = document.querySelectorAll('.navbar__menu--item');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }

    scrollIntoView(link);

    // menu button click state
    clickMenu(items, link);
});

// when we click 'clickme' button, scrolling
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
    scrollIntoView('#contact');
    clickMenu(items, '#contact');
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
    clickMenu(items, '#home');
});

// Project filtering
const workCategories = document.querySelector('.work__categories');
const workProject = document.querySelector('.work__projects');
const porjects = document.querySelectorAll('.project');
workCategories.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    workProject.classList.add('anim-out');
    setTimeout(() => {
        porjects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            }else {
                project.classList.add('invisible');
            }
        });
        workProject.classList.remove('anim-out');
    }, 300);

    // click menu
    const categoryBtns = document.querySelectorAll('.category__btn');
    clickMenu(categoryBtns, filter);
});

function clickMenu(menus, selector) {
    menus.forEach(menu => {
        if(selector === menu.dataset.link || selector === menu.dataset.filter) {
            menu.classList.add('active');
        }else {
            menu.classList.remove('active');
        }
    });
}

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}