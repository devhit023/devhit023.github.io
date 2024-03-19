$(document).ready(function () {
  // $(`#fixture-calendar, #result-calendar`).find('.selected').data('code', dateToCode(toDay));
  // $(`#fixture-calendar, #result-calendar`).find('.selected').data('monthCode', dateToCode(toDay));
  $(`.calendar[data-code='calendar']`)
    .find(".selected")
    .data("code", dateToCode(toDay));
  $(`.calendar[data-code='calendar']`)
    .find(".selected")
    .data("monthCode", dateToCode(toDay));

  // calendarSetRander();

  calrendarClickStep();
  calrendarExpClick();
});

// tab-role 클릭시 탭별 calendar 생성하기
function calendarSetRander() {
  $(".table-control-tab li").click(function (e) {
    e.preventDefault();
    let tagData;
    if ($(this).data("options") === "calendar") {
      tagData = $(this).data("code");
      calendarGenRander(tagData);
    }
  });
}

function calrendarClickStep() {
  $(".scheduale-content-selected").mousedown(function () {
    $(this).find(".selected").addClass("pressing");
  });
  $(".scheduale-content-selected").mouseup(function () {
    $(this).find(".selected").removeClass("pressing");
  });
}

function calrendarExpClick() {
  $(".scheduale-content-selected").click(function (e) {
    e.preventDefault();

    if ($(this).parents(".calendar").hasClass("active")) {
      $(".calendar").removeClass("active");

      return false;
    }
    $(".select-custom-box, .calendar").not(this).removeClass("active");

    $(".select-custom").removeClass("active");
    $(this).parents(".calendar").addClass("active");

    // scroll set
    let tag = $(this).parents(".calendar").attr("id").split("-")[0];
    setScroll(tag);
  });
}

// 날짜 2자릿수 맞추기
function addZeroNum(num) {
  if (num < 10) {
    num = "0" + num.toString();
  } else {
    num = num.toString();
  }
  return num;
}

// week to text
function weekToText(dayCode) {
  switch (dayCode) {
    case "00":
      return "일";
    case "01":
      return "월";
    case "02":
      return "화";
    case "03":
      return "수";
    case "04":
      return "목";
    case "05":
      return "금";
    case "06":
      return "토";
    default:
      return "일";
  }
}
// code to date
function codeToDate(code, type) {
  let yearCode = code.substr(0, 4);
  let monthCode = code.substr(4, 2);
  let dateCode = code.substr(6, 2);
  let dayCode = code.substr(8, 2);

  if (type == "month-date-day") {
    return `${monthCode}-${dateCode} ${weekToText(dayCode)}`;
  } else if (type == "year-month") {
    return `${yearCode}-${monthCode}`;
  } else {
    return `${yearCode}-${monthCode}-${dateCode}`;
  }
}
// date to code
function dateToCode(date) {
  return `${date.getFullYear()}${addZeroNum(date.getMonth() + 1)}${addZeroNum(
    date.getDate()
  )}${addZeroNum(date.getDay())}`;
}

// date to Custom date
function dateToCustomDate(date, type) {
  if (type == "month-date-day") {
    return `${addZeroNum(date.getMonth() + 1)}-${addZeroNum(
      date.getDate()
    )}-${addZeroNum(day.getDate())}`;
  } else if (type == "year-month") {
    return `${date.getFullYear()}-${addZeroNum(date.getMonth() + 1)}`;
  } else {
    return `${date.getFullYear()}-${addZeroNum(
      date.getMonth() + 1
    )}-${addZeroNum(date.getDate())}`;
  }
}

// scroll set
function setScroll(type) {
  let scrollHeightVal = 0;
  let prevHeight = $(`#${type}-calendar`)
    .find(
      ".scheduale-option .option-box-item-container .option-box-item-before"
    )
    .prop("scrollHeight");
  let selectedDate = codeToDate(
    $(`#${type}-calendar`).find(".selected").data("code")
  ).split("-")[2];
  let selectedMonth = codeToDate(
    $(`#${type}-calendar`).find(".selected").data("code")
  ).split("-")[1];
  let changedMonth = codeToDate(
    $(`#${type}-calendar`).find(".selected").data("monthCode")
  ).split("-")[2];
  let activeCnt = 0;

  if (type == "result") {
    scrollHeightVal = (Number(selectedDate) + 1) * 30;
  } else {
    $.each($(".option-box-item-current .option-box li"), function (i, el) {
      if ($(el).hasClass("active")) {
        activeCnt++;
      }
    });

    if (activeCnt > 0) {
      if (Number(selectedMonth) === toDay.getMonth() + 1) {
        scrollHeightVal =
          prevHeight + (Number(selectedDate) - toDay.getDate()) * 30;
      } else {
        scrollHeightVal = prevHeight + (Number(selectedDate) - 2) * 30;
      }
    } else {
      scrollHeightVal = prevHeight + (Number(changedMonth) - 1) * 30;
    }
  }

  $(`#${type}-calendar`)
    .find(".option-box-item-container")
    .scrollTop(scrollHeightVal);
}

