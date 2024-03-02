// Cache DOM elements
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItems = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const toTop = document.querySelector(".to-top");

 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

 
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

 
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});

 
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

 
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
