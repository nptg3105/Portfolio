let navIcon = $(".nav__icon");
let nav = $(".nav");
let close = $(".close");
let menuItem = $(".nav .menu-item");
let bgHeader = $(".header");

$(document).ready(function () {
  navIcon.click(function (e) {
    e.preventDefault();
    nav.addClass("active");
    $("body").toggleClass("has-scroll");
  });
  close.click(function (e) {
    e.preventDefault();
    nav.removeClass("active");
    $("body").toggleClass("has-scroll");
  });
  menuItem.click(function (e) {
    nav.removeClass("active");
    $("body").toggleClass("has-scroll");
  });
});
