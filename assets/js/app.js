const nav = document.getElementById('nav');
const burgerMenu = document.querySelector('.burger-menu');
const scrollDown = document.getElementById('scr-down');


scrollDown.addEventListener('click', () => {
    document.getElementById('footer').scrollIntoView({
        behavior: "smooth"
    });
})


burgerMenu.addEventListener('click', () => {
    document.querySelector('.section-nav').classList.toggle('section-nav--active-nav');
    document.querySelector('.nav-wrapper').classList.toggle('nav-wrapper--active');
    nav.scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById('nav-item').addEventListener('click', () => {
    document.querySelector('.section-nav').classList.remove('section-nav--active-nav');
    document.querySelector('.nav-wrapper').classList.remove('nav-wrapper--active');
})