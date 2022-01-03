let navIcon = $(".nav__icon");
let menuMobile = $(".menu-mobile");
let close = $(".close");
let menuItem = $(".menu-mobile .menu-item");

$(document).ready(function () {
  navIcon.click(function (e) {
    e.preventDefault();
    menuMobile.addClass("active");
  });
  close.click(function (e) {
    e.preventDefault();
    menuMobile.removeClass("active");
  });
  menuItem.click(function (e) {
    menuMobile.removeClass("active");
  });
});