const toDay = new Date();

// set calendar
function calendarGenRander(type) {
  let selectedDate = $(`#${type}-calendar`).find(".selected").data("code");
  let viewMonth = $(`#${type}-calendar`).find(".selected").data("monthCode");

  let lastDayOfPrevMonth = new Date(
    Number(codeToDate(viewMonth).split("-")[0]),
    Number(codeToDate(viewMonth).split("-")[1] - 1),
    0
  ); // 이전 달의 마지막 날
  let firstDayOfMonth = new Date(
    Number(codeToDate(viewMonth).split("-")[0]),
    Number(codeToDate(viewMonth).split("-")[1] - 1),
    1
  ); // 이번 달의 첫 날
  let lastDayOfMonth = new Date(
    Number(codeToDate(viewMonth).split("-")[0]),
    Number(codeToDate(viewMonth).split("-")[1]),
    0
  ); // 이번 달의 마지막 날
  let firstDayOfNextMonth = new Date(
    Number(codeToDate(viewMonth).split("-")[0]),
    Number(codeToDate(viewMonth).split("-")[1]),
    1
  ); // 다음달의 첫 날

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산

  let todayCode = dateToCode(toDay);
  let pListDate,
    pListTemp,
    pDays,
    cListTemp,
    cListDate,
    cDays,
    nListDate,
    nListTemp,
    nDays;

  $(".option-box-item").find(".option-box").empty();

  $(`#${type}-calendar`)
    .find(".scheduale-content-selected .selected p.selected-title")
    .html(
      `${codeToDate(selectedDate, "month-date-day").split(" ")[0]}<span>${
        codeToDate(selectedDate, "month-date-day").split(" ")[1]
      }</span>`
    );
  $(`#${type}-calendar`)
    .find(".move-month-selected .selected-month")
    .text(`${codeToDate(viewMonth, "year-month").split(" ")[0]}`);

  // 선택일 이전달
  for (
    let idx = lastDayOfPrevMonth.getDate();
    idx >= lastDayOfPrevMonth.getDate() - 7;
    idx--
  ) {
    pListDate = new Date(
      Number(codeToDate(viewMonth).split("-")[0]),
      Number(codeToDate(viewMonth).split("-")[1] - 2),
      idx
    );
    pDays = (toDay - pListDate) / oneDay;

    pListTemp = `
					<li class="${
            todayCode == dateToCode(pListDate) ||
            selectedDate == dateToCode(pListDate)
              ? "active"
              : ""
          } ${
      type == "fixture" && pDays > 0 ? "hide" : ""
    }" data-code="${dateToCode(
      pListDate
    )}" onclick="pickDate('${type}','${dateToCode(pListDate)}')">
						${codeToDate(dateToCode(pListDate), "month-date-day").split(" ")[0]}<span>${
      codeToDate(dateToCode(pListDate), "month-date-day").split(" ")[1]
    }</span>
					</li>`;
    $(`#${type}-calendar`)
      .find(".option-box-item-before .option-box")
      .prepend(pListTemp);
  }

  // 선택인 현재 달
  // console.log(firstDayOfMonth.getDate(), lastDayOfMonth.getDate());
  for (let i = firstDayOfMonth.getDate(); i <= lastDayOfMonth.getDate(); i++) {
    cListDate = new Date(
      Number(codeToDate(viewMonth).split("-")[0]),
      Number(codeToDate(viewMonth).split("-")[1] - 1),
      i
    );
    cDays = (toDay - cListDate) / oneDay;

    cListTemp = `
				<li class="${
          todayCode == dateToCode(cListDate) ||
          selectedDate == dateToCode(cListDate)
            ? "active"
            : ""
        } ${type == "fixture" && cDays > 2 ? "hide" : ""} ${
      type == "result" && cDays < 0 ? "hide" : ""
    }" data-code="${dateToCode(
      cListDate
    )}" onclick="pickDate('${type}','${dateToCode(cListDate)}')">
					${codeToDate(dateToCode(cListDate), "month-date-day").split(" ")[0]}<span>${
      codeToDate(dateToCode(cListDate), "month-date-day").split(" ")[1]
    }</span>
				</li>`;
    $(`#${type}-calendar`)
      .find(".option-box-item-current .option-box")
      .append(cListTemp);
  }

  // 선택일 다음달
  for (let index = firstDayOfNextMonth.getDate(); index <= 7; index++) {
    nListDate = new Date(
      Number(codeToDate(viewMonth).split("-")[0]),
      Number(codeToDate(viewMonth).split("-")[1]),
      index
    );

    nDays = (toDay - nListDate) / oneDay;

    nListTemp = `
				<li class="${
          todayCode == dateToCode(nListDate) ||
          selectedDate == dateToCode(nListDate)
            ? "active"
            : ""
        } ${
      type == "result" && nDays < 0 ? "hide" : ""
    }" data-code="${dateToCode(
      nListDate
    )}" onclick="pickDate('${type}','${dateToCode(nListDate)}')">
					${codeToDate(dateToCode(nListDate), "month-date-day").split(" ")[0]}<span>${
      codeToDate(dateToCode(nListDate), "month-date-day").split(" ")[1]
    }</span>
				</li>`;
    $(`#${type}-calendar`)
      .find(".option-box-item-after .option-box")
      .append(nListTemp);
  }

  setScroll(type);
}
// 일자 이동
function minusToDay(type) {
  let selectedDate = $(`#${type}-calendar`).find(".selected").data("code");
  let viewMonth = $(`#${type}-calendar`).find(".selected").data("monthCode");

  let todayCode = dateToCode(toDay);

  let moveDate = new Date(
    Number(codeToDate(selectedDate).split("-")[0]),
    Number(codeToDate(selectedDate).split("-")[1] - 1),
    Number(codeToDate(selectedDate).split("-")[2]) - 1
  );

  let yesterday = new Date(toDay);
  yesterday.setDate(toDay.getDate() - 1); // 어제 날짜로 설정

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산

  if (type == "fixture" && (toDay - moveDate) / oneDay > 1) {
    $(`#${type}-calendar`)
      .find(".selected")
      .data("code", dateToCode(yesterday));
    $(`#${type}-calendar`)
      .find(".selected")
      .data("monthCode", dateToCode(yesterday));
  } else {
    $(`#${type}-calendar`).find(".selected").data("code", dateToCode(moveDate));
    $(`#${type}-calendar`)
      .find(".selected")
      .data("monthCode", dateToCode(moveDate));
  }

  calendarGenRander(type);
}

