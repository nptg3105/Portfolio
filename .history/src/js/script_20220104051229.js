let navIcon = $(".nav__icon");
let nav = $(".nav");
let close = $(".close");
let menuItem = $(".nav .menu-item");

$(document).ready(function () {
  navIcon.click(function (e) {
    e.preventDefault();
    nav.addClass("active");
    $("body").toggleClass("has-scroll");
  });
  close.click(function (e) {
    e.preventDefault();
    nav.removeClass("active");
  });
  menuItem.click(function (e) {
    nav.removeClass("active");
  });
});
