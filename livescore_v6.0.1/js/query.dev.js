setMode("theme");

$(document).ready(function () {
  themeApply(localStorage.getItem("theme"));
  // label auto(optional)
  autoAttr("label");

  // 임시
  logInOut();

  // common
  modeIndicate();
  subNavBackground();
  expBarRandering();
  liveChatHeadTap();
  liveChatUserMenu();
  liveChatSubscribe();
  liveChatBlock();
  selectFilterCustom();
  extendSelectClickClose();
  sideFilterTab();
  teamEmblemRander();
  predictionUnlock();
  selectCustomRander();
  selectCustomClick();
  tableCtlTabRander();
  tableCtlTabClick();
  recSearchWrod();
  dragClose();
  matchLangueChange();
  h2hLangueChange();
  relayActive();
  liveTrackerOddsToggle();
  lineupActive();
  summaryItemGraphRander();
  fixtureOddsToggle();
  selectFilterH2hCustom();
  selectH2HCustomRander();
  h2hActive();
  h2hTabOddsToggle();
  h2hVoteShareRander();
  h2hTrackerDounetChartRender();
  h2hSummaryItemGraphRander();
  h2hPlayerSortSet(".teams-player-major", 3);
  h2hPlayerStatusSort();
  verticalScroll(
    ".player-recode-table-body-header-status, .player-recode-table-body-list-status"
  );
  h2hRankSortSet(".season-rank-container", 6);
  h2hRankSort();
  matchFactOddsToggle();
  h2hMoveMatchData();
  h2hRankSide();
  h2hHorizonalScroll();
  h2hRankRevTooltip();
  h2hFormationPlayerRander();
});

// login/out 임시 function
function logInOut() {
  $(".before-login").css({ display: "flex" });
  $(".after-login").css({ display: "none" });

  $("#login-button").click(function (e) {
    e.preventDefault();
    $(".before-login").css({ display: "none" });
    $(".after-login").css({ display: "flex" });
  });
  $("#logout-button").click(function (e) {
    e.preventDefault();
    $(".before-login").css({ display: "flex" });
    $(".after-login").css({ display: "none" });
  });
}

// sub-nav
function subNavBackground() {
  $(".header-nav li.sub-nav").hover(
    function () {
      // over
      $(".header-sub-nav-background").addClass("active");
    },
    function () {
      // out
      $(".header-sub-nav-background").removeClass("active");
    }
  );
}

// exp bar hover
function expBarRandering() {
  let totalExpData = $("#exp-navigate-total").data("value");
  let myExpData = $("#exp-navigate-achive").data("value");
  let percent = (myExpData / totalExpData) * 100;

  $("#exp-navigate-achive").css({
    width: percent + "%",
  });

  let myExpWdith = $("#exp-navigate-achive").width();

  let expMessageTemp = `
		<div class='exp-navigate-message' id='exp-navigate-message'>
			<div class='exp-navigate-message-data'>
				<p class='my-exp-data'>${myExpData}</p>
				<p class='my-exp-data'>[${percent.toFixed(1)}%]</p>
			</div>
		</div>
	`;

  $("#exp-navigate").hover(
    function () {
      // over
      $(this).append(expMessageTemp);

      let expAchiveWidth = $("#exp-navigate-achive").outerWidth(true);
      let expMessageWidth = $("#exp-navigate-message").outerWidth(true);

      $("#exp-navigate-message").css({
        left: expAchiveWidth - expMessageWidth / 2,
      });
    },
    function () {
      // out
      $("#exp-navigate-message").remove();
    }
  );
}

// emoticons box
function chatViewIcons() {
  $("#live-chat-emoticons-box").toggleClass("active");
}
// live chat head tap
function liveChatHeadTap() {
  $(".live-chat-title-tab ul li").click(function (e) {
    e.preventDefault();
    let index = $(this).data("index");
    if (index == undefined) {
      return false;
    }

    $(".live-chat-title-tab ul li p").removeClass("active");
    $(this).find("p").addClass("active");
    liveChatHeadActive(index);
  });
}
function liveChatHeadActive(index) {
  $(`.live-chat-body`).removeClass("active");
  $(`.live-chat-body[data-index='${index}']`).addClass("active");
}

// live-chat user menu
function liveChatUserMenu() {
  $(".nick-name-box-title").click(function (e) {
    e.preventDefault();
    $(".nick-name-box-nav")
      .not($(this).next(".nick-name-box-nav"))
      .removeClass("active");
    $(this).next(".nick-name-box-nav").toggleClass("active");
  });

  $(".nick-user-data-info").click(function (e) {
    e.preventDefault();
    $(".nick-user-data-nav")
      .not($(this).next(".nick-user-data-nav"))
      .removeClass("active");
    $(this).next(".nick-user-data-nav").toggleClass("active");
  });
}

// subscribe button
function liveChatSubscribe() {
  let status;
  $(".nick-subscribe").click(function (e) {
    e.preventDefault();

    status = $(this).data("status");

    liveChatToggle(status, this, "구독하기", "구독취소");
  });
}
//block button
function liveChatBlock() {
  let status;
  $(".nick-block").click(function (e) {
    e.preventDefault();
    status = $(this).data("status");

    liveChatToggle(status, this, "차단하기", "차단해제");
  });
}

// live chat toggle function
function liveChatToggle(status, item, enableText, disabledText) {
  if (status == "enable") {
    $(item).addClass("disable-button");
    $(item).find(".box-tag").text(disabledText);
    $(item).data("status", "disable");
  } else {
    $(item).removeClass("disable-button");
    $(item).find(".box-tag").text(enableText);
    $(item).data("status", "enable");
  }
}

