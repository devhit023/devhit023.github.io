$(document).ready(function () {
  // lightmode
  $("#lightmode").click(function () {
    const url = $(location).attr("href");
    if ($("#lightmode:checked").length > 0) {
      window.location.href = url.replace("Light", "Dark");
    } else {
      window.location.href = url.replace("Dark", "Light");
    }
  });

  // sport-navigation_container
  $(".sport-navigation_container ul > li.sport").click(function () {
    if ($(this).attr("id") == "soccer") {
      if ($("#lightmode:checked").length > 0) {
        window.location.href = "/html/LIVESCORE-Soccer-Dark.html";
      } else {
        window.location.href = "/html/LIVESCORE-Soccer-Light.html";
      }
    } else if ($(this).attr("id") == "soccer") {
      if ($("#lightmode:checked").length > 0) {
        window.location.href = "/html/LIVESCORE-Soccer-Dark.html";
      } else {
        window.location.href = "/html/LIVESCORE-Soccer-Light.html";
      }
    } else if ($(this).attr("id") == "baseball") {
      if ($("#lightmode:checked").length > 0) {
        window.location.href = "/html/LIVESCORE-Baseball-Dark.html";
      } else {
        window.location.href = "/html/LIVESCORE-Baseball-Light.html";
      }
    } else if ($(this).attr("id") == "bascketball") {
      if ($("#lightmode:checked").length > 0) {
        window.location.href = "/html/LIVESCORE-Basketball-Dark.html";
      } else {
        window.location.href = "/html/LIVESCORE-Basketball-Light.html";
      }
    }
  });

  // analysis
  $(".header .submenu-list > #consensus-pick").click(function () {
    const url = $(location).attr("href");
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-ConsensusPick-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-ConsensusPick-Light.html";
    }
  });
  $(".header .submenu-list > #prediction-tips").click(function () {
    const url = $(location).attr("href");
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-PredictionTips-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-PredictionTips-Light.html";
    }
  });
  $(".header .submenu-list > #moneyway").click(function () {
    const url = $(location).attr("href");
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-Moneyway-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-Moneyway-Light.html";
    }
  });
  $(".header .submenu-list > #preview").click(function () {
    const url = $(location).attr("href");
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-Preview-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-Preview-Light.html";
    }
  });
  $(".header .submenu-list > #missing-player").click(function () {
    const url = $(location).attr("href");
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-MissingPlayer-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-MissingPlayer-Light.html";
    }
  });
  $(".header .submenu-list > #fact-check").click(function () {
    const url = $(location).attr("href");
    if ($("#lightmode:checked").length > 0) {
      window.location.href = "/html/ANALYSIS-Soccer-FactCheck-Dark.html";
    } else {
      window.location.href = "/html/ANALYSIS-Soccer-FactCheck-Light.html";
    }
  });

  // input
  $("input").focus(function () {
    $(this).parent().attr("state", "focus");
  });
  $("input").blur(function () {
    $(this).parent().attr("state", "default");
  });

  // dropdown
  $(
    ".main_box .table_search_container .item-list .dropdown_wrap > .dropdown_button"
  ).hover(
    function () {
      if ($(this).children("span").hasClass("heading-01-regular")) {
        $(this).children("span").removeClass("heading-01-regular");
        $(this).children("span").addClass("heading-01-semibold");
      }
      if ($(this).children("span").hasClass("body-01-regular")) {
        $(this).children("span").removeClass("body-01-regular");
        $(this).children("span").addClass("body-01-semibold");
      }
    },
    function () {
      if (
        $(this).parent().attr("change") != "true" ||
        $(this).parent().attr("state") != "enabled"
      ) {
        if ($(this).children("span").hasClass("heading-01-semibold")) {
          $(this).children("span").removeClass("heading-01-semibold");
          $(this).children("span").addClass("heading-01-regular");
        }
        if ($(this).children("span").hasClass("body-01-semibold")) {
          $(this).children("span").removeClass("body-01-semibold");
          $(this).children("span").addClass("body-01-regular");
        }
      }
    }
  );
  $(
    ".main_box .table_search_container .item-list .dropdown_wrap > .dropdown_button"
  ).focus(
    function () {
      if ($(this).children("span").hasClass("heading-01-regular")) {
        $(this).children("span").removeClass("heading-01-regular");
        $(this).children("span").addClass("heading-01-semibold");
      }
      if ($(this).children("span").hasClass("body-01-regular")) {
        $(this).children("span").removeClass("body-01-regular");
        $(this).children("span").addClass("body-01-semibold");
      }
    },
    function () {
      if (
        $(this).parent().attr("change") != "true" ||
        $(this).parent().attr("state") != "enabled"
      ) {
        if ($(this).children("span").hasClass("heading-01-semibold")) {
          $(this).children("span").removeClass("heading-01-regular");
          $(this).children("span").addClass("heading-01-semibold");
        }
        if ($(this).children("span").hasClass("body-01-semibold")) {
          $(this).children("span").removeClass("body-01-regular");
          $(this).children("span").addClass("body-01-semibold");
        }
      }
    }
  );

  $(
    ".main_box .table_search_container .item-list .dropdown_wrap .dropdown_button"
  ).click(function () {
    if ($(this).parent().attr("change") == "true") {
      if ($(this).children("span").hasClass("heading-01-regular")) {
        $(this).children("span").removeClass("heading-01-regular");
        $(this).children("span").addClass("heading-01-semibold");
      }
      if ($(this).children("span").hasClass("body-01-regular")) {
        $(this).children("span").removeClass("body-01-regular");
        $(this).children("span").addClass("body-01-semibold");
      }
    } else {
      if ($(this).parent().attr("state") != "enabled") {
        if ($(this).children("span").hasClass("heading-01-semibold")) {
          $(this).children("span").removeClass("heading-01-semibold");
          $(this).children("span").addClass("heading-01-regular");
        }
        if ($(this).children("span").hasClass("body-01-semibold")) {
          $(this).children("span").removeClass("body-01-semibold");
          $(this).children("span").addClass("body-01-regular");
        }
      }
    }
  });
  $(
    ".main_box .table_search_container .item-list .dropdown_wrap .dropdown-menu_item"
  ).click(function () {
    $(this)
      .parent()
      .parent()
      .children(".dropdown_button")
      .children("span")
      .hasClass("heading-01-regular");
  });

  // circle progress
  var RADIUS = 54;
  var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  var per = 60;
  var progress = per / 100;
  $(".circle_progress > .bar").css(
    "stroke-dashoffset",
    CIRCUMFERENCE * (1 - progress)
  );
  $(".circle_progress > .bar").css("stroke-dasharray", CIRCUMFERENCE);

  // main - menu-list
  $(".main_box .menu-list > #score").click(function () {
    $(".main_box > .table[type='score']").removeClass("hide");
    $(".main_box > .table[type='date']").addClass("hide");
    $(".main_box > .table[type='result']").addClass("hide");
  });
  $(".main_box .menu-list > #date").click(function () {
    $(".main_box > .table[type='score']").addClass("hide");
    $(".main_box > .table[type='date']").removeClass("hide");
    $(".main_box > .table[type='result']").addClass("hide");
  });
  $(".main_box .menu-list > #result").click(function () {
    $(".main_box > .table[type='score']").addClass("hide");
    $(".main_box > .table[type='date']").addClass("hide");
    $(".main_box > .table[type='result']").removeClass("hide");
  });
  $(".main_box .menu-list > #moneyway").click(function () {
    $(".main_box > .table[type='moneyway']").removeClass("hide");
    $(".main_box > .table[type='dropping-odds']").addClass("hide");
  });
  $(".main_box .menu-list > #dropping-odds").click(function () {
    $(".main_box > .table[type='moneyway']").addClass("hide");
    $(".main_box > .table[type='dropping-odds']").removeClass("hide");
  });

  // main - td
  $(".td").click(function () {
    // match_wrap - i[type='lm-tracker']
    if (
      $(this).children(".match_wrap").children("i[type='lm-tracker']").length >
      0
    ) {
      if (
        $(this)
          .children(".match_wrap")
          .children("i[type='lm-tracker'][change='false']").length > 0
      ) {
        $(this)
          .children(".match_wrap")
          .children("i[type='lm-tracker']")
          .attr("change", "true");
      } else {
        $(this)
          .children(".match_wrap")
          .children("i[type='lm-tracker']")
          .attr("change", "false");
      }
    }

    // match_wrap - i[type='lineup']
    if (
      $(this).children(".match_wrap").children("i[type='lineup']").length > 0
    ) {
      if (
        $(this)
          .children(".match_wrap")
          .children("i[type='lineup'][change='false']").length > 0
      ) {
        $(this)
          .children(".match_wrap")
          .children("i[type='lineup']")
          .attr("change", "true");
        $(this).addClass("expand");
        $(this).parent().parent().addClass("expand");
        $(".main_box > .table:not(.hide) > .table_body > ul > li")
          .has("i[type='lineup'][change='true']")
          .each(function (index, item) {
            $(item).addClass("expand");
          });
        $(this)
          .closest(".row_container")
          .parent()
          .children(".lineup_container")
          .removeClass("hide");
      } else {
        $(this)
          .children(".match_wrap")
          .children("i[type='lineup']")
          .attr("change", "false");
        $(this).removeClass("expand");
        $(".main_box > .table:not(.hide) > .table_body > ul > li")
          .has("i[type='lineup'][change='false']")
          .each(function (index, item) {
            $(item).removeClass("expand");
          });
        $(this)
          .closest(".row_container")
          .parent()
          .children(".lineup_container")
          .addClass("hide");
      }
    }
  });

  // lm-tracker
  $(".dropdown_list > li").click(function () {
    if ($(this).children("i[type='lm-layout-top']").length > 0) {
      $(".live-tracer_container[position='top']").removeClass("hide");
    }
    if ($(this).children("i[type='lm-layout-bottom']").length > 0) {
      $(".live-tracer_container[position='bottom']").removeClass("hide");
    }
  });

  // user_wrap
  $(".user_wrap[change], .emoticon[change]").click(function () {
    if ($(this).attr("change") == "true") {
      $(this).attr("change", false);
    } else {
      $(this).attr("change", true);
    }
  });

  // live-chat
  $(
    ".live-chat .chat_container[type='live'] > .chat_header > ul.type > li"
  ).click(function () {
    if ($(this).text().trim() == "스포츠") {
      $(
        ".live-chat .chat_container[type='live'] > .chat_header > ul.type > li[state='active']"
      ).attr("state", "disabled");
      $(this).attr("state", "active");
    }
    if ($(this).text().trim() == "미니게임") {
      $(
        ".live-chat .chat_container[type='live'] > .chat_header > ul.type > li[state='active']"
      ).attr("state", "disabled");
      $(this).attr("state", "active");
    }
  });

  // match-chat
  $(
    ".match-chat_container > .chat_container[type='match'] > .chat_header > ul.type > li"
  ).click(function () {
    if ($(this).text().trim() == "매치채팅") {
      $(
        ".match-chat_container > .chat_container[type='match'] > .chat_header > ul.type > li[state='active']"
      ).attr("state", "disabled");
      $(this).attr("state", "active");
      $(
        ".match-chat_container > .chat_container[type='match'] > .chat_body > ul[page='match']"
      ).removeClass("hide");
      $(
        ".match-chat_container > .chat_container[type='match'] > .chat_body > ul[page='timeline']"
      ).addClass("hide");
    }
    if ($(this).text().trim() == "타임라인") {
      $(
        ".match-chat_container > .chat_container[type='match'] > .chat_header > ul.type > li[state='active']"
      ).attr("state", "disabled");
      $(this).attr("state", "active");
      $(
        ".match-chat_container > .chat_container[type='match'] > .chat_body > ul[page='timeline']"
      ).removeClass("hide");
      $(
        ".match-chat_container > .chat_container[type='match'] > .chat_body > ul[page='match']"
      ).addClass("hide");
    }
  });

  // expand-button
  $(".table_body > .league_container .expand_button").click(function () {
    if ($(this).attr("status") == "change") {
      $(this).attr("status", "");
      $(this).parent().parent().parent().children("ul").addClass("hide");
    } else {
      $(this).attr("status", "change");
      $(this).parent().parent().parent().children("ul").removeClass("hide");
    }
  });

  // match
  $(".match[change]").click(function () {
    console.log($(this), $(this).attr("change"));
    if ($(this).attr("change") == "true") {
      $(this).attr("change", false);
    } else {
      $(this).attr("change", true);
    }
  });

  // information on/off
  $("img[name='information-off']").mouseover(function () {
    $(this).addClass("hide");
    $(this).parent().children("img[name='information-on']").removeClass("hide");
  });
  $("img[name='information-on']").mouseover(function () {
    $(this).addClass("hide");
    $(this)
      .parent()
      .children("img[name='information-off']")
      .removeClass("hide");
  });

  // odds_container
  $(".odds_container[status]").click(function () {
    $(this).parent().children(".odds_container.hide").removeClass("hide");
    $(this).addClass("hide");
  });
  $(".analysis-soccer .table[type='result'] .odds_container").hover(
    function () {
      $(this)
        .parent()
        .children(".odds_container[status='hover']")
        .removeClass("hide");
      $(this)
        .parent()
        .children(".odds_container:not([status='hover'])")
        .addClass("hide");
    },
    function () {
      $(this)
        .parent()
        .children(".odds_container[status='hover']")
        .addClass("hide");
      $(this)
        .parent()
        .children(".odds_container:not([status='hover'])")
        .removeClass("hide");
    }
  );

  // prediction-tip_box
  $("[status='rock']").click(function () {
    $(this).attr("status", "");
  });

  // button
  $(".button").click(function () {
    // league
    if ($(this).text() == "League") {
      $(this).parent().children(".button").removeClass("hide");
      $(this).addClass("hide");
    }
    if ($(this).text() == "리그") {
      $(this).parent().children(".button").removeClass("hide");
      $(this).addClass("hide");
    }
    // date
    if ($(this).text() == "날짜") {
      $(this).parent().children(".button").removeClass("hide");
      $(this).addClass("hide");
    }
    if ($(this).text() == "시작") {
      $(this).parent().children(".button").removeClass("hide");
      $(this).addClass("hide");
    }
  });

  // league_wrap
  $(".league_wrap[lang]").click(function () {
    $(this).parent().children(".league_wrap.hide").removeClass("hide");
    $(this).addClass("hide");
  });

  // date_wrap
  $("span[type='date']").click(function () {
    $(this).parent().children("span").removeClass("hide");
    $(this).addClass("hide");
  });

  // vote_container
  $(".vote_container").click(function (e) {
    if ($(this).parent().children(".vote_container.hide").length() > 0) {
      $(this).parent().children(".vote_container.hide").removeClass("hide");
      $(this).addClass("hide");
    }
  });
});
