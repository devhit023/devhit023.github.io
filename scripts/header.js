$(document).ready(function () {
  $(".menu-list > .menu-item").hover(
    function () {
      if ($(this).children(".submenu-list").length > 0) {
        // over
        $(".submenu_container").attr("change", "true");
        let copy = $(this).children(".submenu-list").clone();
        $(".submenu_container .submenu-list").replaceWith(copy);
        $(".submenu_container .submenu-list").attr("change", "true");
        if ($(this).children("a").text() == "스포츠분석") {
          $(".submenu_container .submenu-list").css(
            "padding",
            "0px 640px 0px 440px"
          );
        } else if ($(this).children("a").text() == "커뮤니티") {
          $(".submenu_container .submenu-list").css(
            "padding",
            "0px 440px 0px 640px"
          );
        } else if ($(this).children("a").text() == "고객센터") {
          $(".submenu_container .submenu-list").css(
            "padding",
            "0px 465px 0px 1065px"
          );
        }
      }
    }
    // function () {
    //   if ($(".submenu_container").attr("change") == "true") {
    //     $(".submenu_container").attr("change", "false");
    //   }
    // }
  );
});

// href analysis
function hrefAnalysis(e) {
  var target = e.target;
  var target_id = target.id || target.parentElement.id;
  if (target_id == "consensus-pick") {
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-ConsensusPick-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-ConsensusPick-Light.html";
    }
  } else if (target_id == "prediction-tips") {
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-PredictionTips-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-PredictionTips-Light.html";
    }
  } else if (target_id == "missing-player") {
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-MissingPlayer-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-MissingPlayer-Light.html";
    }
  } else if (target_id == "moneyway") {
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-Moneyway-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-Moneyway-Light.html";
    }
  } else if (target_id == "preview") {
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-Preview-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-Preview-Light.html";
    }
  } else if (target_id == "fact-check") {
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-FactCheck-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-FactCheck-Light.html";
    }
  }
}
