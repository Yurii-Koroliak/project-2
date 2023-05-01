import './../styles/app.scss'
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}; 



function toggle() {
    const burger = document.getElementById('burger');
    burger.classList.toggle('is-active');
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('show');
    const menu = document.getElementById('menu');
    menu.classList.toggle('is-open');
}


$(document).ready(function() {
    $('.slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
});