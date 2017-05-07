$(document).ready(function() {
  $(".nav-item").on("click", function() {
    switch (this.id) {
      case "aM":
        $("#aboutMe").removeClass("hidden");
        $("#projects").removeClass("hidden");
        $("#react").removeClass("hidden");
        $("#webshop").removeClass("hidden");
        break;

      case "pR":
        $("#aboutMe").addClass("hidden");
        $("#projects").removeClass("hidden");
        $("#react").addClass("hidden");
        $("#webshop").addClass("hidden");
        break;

      case "rP":
        $("#aboutMe").addClass("hidden");
        $("#projects").addClass("hidden");
        $("#react").removeClass("hidden");
        $("#webshop").addClass("hidden");
        break;

       case "wS":
        $("#aboutMe").addClass("hidden");
        $("#projects").addClass("hidden");
        $("#react").addClass("hidden");
        $("#webshop").removeClass("hidden");
        break;

      case "last":
        $("#aboutMe").removeClass("hidden");
        $("#projects").addClass("hidden");
        $("#react").addClass("hidden");
        $("#webshop").addClass("hidden");
        break;
    }
  });
});
