$(document).ready(function () {
  $(".nav").click(function (e) {
    // console.log(1);
    e.preventDefault();
    $(".menu-mobile").addClass("active");
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".menu-mobile").remove("active");
  });
});
