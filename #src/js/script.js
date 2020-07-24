// @@include('_vendors.js');

$(document).ready(function () {

  /*burger & navigation*/
  $('.main-header__burger').click(function (event) {
    event.preventDefault();
    $('.main-header__burger,.main-header,.main-header__navigation').toggleClass('active');
    $('body').toggleClass('lock');
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
