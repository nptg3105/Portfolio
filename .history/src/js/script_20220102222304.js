let nav = $(".nav");
let menuMobile = $(".menu-mobile");
let close = $(".close");

$(document).ready(function () {
  nav.click(function (e) {
    // console.log(1);
    e.preventDefault();
    menuMobile.addClass("active");
  });
  close.click(function (e) {
    e.preventDefault();
    menuMobile.removeClass("active");
  });
});
