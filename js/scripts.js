$(document).ready(function() {
  $("button#color-scheme").click(function() {
    $("body.light-scheme").toggleClass("dark-scheme");
  });
  $("p").click(function() {
    $(this).toggleClass("highlight");
  });
});
