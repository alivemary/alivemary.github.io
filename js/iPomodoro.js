var interval;

$(document).ready(function() {
  function minusV(name) {
    if (Number($(name).html() > 0)) {
      $(name).html((Number($(name).html()) - 1).toString());
    }
  }
  function plusV(name) {
    if (Number($(name).html() < 99)) {
      $(name).html((Number($(name).html()) + 1).toString());
    }
  }

  function setLongTimer(total) {
    var min, sec;
    var startTime = new Date().getTime();
    var stopTime = startTime + total * 1000;
    var leftTime = stopTime - startTime;

    interval = setInterval(function() {
      var now = new Date().getTime();
      leftTime = stopTime - now;
      if (now <= stopTime) {
        min = Math.floor(leftTime / 60000);
        sec = Math.floor(leftTime / 1000 % 60);
        if (sec < 10) sec = "0" + sec;
        $("#timeLeft").html(min + ":" + sec);
        $("#timerStatus").html("Session");
        $("#timerView").val("session");
      } else {
        clearInterval(interval);
        setShortTimer(60 * Number($("#breakTime").html()));
      }
    }, 250);
  }
  function setShortTimer(total) {
    var min, sec;
    var startTime = new Date().getTime();
    var stopTime = startTime + total * 1000;
    var leftTime = stopTime - startTime;

    interval = setInterval(function() {
      var now = new Date().getTime();
      leftTime = stopTime - now;
      if (now <= stopTime) {
        min = Math.floor(leftTime / 60000);
        sec = Math.floor(leftTime / 1000 % 60);
        if (sec < 10) sec = "0" + sec;
        $("#timeLeft").html(min + ":" + sec);
        $("#timerStatus").html("Break");
        $("#timerView").val("break");
      } else {
        clearInterval(interval);
        setLongTimer(60 * Number($("#longTime").html()));
      }
    }, 250);
  }
  $("button").on("click", function() {
    switch (this.value) {
      case "b-": {
        minusV("#breakTime");
        if ($("#timerView").val() == "pauseB") {
          $("#timeLeft").html($("#breakTime").html() + ":00");
        }
        break;
      }

      case "b+": {
        plusV("#breakTime");
        if ($("#timerView").val() == "pauseB") {
          $("#timeLeft").html($("#breakTime").html() + ":00");
        }
        break;
      }

      case "l-": {
        minusV("#longTime");
        if ($("#timerView").val() == "pauseS") {
          $("#timeLeft").html($("#longTime").html() + ":00");
        }
        break;
      }

      case "l+": {
        plusV("#longTime");
        if ($("#timerView").val() == "pauseS") {
          $("#timeLeft").html($("#longTime").html() + ":00");
        }
        break;
      }

      case "pauseS": {
        var total = $("#timeLeft").html().split(":");
        total = Number(total[0]) * 60 + Number(total[1]);
        setLongTimer(total);
        $("button").prop("disabled", true);
        $("#timerView").prop("disabled", false);
        break;
      }

      case "pauseB": {
        var total = $("#timeLeft").html().split(":");
        total = Number(total[0]) * 60 + Number(total[1]);
        setShortTimer(total);
        $("button").prop("disabled", true);
        $("#timerView").prop("disabled", false);
        break;
      }

      case "session": {
        clearInterval(interval);
        $("#timerView").val("pauseS");
        $("button").prop("disabled", false);
        break;
      }

      case "break": {
        clearInterval(interval);
        $("#timerView").val("pauseB");
        $("button").prop("disabled", false);
        break;
      }

      case "reset": {
        clearInterval(interval);
        $("#timerView").val("pauseS");
        $("button").prop("disabled", false);
        $("#longTime").html("25");
        $("#breakTime").html("5");
        $("#timeLeft").html($("#longTime").html() + ":00");
        break;
      }
    }
  });
  $("#mainWin2").removeClass("hidden");
});