// 커스텀 select
function selectFilterCustom() {
  $(".drop-down-content-title").click(function (e) {
    e.preventDefault();
    $(".drop-down-content-title").not($(this)).removeClass("active");
    $(".drop-down-content-options")
      .not($(this).parent().next(".drop-down-content-options"))
      .removeClass("active");
    $(this).toggleClass("active");
    $(this).parent().next(".drop-down-content-options").toggleClass("active");
  });

  $(".sub-header-options-items").click(function (e) {
    e.preventDefault();
    let dataCode = $(this).data("code");
    let dataText = $(this).text();

    $(this)
      .parents(".select-filter")
      .find(".drop-down-content-title")
      .data("code", dataCode);
    $(this)
      .parents(".select-filter")
      .find(".drop-down-content-title")
      .text(dataText);

    $(".sub-header-options-items").removeClass("active");
    $(this).addClass("active");
    $(this)
      .parents(".select-filter")
      .find(".drop-down-content-title")
      .removeClass("active");
    $(this)
      .parents(".select-filter")
      .find(".drop-down-content-options")
      .removeClass("active");
  });
}
// side league, player filter tab
function sideFilterTab() {
  $(".side-filter").click(function (e) {
    e.preventDefault();
    let index = $(this).data("index");
    sideFilterActive(this, index);
  });
}
function sideFilterActive(items, index) {
  $(items)
    .parents(".side-box-items-header-index")
    .find(`.side-filter`)
    .removeClass("active");
  $(items)
    .parents(".side-box-items-header-index")
    .find(`.side-filter[data-index=${index}]`)
    .addClass("active");
}
// side team emblem rander
function teamEmblemRander() {
  let teams = $(".emblem-box");
  $.each(teams, function (i, el) {
    let emblemCode = $(el).data("teamCode");
    $(el).css({
      backgroundImage: `url(../images/icons/teams/${emblemCode}.png)`,
    });
  });
}

//prediction lock
function predictionUnlock() {
  $(".prediction-tip-items").mousedown(function () {
    $(this).find(".prediction-tip-items-list-winner").addClass("active");
  });
  $(".prediction-tip-items").mouseup(function () {
    $(this).find(".prediction-tip-items-lock").css({ opacity: 0 });
    let resultCode = $(this).find(".result-report").data("resultCode");
    let pointCode = $(this)
      .find(".prediction-tip-items-list-pointer")
      .data("pointCode");

    if (resultCode == "win") {
      $(this).find(".result-report").addClass("win");
    } else if (resultCode == "lose") {
      $(this).find(".result-report").addClass("lose");
    } else {
      $(this).find(".result-report").addClass("draw");
    }

    if (pointCode == "home") {
      $(this).find(".win-point").addClass("home");
    } else if (pointCode == "away") {
      $(this).find(".lose-point").addClass("away");
    } else {
      $(this).find(".draw-point").addClass("draw");
    }
  });
}

// mode 선택
function modeIndicate() {
  let theme = localStorage.getItem("theme");
  let modeText = "";
  theme == "light" ? (modeText = "라이트모드") : (modeText = "다크모드");

  $("#mode-indicate").siblings(".label-tag").find("p").text(modeText);

  $("#mode-indicate").click(function (e) {
    if ($(this).prop("checked")) {
      // darkmode
      setMode("theme", "dark");
      $(this).siblings(".label-tag").find("p").text("다크모드");
    } else {
      // lightmode
      setMode("theme", "light");
      $(this).siblings(".label-tag").find("p").text("라이트모드");
    }
  });
}

// selectCustom rander
function selectCustomRander() {
  $.each($(".select-custom"), function (i, el) {
    let selectedCode = $(el).find(".select-options ul li.checked").data("code");
    let selectedtype = $(el).find(".select-options ul li.checked").data("type");
    let selectedTag = $(el).find(".select-options ul li.checked").text();

    $(el).find(".selected-items p").removeClass("default");

    $(el).find(".selected-items").data("code", selectedCode);
    $(el).find(".selected-items p").addClass(selectedtype).text(selectedTag);
  });
}

function selectCustomClick() {
  $(".select-custom-box").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".select-custom-box, .calendar").not(this).removeClass("active");
  });
  $(".select-options ul li").click(function (e) {
    e.preventDefault();
    let selectCode = $(this).data("code");
    let selectKey = $(this).parents(".select-custom").data("code");

    selectSetData(selectKey, selectCode);
  });
  selectCustomRander();
}

function selectSetData(key, code) {
  let checkedText, checkedType;
  $.each($(`.select-custom[data-code=${key}]`), function (i, el) {
    $.each($(el).find(".select-options ul li"), function (idx, elem) {
      $(elem).removeClass("checked");

      if ($(elem).data("code") == code) {
        $(elem).addClass("checked");
        checkedText = $(elem).text();
        checkedType = $(elem).data("type");
      }
    });
  });
  $(`.select-custom[data-code=${key}]`)
    .find(".selected-items p")
    .removeClass("default");

  $(`.select-custom[data-code=${key}]`)
    .find(".selected-items")
    .data("code", code);
  $(`.select-custom[data-code=${key}]`)
    .find(".selected-items p")
    .addClass(checkedType)
    .text(checkedText);
}

