$(document).ready(function() {
  $(".nav-item").on("click", function() {
    console.log(this.id);
    switch (this.id) {
      case "aM":
        $("#aboutMe").removeClass("hidden");
        $("#projects").removeClass("hidden");
        $("#react").removeClass("hidden");
        break;

      case "pR":
        $("#aboutMe").addClass("hidden");
        $("#projects").removeClass("hidden");
        $("#react").addClass("hidden");
        break;

      case "rP":
        $("#aboutMe").addClass("hidden");
        $("#projects").addClass("hidden");
        $("#react").removeClass("hidden");
        break;

      case "last":
        $("#aboutMe").removeClass("hidden");
        $("#projects").addClass("hidden");
        $("#react").addClass("hidden");
        break;
    }
  });
});
