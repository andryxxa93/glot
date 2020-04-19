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
        headerButton = menu.querySelector('.button'),
        header = document.querySelector('.header'),
        headerLogo = header.querySelector('.header__logo'),
        allButtons = document.querySelectorAll('.button'),
        modal = document.querySelector('.modal'),
        modalClose = modal.querySelector('.close'),
        menuItems = menu.querySelectorAll('.header__item');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 480) {
            $('.header__logo img').css('width', '70px');
            $('.header').toggleClass('header header__fixed slideInDown faster');
        } else {
            $('.header__logo img').css('width', 'auto');
            $('.header__fixed').toggleClass('header header__fixed slideInDown faster');
        }
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('.pageUp').fadeIn();
        } else {
            $('.pageUp').fadeOut();
        }
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_active');
        headerButton.classList.toggle('button_hidden');
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_active');
            headerButton.classList.add('button_hidden');
        });
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $('.call').click(() => {
        $('.overlay').fadeIn();
        $('.modal').slideDown();
    });

    $('.close').click(() => {
        $('.modal').slideUp();
        $('.overlay').fadeOut();
    });

  });