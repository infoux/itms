$(document).ready(function() {
  /*

  view setting
  */
  function viewMode() {
    var windowWidth = $(window).width();
    if (windowWidth < 1199) {
      $("body").removeClass("pc");
      $("body").addClass("mobile");
    } else {
      $("body").addClass("pc");
      $("body").removeClass("mobile");
    }
  }
  viewMode();
  $(window).resize(function() {
    viewMode();
  });

  /*

  layout
  */
  $(".menuToggle").on("click", function(e) {
    $("header nav").show();
    $("body").addClass("freez");
  });
  $("header nav button").on("click", function(e) {
    $("header nav").hide();
    $("body").removeClass("freez");
  });

  $(window).resize(function() {
    $("header nav").removeAttr("style");
    $("body").removeClass("freez");
  });
});
