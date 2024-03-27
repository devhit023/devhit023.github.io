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

  // emoticon
  $(".emoticon").click(function () {
    if ($(".emoticon[change='true']").length > 0) {
      $(".emoticon").attr("change", "false");
    } else {
      $(".emoticon").attr("change", "true");
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
      if ($(this).children("span").attr("class", "heading-01-regular")) {
        $(this).children("span").attr("class", "heading-01-semibold");
      }
      if ($(this).children("span").attr("class", "body-01-regular")) {
        $(this).children("span").attr("class", "body-01-semibold");
      }
    },
    function () {
      if (
        $(this).parent().attr("change") != "true" ||
        $(this).parent().attr("state") != "enabled"
      ) {
        if ($(this).children("span").attr("class", "heading-01-semibold")) {
          $(this).children("span").attr("class", "heading-01-regular");
        }
        if ($(this).children("span").attr("class", "body-01-semibold")) {
          $(this).children("span").attr("class", "body-01-regular");
        }
      }
    }
  );
  $(
    ".main_box .table_search_container .item-list .dropdown_wrap > .dropdown_button"
  ).focus(
    function () {
      if ($(this).children("span").attr("class", "heading-01-regular")) {
        $(this).children("span").attr("class", "heading-01-semibold");
      }
      if ($(this).children("span").attr("class", "body-01-regular")) {
        $(this).children("span").attr("class", "body-01-semibold");
      }
    },
    function () {
      if (
        $(this).parent().attr("change") != "true" ||
        $(this).parent().attr("state") != "enabled"
      ) {
        if ($(this).children("span").attr("class", "heading-01-semibold")) {
          $(this).children("span").attr("class", "heading-01-regular");
        }
        if ($(this).children("span").attr("class", "body-01-semibold")) {
          $(this).children("span").attr("class", "body-01-regular");
        }
      }
    }
  );

  $(
    ".main_box .table_search_container .item-list .dropdown_wrap .dropdown_button"
  ).click(function () {
    if ($(this).parent().attr("change") == "true") {
      if ($(this).children("span").attr("class", "heading-01-regular")) {
        $(this).children("span").attr("class", "heading-01-semibold");
      }
      if ($(this).children("span").attr("class", "body-01-regular")) {
        $(this).children("span").attr("class", "body-01-semibold");
      }
    } else {
      if ($(this).parent().attr("state") != "enabled") {
        if ($(this).children("span").attr("class", "heading-01-semibold")) {
          $(this).children("span").attr("class", "heading-01-regular");
        }
        if ($(this).children("span").attr("class", "body-01-semibold")) {
          $(this).children("span").attr("class", "body-01-regular");
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
      .attr("class", "heading-01-regular");
  });

  $(".chat_container .chat .user_wrap").click(function () {
    console.log($(this).attr("change"));
    if ($(this).attr("change") == true) {
      $(this).attr("change", false);
    } else {
      console.log("???????", $(this));
      $(this).attr("change", true);
    }
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
          .parent()
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
          .parent()
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

  // change
  $("*[change='false']").click(function () {
    console.log($(this));
    $(this).attr("change", "true");
  });
  $("*[change='true']").click(function () {
    $(this).attr("change", "false");
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
});