// table-control-tab
function tableCtlTabRander() {
  let keyIndex = $(".table-control-tab").data("key");
  let codeIndex = $(".table-control-tab").data("active");

  tableCtlTabSet(keyIndex, codeIndex);

  // tableCtlTabSet('livescore', 'live');
  // tableCtlTabSet('analysis', 'odds-move');
}
function tableCtlTabSet(key, code) {
  $(".table-control-tab").data("key", key).data("code", code);
  $(`.table-control-tab ul li p`).removeClass("active");
  $(`.table-control-tab ul li[data-code=${code}] p`).addClass("active");

  $(`.section-table-body-items`).removeClass("active");
  $(`.section-table-body-items[data-label='${code}']`).addClass("active");

  let calOptions = $(`.table-control-tab li[data-code='${code}']`).data(
    "options"
  );

  if (calOptions != undefined) {
    console.log(code);
    calendarGenRander(code);
  }

  $(`.calendar[data-code='calendar']`).removeClass("active-calender");
  $(`#${code}-calendar.calendar[data-code='calendar']`).addClass(
    "active-calender"
  );

  tableHeaderViewControl(key, code);
}
// view control per page
function tableHeaderViewControl(key, code) {
  if (key == "livescore") {
    if (code != "live") {
      $(".filter-button").addClass("hide");
    } else {
      $(".filter-button").removeClass("hide");
    }
  }

  if (key == "analysis") {
    if (code == "odds-move") {
      $('.select-custom[data-code="currency"]').addClass("hide");
    } else {
      $('.select-custom[data-code="currency"]').removeClass("hide");
    }
    $(`.table-info-label-items`).removeClass("active");
    $(`.table-info-label-items.${code}`).addClass("active");
  }
}

function tableCtlTabClick() {
  $('.table-control-tab ul li[data-role="tab"]').click(function (e) {
    e.preventDefault();
    let tabKey = $(this).parents(".table-control-tab").data("key");
    let tabCode = $(this).data("code");

    $(".select-custom-box").removeClass("active");
    // live tracker 초기화
    $(".live-tracker").removeClass("active");
    $(".relay-cast-sub-icons").removeClass("active");
    // lineup 초기화
    $(".table-body-row").removeClass("lineup-active");
    $(".lineup-icons").removeClass("active");

    tableCtlTabSet(tabKey, tabCode);

    $.each($(`.select-custom`), function (i, el) {
      if ($(el).data("code") != "calendar") {
        selectSetData(
          $(el).data("code"),
          $(el).find('.select-options ul li[data-type="default"]').data("code")
        );
      }
    });
  });
}

// rotation
function refreshPage() {
  $(".filter-button-restore button").addClass("refresh");
  setTimeout(() => {
    $(".filter-button-restore button").removeClass("refresh");
  }, 1500);
}

// recommend search-word
function recSearchWrod() {
  $("#search-box").keyup(function (e) {
    if ($(this).val().length > 0) {
      $(this).parents(".table-search-box").addClass("active");
    } else {
      $(this).parents(".table-search-box").removeClass("active");
    }
  });
  $(".key-word-box ul li").click(function (e) {
    e.preventDefault();
    let codeText = $(this).find(".recomend p.code").text();
    let codeNameText = $(this).find(".recomend p.code-name").text();
    $("#search-box").val(
      codeText.toUpperCase() + " " + codeNameText.toUpperCase()
    );
    $(this).parents(".table-search-box").removeClass("active");
  });
}

// live pannel 드래그
function dragClose() {
  $(".notice-items, .prompt-items").on("mousedown", function (e) {
    // 드래그 시작 위치 기록
    let x = e.pageX;
    let y = e.pageY;

    $(this).css("cursor", "grabbing");

    // mousemove 이벤트 등록
    $(".notice-items, .prompt-items").on("mouseup", function (e) {
      let moveX = e.pageX;
      let moveY = e.pageY;

      $(this).css("cursor", "default");

      if (Math.abs(moveX - x) >= 40 || Math.abs(moveY - y) >= 40) {
        $(this).empty().addClass("hide");
      }
    });
  });
}

// match lang change
function matchLangueChange() {
  $(".table-head-row-th.league").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).find(".league-name p").toggleClass("active");
    $(".table-body-row-td.league").toggleClass("active");
  });
}

function h2hLangueChange() {
  // h2h page
  $(".match-info-data-league").click(function (e) {
    e.preventDefault();
    h2hChangeLeagueIndex();
  });
}
function h2hChangeLeagueIndex() {
  // all around
  // $('.match-info-data-league').toggleClass('active');
  // $('.h2h-recode-table-head-row .table-th.league').toggleClass('active');
  // $('.h2h-recode-table-list-row .table-td.league').toggleClass('active');

  // target items
  let item = event.target;
  console.log(item);
  $(item)
    .parents(".match-info")
    .find(".match-info-data-league")
    .toggleClass("active");
  $(item)
    .parents(".h2h-table-body-items")
    .find(".h2h-recode-table-head-row .table-th.league")
    .toggleClass("active");
  $(item)
    .parents(".h2h-table-body-items")
    .find(".h2h-recode-table-list-row .table-td.league")
    .toggleClass("active");
}

// relay active
function relayActive() {
  $(".relay-cast-icons").click(function (e) {
    e.preventDefault();

    $(".relay-cast-icons")
      .not(this)
      .next(".relay-cast-sub-icons")
      .removeClass("active");
    $(this).next(".relay-cast-sub-icons").toggleClass("active");
  });
}

// live tracker odd toggle view
function liveTrackerOddsToggle() {
  let rowCntArray = [0, 0];
  $(".live-tracker-fixture-box-contain").click(function (e) {
    e.preventDefault();
    let positions = $(this).parents(".live-tracker").data("positions");
    let items = $(this).find(".live-tracker-fixture-box");
    let maxRowCnt = items.length;

    if (positions == "top") {
      idx = 0;
    } else {
      idx = 1;
    }
    rowCntArray[idx]++;

    if (rowCntArray[idx] > maxRowCnt - 1) {
      rowCntArray[idx] = 0;
    }

    $.each(items, function (i, el) {
      if (i == rowCntArray[idx]) {
        $(el).addClass("active");
      } else {
        $(el).removeClass("active");
      }
    });
  });
}

