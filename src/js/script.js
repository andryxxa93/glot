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
        nav = document.querySelector('nav'),
        menu = nav.querySelector('.header__menu'),
        headerButton = menu.querySelector('.button'),
        menuItems = menu.querySelectorAll('.header__item');

    $(window).scroll(function() {
        if(window.screen.width > 767) {
            if ($(this).scrollTop() > 480) {
                $('.header__row').toggleClass('header__row header__row-fixed');
                $('.header__logo img').css('width', '70px');
                $('.header').toggleClass('header header__fixed slideInDown faster');
            } else {
                $('.header__row-fixed').toggleClass('header__row header__row-fixed');
                $('.header__logo img').removeAttr("style");
                $('.header__fixed').toggleClass('header header__fixed slideInDown faster');
            }
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

    // allButtons.forEach(function(item) {
    //     item.addEventListener('click', (event) => {
    //         if(event.target.className == 'button button_call') {
    //             $('.overlay').fadeIn();
    //             $('.modal').slideDown(); 
    //         }
    //         if(event.target.className == 'close' || 'overlay') {
    //             $('.modal').slideUp();
    //             $('.overlay').fadeOut();
    //         }
    //     });
    // });
    // Modal
    $('.button_call').click(() => {
        $('.overlay').fadeIn();
        $('.modal').slideDown();
    });

    $('.close, .overlay').click(() => {
        $('.modal').slideUp();
        $('.overlay').fadeOut();
    });
    // Calc Modal
    $('.button_calc').click(() => {
        $('.overlay').fadeIn();
        $('.modal_calc').css('display', 'flex').hide().slideDown();
    });
    $('.close, .overlay').click(() => {
        $('.modal_calc').slideUp();
        $('.overlay').fadeOut();
    });

    function calc() {
            let weight,
            total,
            value,
            totalSum = $('#total');

        totalSum.text('0');

        $('#calc').on('change', function() {
        value = this.options[this.selectedIndex].value;
        total = weight * value;
            if (isNaN(total)) {
                totalSum.text('Заполните все формы');
            } else {
                totalSum.text(total.toFixed(1) + '$');
            }
        });

        $('.modal_calc-input').on('input', function() {
            weight = this.value;
            total = weight * value;
            if (isNaN(total)) {
                totalSum.text('Заполните все формы');
            } else {
                totalSum.text(total.toFixed(1) + '$');
            }
        });
    }

    calc();

  });