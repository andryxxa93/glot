$(document).ready(function(){
    $('.feed__slider').slick({
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></img></button>'
      });
  });