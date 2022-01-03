$(document).ready(function () {
  $(".nav").click(function (e) {
    console.log(1);
    e.preventDefault();
    $(".menu-mobile").addClass("active");
  });
});
