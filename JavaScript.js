$(document).ready(() => {
  $(".menuIcon").click(function () {
    $("#mobileDropDownDiv").toggleClass("hidden");
    $("body").toggleClass("stopScroll");
    $(this).hide(); // Hide the menu icon
    $(".icon-close").show(); // Show the close icon
  });

  $(".icon-close").click(function () {
    $("#mobileDropDownDiv").toggleClass("hidden");
    $("body").toggleClass("stopScroll");
    $(this).hide(); // Hide the close icon
    $(".menuIcon").show(); // Show the menu icon
  });
});