function plusToDay(type) {
  let selectedDate = $(`#${type}-calendar`).find(".selected").data("code");
  let viewMonth = $(`#${type}-calendar`).find(".selected").data("monthCode");

  let todayCode = dateToCode(toDay);

  let moveDate = new Date(
    Number(codeToDate(selectedDate).split("-")[0]),
    Number(codeToDate(selectedDate).split("-")[1] - 1),
    Number(codeToDate(selectedDate).split("-")[2]) + 1
  );

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산

  if (type == "result" && (toDay - moveDate) / oneDay < 0) {
    $(`#${type}-calendar`).find(".selected").data("code", todayCode);
    $(`#${type}-calendar`).find(".selected").data("monthCode", todayCode);
  } else {
    $(`#${type}-calendar`).find(".selected").data("code", dateToCode(moveDate));
    $(`#${type}-calendar`)
      .find(".selected")
      .data("monthCode", dateToCode(moveDate));
  }

  calendarGenRander(type);
}

function minusToMonth(type) {
  let viewMonth = $(`#${type}-calendar`).find(".selected").data("monthCode");

  let moveMonth = new Date(
    Number(codeToDate(viewMonth).split("-")[0]),
    Number(codeToDate(viewMonth).split("-")[1]) - 2,
    1
  );

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산

  if (type == "fixture" && (toDay - moveMonth) / oneDay > toDay.getDate()) {
    $(`#${type}-calendar`).find(".selected").data("monthCode", viewMonth);
  } else {
    $(`#${type}-calendar`)
      .find(".selected")
      .data("monthCode", dateToCode(moveMonth));
  }

  calendarGenRander(type);
}
function plusToMonth(type) {
  let viewMonth = $(`#${type}-calendar`).find(".selected").data("monthCode");

  let moveMonth = new Date(
    Number(codeToDate(viewMonth).split("-")[0]),
    Number(codeToDate(viewMonth).split("-")[1]),
    1
  );

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산

  if (type == "result" && (toDay - moveMonth) / oneDay < -1) {
    $(`#${type}-calendar`).find(".selected").data("monthCode", viewMonth);
  } else {
    $(`#${type}-calendar`)
      .find(".selected")
      .data("monthCode", dateToCode(moveMonth));
  }

  calendarGenRander(type);
}

function pickDate(el, code) {
  $(`#${el}-calendar`).removeClass("active");

  let pickTarget = $(`#${el}-calendar .scheduale-content-selected .selected`);

  pickTarget.data("code", code);
  pickTarget.data("monthCode", code);

  calendarGenRander(el);
}