// lineup active
function lineupActive() {
  $(".lineup-icons").click(function (e) {
    e.preventDefault();
    $(".relay-cast-sub-icons").removeClass("active");
    $(this).toggleClass("active");
    $(this).parents(".table-body-row").toggleClass("lineup-active");

    lineupPlayerAchiv();
    lineupScorllabledHoverRander();
  });
}

// lineup achivement
function lineupPlayerAchiv() {
  $.each($(".lineup-summary-player-items-body-row"), function (i, el) {
    let playerAchive = $(el).data("result");
    let totalAchive = $(el).data("total");

    if ($(el).data("type") == "soccer") {
      $(el)
        .find(".player-achive-graph")
        .css({
          width: (playerAchive / totalAchive) * 100 + "%",
        });
    }
  });
}
// lineup scrollable hover rander
function lineupScorllabledHoverRander() {
  let box = $(".player-info-data");

  $.each(box, function (i, el) {
    let boxWidth = $(el).width();
    let contentTotalWidth = 0;
    $.each($(el).children(), function (idx, elem) {
      let contentWidth = $(elem).width();
      contentTotalWidth += contentWidth;
    });
    if (boxWidth < contentTotalWidth) {
      $(el).addClass("scrollabled");
    } else {
      $(el).removeClass("scrollabled");
    }
  });
}

// live Tracker
function closeTracker(positions) {
  $(`.live-tracker[data-positions=${positions}]`).removeClass("active");
}

function activeTracker(positions) {
  $(".relay-cast-sub-icons").removeClass("active");
  $(`.live-tracker[data-positions=${positions}]`).addClass("active");
  trackerDounetChartRender(positions);
  pointTabActive(positions);
  matchTimelineTab(positions);
}

function summaryItemGraphRander() {
  $.each($(".summary-items-graph"), function (i, el) {
    let homePoint = $(el).find(".data-score-graph-home").data("score");
    let awayPoint = $(el).find(".data-score-graph-away").data("score");
    let totalPoint = homePoint + awayPoint;

    $(el)
      .find(".data-score-graph-home")
      .css({ width: (homePoint / totalPoint) * 100 + "%" });
    $(el)
      .find(".data-score-graph-away")
      .css({ width: (awayPoint / totalPoint) * 100 + "%" });
  });
}

function fixtureVote(positions, tag) {
  let totalVotePoint = 0;
  $(
    `.live-tracker[data-positions=${positions}] .live-tracker-vote-prepare`
  ).addClass("hide");
  $(
    `.live-tracker[data-positions=${positions}] .live-tracker-vote-result`
  ).addClass("active");

  $(
    `.live-tracker[data-positions=${positions}] .live-tracker-vote-result-side[data-side='${tag}']`
  )
    .find(".result-side-box")
    .data(
      "point",
      $(
        `.live-tracker[data-positions=${positions}] .live-tracker-vote-result-side[data-side='${tag}']`
      )
        .find(".result-side-box")
        .data("point") + 1
    );

  $.each(
    $(`.live-tracker[data-positions=${positions}] .result-side-box`),
    function (idx, elem) {
      let voteAsidePoint = $(elem).data("point");
      totalVotePoint = totalVotePoint + voteAsidePoint;
    }
  );

  $.each(
    $(
      `.live-tracker[data-positions=${positions}] .live-tracker-vote-result-side`
    ),
    function (i, el) {
      let votePoint = $(el).find(".result-side-box").data("point");
      let votePercent = (votePoint / totalVotePoint) * 100;
      $(el).find(".result-side-percents p").text(votePercent.toFixed(0));
      $(el).css({ width: votePercent * 100 + "%" });
    }
  );

  $(
    `.live-tracker[data-positions=${positions}] .live-tracker-vote-result-side[data-side='${tag}']`
  )
    .find(".result-side-box-items")
    .addClass("active");
}

// match, timeline tab
function matchTimelineTab(positions) {
  $(
    `.live-tracker[data-positions=${positions}] .live-tracker-chat-head-items ul li`
  ).click(function (e) {
    e.preventDefault();
    let tabLabel = $(this).data("type");

    if (tabLabel == undefined) {
      return false;
    }

    $(
      `.live-tracker[data-positions=${positions}] .live-tracker-chat-head-items ul li p`
    ).removeClass("active");
    $(this).find("p").addClass("active");

    $(
      `.live-tracker[data-positions=${positions}] .live-tracker-chat-body .live-tracker-chat-body-items`
    ).removeClass("active");
    $(
      `.live-tracker[data-positions=${positions}] .live-tracker-chat-body .live-tracker-chat-body-items[data-type=${tabLabel}]`
    ).addClass("active");
  });
}

function expendEmoticons(positions) {
  $(`.live-tracker[data-positions=${positions}] .chat-message-emoticons`)
    .find(".icons")
    .toggleClass("active");
  $(`.live-tracker[data-positions=${positions}] .chat-message-emoticons`)
    .find(".emoticons-box")
    .toggleClass("active");
}

function pointTabActive(positions) {
  $(
    `.live-tracker[data-positions=${positions}] .live-tracker-points-tab ul li[data-role="tab"]`
  ).click(function (e) {
    e.preventDefault();
    $(
      `.live-tracker[data-positions=${positions}] .live-tracker-points-tab ul li[data-role="tab"]`
    )
      .find("p")
      .removeClass("active");
    $(this).find("p").addClass("active");
  });
}

