$(document).ready(function(){
    $('.feed__slider').slick({
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></img></button>'
      });

    const hamburger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.overlay'),
        nav = document.querySelector('nav'),
        menu = nav.querySelector('.header__menu'),
        button = menu.querySelector('.button'),
        menuItems = menu.querySelectorAll('.header__item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_active');
        button.classList.toggle('button_hidden');
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_active');
            button.classList.toggle('button_hidden');
        });
    });

  });