$(document).ready(function(){
    $('.c-mainvisual__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        variableWidth: true,
    });
  });

  
$('.c-gnav li').hover(function(){
      $(this).addClass('is-active').siblings().removeClass('is-active');
})
$('.c-gnav li').click(function(){
    $(this).addClass('is-active').siblings().removeClass('is-active');
})