function trackerDounetChartRender(position) {
  let home = 0;
  let away = 0;
  let total = 0;

  let homeColor, awayColor;

  let currentThemeMode = localStorage.getItem("theme");

  if (currentThemeMode == "light") {
    homeColor = "#0ba5ec";
    awayColor = "#ee46bc";
  } else {
    homeColor = "#0086c9";
    awayColor = "#dd2590";
  }

  $.each(
    $(
      `.live-tracker[data-positions='${position}'] .live-tracker-points-body-items-chart`
    ),
    function (i, el) {
      home = $(el).data("home");
      away = $(el).data("away");
      total = home + away;

      $(el)
        .find(".chart-graphy")
        .css(
          "background-image",
          `conic-gradient(${awayColor} ${
            (away * 360) / total
          }deg , ${homeColor} ${(away * 360) / total}deg)`
        );

      $(el).find(".chart-info .chart-info-home p").text(home);
      $(el).find(".chart-info .chart-info-away p").text(away);
    }
  );
}

// h2h
function h2hActive() {
  let indexCnt = [];
  let indexCntSet = 0;
  $(".table-body-row-td.hth").click(function (e) {
    e.preventDefault();
    let activeCode = $(this).data("code");

    let oddItems = e.target.closest(".score-odds-items");

    if (!oddItems) {
      let url = "../html/soccers_livescore.html";
      window.open(url);
      return false;
    } else {
      let indexCntKeys = $(this).parents(".table-body-items-row").index() - 1;

      if (
        indexCnt.length <
        $(this).parents(".table-body").find(".table-body-items-row").length
      ) {
        $.each(
          $(this).parents(".table-body").find(".table-body-items-row"),
          function (i, el) {
            indexCnt.push(indexCntSet);
          }
        );
      }
      indexCnt[indexCntKeys]++;

      if ($(this).find(".odds-items").length < indexCnt[indexCntKeys] + 1) {
        indexCnt[indexCntKeys] = 0;
      }
      oddsToggle(this, indexCnt[indexCntKeys]);
    }
  });
}
function oddsToggle(parent, idx) {
  let itemsCnt = $(parent).find(".odds-items");

  $.each($(itemsCnt), function (i, el) {
    if (idx == i) {
      $(el).addClass("active");
    } else {
      $(el).removeClass("active");
    }
  });
}
function fixtureOddsToggle() {
  let indexCnt = 0;
  $(".recode-fixture-odds").click(function (e) {
    e.preventDefault();
    indexCnt++;

    let childLength = $(this).children().length;

    $.each($(".recode-fixture-odds-items"), function (i, el) {
      if (indexCnt % childLength == i) {
        $(el).addClass("active");
      } else {
        $(el).removeClass("active");
      }
    });
  });
}
function h2hFixtureVote(side) {
  let totalVotePoint = 0;
  $(`.recode-fixture-vote .recode-fixture-vote-prepare`).addClass("hide");
  $(`.recode-fixture-vote .recode-fixture-vote-result`).addClass("active");

  $(`.recode-fixture-vote-result-side[data-side=${side}]`)
    .find(".result-side-box")
    .data(
      "point",
      $(`.recode-fixture-vote-result-side[data-side=${side}]`)
        .find(".result-side-box")
        .data("point") + 1
    );

  $.each($(".recode-fixture-vote-result-side"), function (i, el) {
    let voteAsidePoint = $(el).find(".result-side-box").data("point");
    totalVotePoint = totalVotePoint + voteAsidePoint;
  });

  $.each($(".recode-fixture-vote-result-side"), function (idx, elem) {
    let votePoint = $(elem).find(".result-side-box").data("point");

    let votePercent = (votePoint / totalVotePoint) * 100;
    $(elem).find(".result-side-percents p").text(votePercent.toFixed(0));
    $(elem).css({ width: votePercent + "%" });
  });

  $(`.recode-fixture-vote-result-side[data-side=${side}]`)
    .find(".result-side-box-items")
    .addClass("active");
}
function tripleToggleFilter(idx, tag) {
  let filterBox = $(event.target).parents(".h2h-table-head-filter");

  let childCount = $(filterBox).find(`.filter-triple-toggle ul li`).length;
  let listIdx = Number(idx) + 1;
  $(filterBox).find(`.filter-triple-toggle ul li`).removeClass("active");

  if (childCount <= listIdx) {
    listIdx = 0;
  }

  $(filterBox)
    .find(`.filter-triple-toggle ul li[data-index=${listIdx}]`)
    .addClass("active");

  if (listIdx > 0) {
    $(filterBox)
      .find(`.filter-triple-toggle ul li[data-index=${listIdx}]`)
      .find("button")
      .addClass("active");
  }
}
function selectFilterH2hCustom() {
  $(".drop-down-selected-title").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().next(".drop-down-select-options").toggleClass("active");

    $(".drop-down-selected-title").not(this).removeClass("active");
    $(".drop-down-selected-title")
      .not(this)
      .parent()
      .next(".drop-down-select-options")
      .removeClass("active");

    let type = $(this).parents(".filter-custom-select").data("type");
    let code = $(this).parents(".filter-custom-select").data("code");
    let activation = $(this)
      .parents(".filter-custom-select")
      .find(".filter-custom-select-options")
      .hasClass("active");

    if (type == "recent-game" && code == "recent-record" && activation) {
      let framePosition = $(this)
        .parents(".filter-custom-select")
        .find(
          ".filter-custom-select-options.active .filter-custom-select-options-box"
        )
        .height();
      let scrollPosition = $(this)
        .parents(".filter-custom-select")
        .find(".filter-custom-select-options.active ul")
        .height();

      $(this)
        .parents(".filter-custom-select")
        .find(
          ".filter-custom-select-options.active .filter-custom-select-options-box"
        )
        .scrollTop(scrollPosition - framePosition);
    }
  });

  $(".filter-select-options").click(function (e) {
    e.preventDefault();
    let dataCode = $(this).data("code");
    let dataText = $(this).text();
    let dataType = $(this).data("type");
    let selectType = $(this).parents(".filter-custom-select").data("type");

    if (selectType != "recent-game") {
      $(this)
        .parents(".filter-custom-select")
        .find(".drop-down-selected-title")
        .text(dataText);
    } else {
      $(this)
        .parents(".filter-custom-select")
        .find(".drop-down-selected-title span")
        .text(dataText);
    }

    if (dataType == "default") {
      $(this)
        .parents(".filter-custom-select")
        .find(".drop-down-selected-title")
        .addClass("default");
    } else {
      $(this)
        .parents(".filter-custom-select")
        .find(".drop-down-selected-title")
        .removeClass("default");
    }

    $(this)
      .parents(".filter-custom-select")
      .find(".drop-down-selected-title")
      .data("code", dataCode);
    $(this)
      .parents(".filter-custom-select")
      .find(".drop-down-selected-title")
      .data("type", dataType);
    $(this)
      .parents(".filter-custom-select")
      .find(".drop-down-selected-title")
      .removeClass("active");
    $(this)
      .parents(".filter-custom-select")
      .find(".filter-select-options")
      .not(this)
      .removeClass("active");

    $(this).addClass("active");

    $(this).parents(".drop-down-select-options").removeClass("active");
  });
}

