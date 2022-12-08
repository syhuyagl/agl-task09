$(document).ready(function () {
  $(".c-mainvisual__slider").slick({
    fade: true,
    speed: 1100,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
  });
  ScrollReveal({
    reset: false,
    distance: "25px",
    duration: 1100,
    origin: "bottom",
  });
  ScrollReveal().reveal(
    ".c-about__content, .c-work__header, .c-work__introcontent, .c-work__photosheading,.c-work__subheading2, .c-work__content, .c-career__heading, .c-career__subheading, .c-career__banner, .c-career__plan, .c-career__service, .c-intaview,  .c-recruit__tabwrapper, .c-recruit__about"
  );
});
function enableModal() {
  const $body = document.querySelector("body");
  let scrollPosition = 0;
  scrollPosition = window.pageYOffset;
  $body.style.overflow = "hidden";
  $body.style.position = "fixed";
  $body.style.top = `-${scrollPosition}px`;
  $body.style.width = "100%";
}
function closeModal() {
  const $body = document.querySelector("body");
  let scrollPosition = 0;
  $body.style.removeProperty("overflow");
  $body.style.removeProperty("position");
  $body.style.removeProperty("top");
  $body.style.removeProperty("width");
  window.scrollTo(0, scrollPosition);
}
function toggleMenu() {
  $(".c-header__menuiconclose").addClass("is-close").removeClass("is-show");
  $(".c-header__menuiconopen").addClass("is-show").removeClass("is-close");
  $(".c-header__container").get(0).style.setProperty("--show", "none");
  $(".c-header__submenu").removeClass("is-open");
}
$(".c-header__menu").click(function () {
  if ($(".c-header__menuiconopen").hasClass("is-show")) {
    $(".c-header__menuiconopen").removeClass("is-show").addClass("is-close");
    $(".c-header__menuiconclose").removeClass("is-close").addClass("is-show");
    $(".c-header__container").get(0).style.setProperty("--show", "block");
  } else {
    $(".c-header__menuiconclose").addClass("is-close").removeClass("is-show");
    $(".c-header__menuiconopen").addClass("is-show").removeClass("is-close");
    $(".c-header__container").get(0).style.setProperty("--show", "none");
  }
  $(".c-header__submenu").toggleClass("is-open");
  $("body").toggleClass("is-fixed");
});

$(".c-gnav li").click(function () {
  $(this).addClass("is-active").siblings().removeClass("is-active");
});
$(".c-work__modalclose").click(function () {
  $(".c-work__photomodal").addClass("is-close");
  closeModal()
  // $("body").removeClass("is-fixed");
});
$(".c-work__image").click(function () {
  $(".c-work__photomodal").removeClass("is-close");
  // $("body").addClass("is-fixed");
  enableModal()
});
$(".c-intaview__modalbutton").click(function () {
  $(".c-intaview__modal").addClass("is-close");
  $("body").removeClass("is-fixed");
});
$(".c-intaview__cardimage").click(function () {
  $(".c-intaview__modal").removeClass("is-close");
  $("body").addClass("is-fixed");
});
$(".c-work__photomodal").mouseup(function (e) {
  var container = $(".c-work__photomodalmain");
  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".c-work__photomodal").addClass("is-close");
    $("body").removeClass("is-fixed");
  }
});
$(".c-intaview__modal").mouseup(function (e) {
  var container = $(".c-intaview__modalmain");
  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".c-intaview__modal").addClass("is-close");
    $("body").removeClass("is-fixed");
  }
});
$(".c-recruit__tab1").click(function () {
  $(".c-recruit__tabcontent2").addClass("is-hide");
  $(".c-recruit__tabcontent").removeClass("is-hide");
  $(".c-recruit__tab1").addClass("is-active");
  $(".c-recruit__tab2").removeClass("is-active");
});
$(".c-header__firstitem").click(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 767 && windowWidth < 1024) {
    $("html, body").animate(
      {
        scrollTop: $(".c-about").offset().top - 123,
      },
      1000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(".c-about").offset().top,
      },
      1000
    );
  }
  toggleMenu();
});
$(".c-about__scroll").click(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 767 && windowWidth < 1024) {
    $("html, body").animate(
      {
        scrollTop: $(".c-about").offset().top - 123,
      },
      1000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(".c-about").offset().top,
      },
      1000
    );
  }
  toggleMenu();
});
$(".c-header__seconditem").click(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 767 && windowWidth < 1024) {
    $("html, body").animate(
      {
        scrollTop: $(".c-work").offset().top - 123,
      },
      1000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(".c-work").offset().top,
      },
      1000
    );
  }

  toggleMenu();
});
$(".c-header__thirditem").click(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 767 && windowWidth < 1024) {
    $("html, body").animate(
      {
        scrollTop: $(".c-career").offset().top - 123,
      },
      1000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(".c-career").offset().top,
      },
      1000
    );
  }
  toggleMenu();
});
$(".c-header__fourthitem").click(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 767 && windowWidth < 1024) {
    $("html, body").animate(
      {
        scrollTop: $(".c-intaview").offset().top - 123,
      },
      1000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(".c-intaview").offset().top,
      },
      1000
    );
  }
  toggleMenu();
});
$(".c-header__assignment").click(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 767 && windowWidth < 1024) {
    $("html, body").animate(
      {
        scrollTop: $(".c-recruit").offset().top - 123,
      },
      1000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(".c-recruit").offset().top,
      },
      1000
    );
  }
  toggleMenu();
});
$(".c-header__fifthitem").click(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 767 && windowWidth < 1024) {
    $("html, body").animate(
      {
        scrollTop: $(".c-recruit__secondheading").offset().top - 123,
      },
      1000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(".c-recruit__secondheading").offset().top,
      },
      1000
    );
  }
  toggleMenu();
});
$(".c-recruit__tab2").click(function () {
  $(".c-recruit__tabcontent2").removeClass("is-hide");
  $(".c-recruit__tabcontent").addClass("is-hide");
  $(".c-recruit__tab2").addClass("is-active");
  $(".c-recruit__tab1").removeClass("is-active");
});
$(window).scroll(function () {
  /* Check the location of each desired element */
  let scroll_pos = $(window).scrollTop();
  $(".p-scroll").each(function (i) {
    if (scroll_pos + 500 >= $(this).offset().top) {
      $(".c-gnav li").siblings().removeClass("is-active");
      $(".c-gnav li").eq(i).addClass("is-active");
    }
  });
});
$(".top").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
