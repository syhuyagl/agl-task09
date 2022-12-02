$(document).ready(function(){
    $('.c-mainvisual__slider').slick({
        
        arrows:false,
    });
  });

$('.c-header__menu').click(function(){
    if ($('.c-header__menuiconopen').hasClass('is-show')){
        $('.c-header__menuiconopen').removeClass('is-show').addClass('is-close')
        $('.c-header__menuiconclose').removeClass('is-close').addClass('is-show')
    }
    else{
        $('.c-header__menuiconclose').addClass('is-close').removeClass('is-show')
        $('.c-header__menuiconopen').addClass('is-show').removeClass('is-close')
    }
    $('.c-header__submenu').toggleClass('is-open')
    $('body').toggleClass('is-fixed')
})
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
$('.c-work__photomodal').mouseup(function(e) 
{
    var container = $(".c-work__photomodalmain");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.c-work__photomodal').addClass('is-close')
        $('body').removeClass('is-fixed')
    }
});
$('.c-intaview__modal').mouseup(function(e) 
{
    var container = $(".c-intaview__modalmain");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.c-intaview__modal').addClass('is-close')
        $('body').removeClass('is-fixed')
    }
});