function selectH2HCustomRander() {
  let itemIndex, dataType, randerText, randerData;
  $.each($(".filter-custom-select"), function (i, el) {
    itemIndex = $(el).data("type");

    $.each($(el).find(".filter-select-options"), function (idx, elem) {
      dataType = $(elem).data("type");

      if (dataType == "default") {
        $(elem).addClass("active");
        randerText = $(elem).text();
        randerData = $(elem).data("code");

        $(el).find(".drop-down-selected-title").data("code", randerData);
        $(el).find(".drop-down-selected-title").data("type", dataType);
        $(el).find(".drop-down-selected-title").addClass("default");
      }

      if (itemIndex != "recent-game") {
        $(el).find(".drop-down-selected-title").text(randerText);
      } else {
        $(el).find(".drop-down-selected-title span").text(randerText);
      }
    });
  });
}

function changeLeagueTag() {
  $(".table-th.league").toggleClass("active");
  $.each($(".h2h-recode-table-list"), function (i, el) {
    $(el).find(".table-td.league").toggleClass("active");
  });
}

function h2hTabOddsToggle() {
  let idx = 0;
  $('.h2h-statistic-box-odds-contents[data-role="tab"]').click(function (e) {
    e.preventDefault();
    let itemsCnt = $(this).parent(".h2h-statistic-box-odds").children().length;
    idx++;

    if (idx >= itemsCnt) {
      idx = 0;
    }

    $(this)
      .parent(".h2h-statistic-box-odds")
      .find(".h2h-statistic-box-odds-contents")
      .not(`.h2h-statistic-box-odds-contents[data-index=${idx}]`)
      .removeClass("active");
    $(this)
      .parent(".h2h-statistic-box-odds")
      .find(`.h2h-statistic-box-odds-contents[data-index=${idx}]`)
      .addClass("active");
  });
}

function h2hVoteShareRander() {
  $(".h2h-statistic-box-vote").each(function () {
    let voteShareTotal = 0;
    const voteItems = $(this).find(".h2h-statistic-box-vote-items");

    voteItems.each(function () {
      const voteShare = $(this).data("vote");
      voteShareTotal += voteShare;
    });

    voteItems.each(function () {
      const itemsShare = $(this).data("vote");
      $(this).css({ width: (itemsShare / voteShareTotal) * 100 + "%" });
    });
  });
}

function h2hTrackerDounetChartRender() {
  let home = 0;
  let away = 0;
  let type, homeContent, awayContent;
  let total = 0;

  let homeColor, awayColor;

  let currentThemeMode = localStorage.getItem("theme");

  if (currentThemeMode == "light") {
    homeColor = "#0ba5ec";
    awayColor = "#ee46bc";
  } else {
    homeColor = "#0086c9";
    awayColor = "#dd2590";
  }

  $.each($(".tracker-body-stat-row-items"), function (i, el) {
    $.each(
      $(el).find(".tracker-body-stat-row-items-chart"),
      function (idx, elem) {
        type = $(elem).data("type");
        home = $(elem).data("home");
        away = $(elem).data("away");
        total = home + away;

        $(elem)
          .find(".chart-graphy")
          .css(
            "background-image",
            `conic-gradient(${awayColor} ${
              (away * 360) / total
            }deg , ${homeColor} ${(away * 360) / total}deg)`
          );

        if (type == "has-point") {
          homeContent = home + "%";
          awayContent = away + "%";
        } else {
          homeContent = home;
          awayContent = away;
        }

        $(elem).find(".chart-info .chart-info-home p").text(homeContent);
        $(elem).find(".chart-info .chart-info-away p").text(awayContent);
      }
    );
  });
}

