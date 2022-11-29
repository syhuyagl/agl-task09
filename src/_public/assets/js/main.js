$(document).ready(function(){
    $('.c-mainvisual__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        variableWidth: true,
    });
  });

  
$('.c-gnav li').hover(function(){
      $(this).addClass('is-hover').siblings().removeClass('is-hover');
})
$('.c-gnav li').click(function(){
    $(this).addClass('is-active').siblings().removeClass('is-active');
})
$('.c-work__modalclose').click(function(){
    $('.c-work__photomodal').addClass('is-close')
    $('body').removeClass('is-fixed')
})
$('.c-work__image').click(function(){
    $('.c-work__photomodal').removeClass('is-close')
    $('body').addClass('is-fixed')
})
$('.c-intaview__modalbutton').click(function(){
    $('.c-intaview__modal').addClass('is-close')
    $('body').removeClass('is-fixed')
})
$('.c-intaview__cardimage').click (function(){
    $('.c-intaview__modal').removeClass('is-close')
    $('body').addClass('is-fixed')
})