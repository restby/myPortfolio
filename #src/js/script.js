// @@include('_vendors.js');

$(document).ready(function () {

  /*burger & navigation*/
  $('.main-header__burger').click(function (event) {
    event.preventDefault();
    $('.main-header__burger,.main-header,.main-header__navigation').toggleClass('active');
    $('body').toggleClass('lock');
  });
  /*scroll to*/
  $('.navigation__link').click(function () {
    $('.main-header__burger,.main-header__navigation').toggleClass('active');
    $('body').toggleClass('lock');
    let scroll_el = $(this).attr('href');
    let destination = $(scroll_el).offset().top;
    if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: destination - 66 }, 800);
    }
    return false;
  });
  /*slick-slider */
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1169.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 839.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 479.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});

/*user-menu close*/
// let userMenuList = document.querySelector('.user-menu__list');
// document.documentElement.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (!e.target.closest('.user-menu')) {
//     userMenuList.classList.remove('active');
//   }
// });
// window.addEventListener('keydown', function (e) {
//   if (e.keyCode === 27) {
//     e.preventDefault();
//     if (userMenuList.classList.contains('active')) {
//       userMenuList.classList.remove('active');
//     }
//   }
// });