function h2hSummaryItemGraphRander() {
  $.each($(".tracker-body-stat-middle-data-row"), function (i, el) {
    let homePoint = $(el).find(".home-graphy").data("count");
    let awayPoint = $(el).find(".away-graphy").data("count");
    let totalPoint = homePoint + awayPoint;

    $(el)
      .find(".home-graphy")
      .css({ width: (homePoint / totalPoint) * 100 + "%" });
    $(el)
      .find(".away-graphy")
      .css({ width: (awayPoint / totalPoint) * 100 + "%" });
  });
}

function h2hTrackerTeams(side, tag) {
  $(`.tracker-head-items[data-side=${side}]`)
    .not(`.tracker-head-items[data-tag=${tag}]`)
    .find("p")
    .removeClass("active");
  $(`.tracker-head-items[data-side=${side}][data-tag=${tag}]`)
    .find("p")
    .addClass("active");
}

function h2hPlayerSortSet(parentsClassName, idx) {
  $(`${parentsClassName} .player-recode-table-body-header-status`)
    .find('ul li[data-role="tab"]')
    .removeClass("active");
  $(`${parentsClassName} .player-recode-table-body-header-status`)
    .find(`ul li[data-role="tab"]:nth-child(${idx})`)
    .addClass("active");

  $(`${parentsClassName} .player-recode-table-body`)
    .find(`.player-recode-table-body-list-status ul li`)
    .removeClass("active");
  $(`${parentsClassName} .player-recode-table-body`)
    .find(`.player-recode-table-body-list-status ul li:nth-child(${idx})`)
    .addClass("active");
}
function h2hPlayerStatusSort() {
  $(".player-recode-table-body-header-status ul li[data-role='tab']").click(
    function (e) {
      e.preventDefault();
      let indexLabel = $(this).index();

      $(this)
        .parents(".player-recode-table-body-header-status")
        .find('ul li[data-role="tab"]')
        .removeClass("active");
      $(this).addClass("active");

      $(this)
        .parents(".player-recode-table-body")
        .find(`.player-recode-table-body-list-status ul li`)
        .removeClass("active");

      $(this)
        .parents(".player-recode-table-body")
        .find(
          `.player-recode-table-body-list-status ul li:nth-child(${
            indexLabel + 1
          })`
        )
        .addClass("active");
    }
  );
}

function verticalScroll(itemClass) {
  $(itemClass).scroll(function () {
    let moveHorizon = $(this).scrollLeft();
    $(itemClass).scrollLeft(moveHorizon);
  });
}

// h2h rank
function h2hRankSortSet(parentsClassName, idx) {
  $(`${parentsClassName} .rank-data`)
    .find('ul li[data-role="tab"]')
    .removeClass("active");
  $(`${parentsClassName} .rank-data`)
    .find(`ul li[data-role="tab"]:nth-child(${idx})`)
    .addClass("active");

  $(`${parentsClassName} .season-rank-content-body`)
    .find(`.rank-data ul li`)
    .removeClass("active");
  $(`${parentsClassName} .season-rank-content-body`)
    .find(`.rank-data ul li:nth-child(${idx})`)
    .addClass("active");
}
function h2hRankSort() {
  $('.rank-data ul li[data-role="tab"]').click(function (e) {
    e.preventDefault();
    let indexLabel = $(this).index();

    $(this)
      .parents(".rank-data")
      .find('ul li[data-role="tab"]')
      .removeClass("active");
    $(this).addClass("active");

    $(this)
      .parents(".season-rank-content-body")
      .find(`.rank-data ul li`)
      .removeClass("active");
    $(this)
      .parents(".season-rank-content-body")
      .find(`.rank-data ul li:nth-child(${indexLabel + 1})`)
      .addClass("active");
  });
}

// h2h match fact
function matchFactOddsToggle() {
  let rowCntArray = [0, 0, 0];
  $(".host-teams-info-box-odds-row").click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    let items = $(this).find(".host-teams-info-box-odds-row-items");
    let maxRowCnt = items.length;
    rowCntArray[idx]++;

    if (rowCntArray[idx] > maxRowCnt - 1) {
      rowCntArray[idx] = 0;
    }
    $.each(items, function (i, el) {
      if (i == rowCntArray[idx]) {
        $(el).addClass("active");
      } else {
        $(el).removeClass("active");
      }
    });
  });
}
// h2h move match
function h2hMoveMatchData() {
  let items =
    ".table-td.league, .table-td.date, .table-td.score, .table-td.half-front";
  $(".relative-record, .recent-record")
    .find(items)
    .click(function (e) {
      e.preventDefault();
      let matchBoxMove = $(".match-statistics-container").offset().top;
      $(window).scrollTop(matchBoxMove);
    });
}
// h2h match side
function h2hLineupRoster(side, detailSide) {
  $(`.h2h-lineup-side-items[data-side=${side}]`)
    .not(`h2h-lineup-side-items[data-tag=${detailSide}]`)
    .find("p")
    .removeClass("active");
  $(`.h2h-lineup-side-items[data-side=${side}][data-tag=${detailSide}]`)
    .find("p")
    .addClass("active");
}
// h2h rank side
function h2hRankSide() {
  $(".side-tab ul li").click(function (e) {
    e.preventDefault();
    let rankSideCode = $(this).parents(".season-rank-items").data("side");

    $(`.season-rank-${rankSideCode}`)
      .find(".side-tab ul li p")
      .removeClass("active");
    $(this).find("p").addClass("active");
  });
}

