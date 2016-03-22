$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });
  $(".clickable2").click(function() {
    $("#initially-showing2").slideToggle();
    $("#initially-hidden2").slideToggle();
  });
  $(".clickable3").click(function() {
    $("#initially-showing3").slideToggle();
    $("#initially-hidden3").slideToggle();
  });
  $(".clickable4").click(function() {
    $("#initially-showing4").slideToggle();
    $("#initially-hidden4").slideToggle();
  });
});