// h2h horizonal scroll
function h2hHorizonalScroll() {
  $(".lineup-lists-roster-data .player-data").scroll(function () {
    let scrollLeftSpace = $(this).scrollLeft();
    let frameSize = $(this).width();
    let seasonWidth = $(this).find(".player-data-season").width();

    if (scrollLeftSpace >= seasonWidth - frameSize) {
      $(this)
        .parents(".h2h-statistic-box-lineup-lists")
        .find(".h2h-statistic-box-lineup-lists-head-tag p")
        .text("경기통계");
    } else {
      $(this)
        .parents(".h2h-statistic-box-lineup-lists")
        .find(".h2h-statistic-box-lineup-lists-head-tag p")
        .text("시즌통계");
    }

    $(this)
      .parents(".h2h-statistic-box-lineup-lists")
      .find(".player-data")
      .scrollLeft(scrollLeftSpace);
  });
  // h2hHorizonHovering();

  h2hHorizonScrollSet($(".h2h-statistic-box-lineup-lists"));
}
function h2hHorizonHovering() {
  let scrollDataWidth = 0;
  $(".lineup-lists-roster-data").hover(
    function () {
      // over
      $(this)
        .find(".lineup-lists-roster-data-body-row:last-child")
        .addClass("hovering");
      // $(this).parent('.lineup-lists-roster-body').addClass('hovering');
    },
    function () {
      // out
      $(this)
        .find(".lineup-lists-roster-data-body-row:last-child")
        .removeClass("hovering");
      // $(this).parent('.lineup-lists-roster-body').removeClass('hovering');
    }
  );
}
function h2hHorizonScrollSet(items) {
  $.each(items, function (i, el) {
    $(el)
      .find(
        ".lineup-lists-roster-data:last-child .lineup-lists-roster-data-body-row:last-child"
      )
      .addClass("hovering");
  });
}

// h2h rank tooltip view
function h2hRankRevTooltip() {
  $(
    ".season-rank-content-body-contain .season-rank-content-body-contain-row:last-child"
  ).hover(
    function () {
      // over
      $(this).addClass("rev-tooltip");
    },
    function () {
      // out
      $(this).removeClass("rev-tooltip");
    }
  );
}

// h2h position player randering
function h2hFormationPlayerRander() {
  let fomationHomeCode = $(".h2h-statistic-box-lineup-playground-home").data(
    "formation"
  );
  let fomationAwayCode = $(".h2h-statistic-box-lineup-playground-away").data(
    "formation"
  );

  let fomatioedHomeCode = String("1" + fomationHomeCode);
  let fomatioedAwayCode = String("1" + fomationAwayCode);

  let homeFormation = fomatioedHomeCode.toString().split("").map(Number);
  let awayFormation = fomatioedAwayCode.toString().split("").map(Number);

  let homeExpendClass, awayExpendClass;

  for (let home = 0; home < homeFormation.length; home++) {
    if (fomationHomeCode == "4231") {
      homeExpendClass = "wide";
    } else {
      homeExpendClass = "";
    }

    $(".h2h-statistic-box-lineup-playground-home").append(
      `<div class='formation-box formation-home-box-${home} ${homeExpendClass}' data-formation-code='${homeFormation[home]}'></div>`
    );

    for (let hi = 0; hi < homeFormation[home]; hi++) {
      $(
        `.h2h-statistic-box-lineup-playground-home .formation-box.formation-home-box-${home}`
      ).append(formationPlayer(home, `player-${home}${hi}`, true, true, "6.0"));
    }
  }

  for (let away = 0; away < awayFormation.length; away++) {
    if (fomationAwayCode == "4231") {
      awayExpendClass = "wide";
    } else {
      awayExpendClass = "";
    }

    $(".h2h-statistic-box-lineup-playground-away").prepend(
      `<div class='formation-box formation-away-box-${away} ${awayExpendClass}' data-formation-code='${awayFormation[away]}'></div>`
    );
    for (let ai = 0; ai < awayFormation[away]; ai++) {
      $(
        `.h2h-statistic-box-lineup-playground-away .formation-box.formation-away-box-${away}`
      ).prepend(
        formationPlayer(away, `player-${away}${ai}`, false, true, "4.5")
      );
    }
  }
}

function formationPlayer(num, name, card, transStatus, point) {
  let playerTemp = `
		<div class='player'>
			<div class='player-info'>
				<div class='player-info-indicate'>
					<div class='indicate-icons card ${card ? "" : "hide"}'></div>
					<div class='indicate-icons trans ${transStatus ? "" : "hide"}'></div>
				</div>
				<div class='player-info-uniform'>
					<p class='player-num'>${num}</p>
					<div class='player-info-points'>
						<p class='points'>${point}</p>
					</div>
				</div>
				<div class='player-info-name'>
					<p>${name}</p>
				</div>
			</div>
		</div>
	`;
  return playerTemp;
}
// dialog외 클릭하면 닫힘
function extendSelectClickClose() {
  $(document).click(function (e) {
    if (!$(e.target).closest(".drop-down-content-title").length) {
      $(".drop-down-content-title, .drop-down-content-options").removeClass(
        "active"
      );
    }

    if (!$(e.target).closest(".select-custom-box").length) {
      $(".select-custom-box").removeClass("active");
    }

    if (!$(e.target).closest(".calendar").length) {
      $(".calendar").removeClass("active");
    }

    if (!$(e.target).closest(".relay-cast-icons").length) {
      $(".relay-cast-sub-icons").removeClass("active");
    }

    if (!$(e.target).closest(".nick-name-box-title").length) {
      $(".nick-name-box-nav").removeClass("active");
    }

    if (!$(e.target).closest(".nick-user-data-info").length) {
      $(".nick-user-data-nav").removeClass("active");
    }

    if (!$(e.target).closest(".filter-custom-select").length) {
      $(".drop-down-selected-title, .filter-custom-select-options").removeClass(
        "active"
      );
    }
  });
}
