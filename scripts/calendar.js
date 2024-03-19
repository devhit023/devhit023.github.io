const toDay = new Date();

$(document).ready(function () {
  $(".dropdown_wrap[type='calendar']")
    .find(".date_content")
    .data("code", dateToCode(toDay));
  $(".dropdown_wrap[type='calendar']")
    .find(".date_content")
    .data("monthCode", dateToCode(toDay));

  calendarGenRander();
});

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
function setScroll() {
  let scrollHeightVal = 0;
  let prevHeight = $(`.dropdown_wrap[type='calendar']`)
    .find(
      ".scheduale-option .option-box-item-container .option-box-item-before"
    )
    .prop("scrollHeight");
  let selectedDate = codeToDate(
    $(`.dropdown_wrap[type='calendar']`).find(".date_content").data("code")
  ).split("-")[2];
  let selectedMonth = codeToDate(
    $(`.dropdown_wrap[type='calendar']`).find(".date_content").data("code")
  ).split("-")[1];
  let changedMonth = codeToDate(
    $(`.dropdown_wrap[type='calendar']`).find(".date_content").data("monthCode")
  ).split("-")[2];
  let activeCnt = 0;

  scrollHeightVal = (Number(selectedDate) + 1) * 30;
  // if (type == "result") {
  //     scrollHeightVal = (Number(selectedDate) + 1) * 30;
  // } else {
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
  // }

  $(`.dropdown_wrap[type='calendar']`)
    .find(".option-box-item-container")
    .scrollTop(scrollHeightVal);
}

// set calendar
function calendarGenRander() {
  let selectedDate = $(".dropdown_wrap[type='calendar']")
    .find(".date_content")
    .data("code");
  let viewMonth = $(".dropdown_wrap[type='calendar']")
    .find(".date_content")
    .data("monthCode");

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

  $(".dropdown_wrap[type='calendar']")
    .find(".date_content > .date_text > span:nth-child(1)")
    .html(`${codeToDate(selectedDate, "month-date-day").split(" ")[0]}`);
  $(".dropdown_wrap[type='calendar']")
    .find(".date_content > .date_text > span:nth-child(2)")
    .html(`${codeToDate(selectedDate, "month-date-day").split(" ")[1]}`);
  $(".dropdown_wrap[type='calendar']")
    .find(".dropdown-menu .month_wrap > .date_content > span")
    .text(`${codeToDate(viewMonth, "year-month").split(" ")[0]}`);
  $(".dropdown_wrap[type='calendar']")
    .find(".dropdown-menu > .dropdown-menu_list")
    .empty();

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
    if (pDays < 0) {
      pListTemp = `
						<li class="dropdown-menu_item ${
              todayCode == dateToCode(pListDate) ||
              selectedDate == dateToCode(pListDate)
                ? "active"
                : ""
            }" data-code="${dateToCode(
        pListDate
      )}" onclick="pickDate('${dateToCode(pListDate)}')">
				<span class="body-01-${
          todayCode == dateToCode(pListDate) ||
          selectedDate == dateToCode(pListDate)
            ? "semibold"
            : "regular"
        }">${
        codeToDate(dateToCode(pListDate), "month-date-day").split(" ")[0]
      }</span>
				<span class="body-01-${
          todayCode == dateToCode(pListDate) ||
          selectedDate == dateToCode(pListDate)
            ? "semibold"
            : "regular"
        }">${
        codeToDate(dateToCode(pListDate), "month-date-day").split(" ")[1]
      }</span>
			</li>`;
      $(".dropdown_wrap[type='calendar']")
        .find(".dropdown-menu > .dropdown-menu_list")
        .prepend(pListTemp);
    }
  }

  // 선택인 현재 달
  for (let i = firstDayOfMonth.getDate(); i <= lastDayOfMonth.getDate(); i++) {
    cListDate = new Date(
      Number(codeToDate(viewMonth).split("-")[0]),
      Number(codeToDate(viewMonth).split("-")[1] - 1),
      i
    );
    cDays = (toDay - cListDate) / oneDay;

    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    yesterday.setHours(0, 0, 0, 0);
    if (cListDate >= yesterday) {
      cListTemp = `
			<li class="dropdown-menu_item ${
        todayCode == dateToCode(cListDate) ||
        selectedDate == dateToCode(cListDate)
          ? "active"
          : ""
      }" data-code="${dateToCode(cListDate)}" onclick="pickDate('${dateToCode(
        cListDate
      )}')">
		<span class="body-01-${
      todayCode == dateToCode(cListDate) ||
      selectedDate == dateToCode(cListDate)
        ? "semibold"
        : "regular"
    }">${
        codeToDate(dateToCode(cListDate), "month-date-day").split(" ")[0]
      }</span>
		<span class="body-01-${
      todayCode == dateToCode(cListDate) ||
      selectedDate == dateToCode(cListDate)
        ? "semibold"
        : "regular"
    }">${
        codeToDate(dateToCode(cListDate), "month-date-day").split(" ")[1]
      }</span>	
	</li>`;
      $(".dropdown_wrap[type='calendar']")
        .find(".dropdown-menu > .dropdown-menu_list")
        .append(cListTemp);
    }
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
    			<li class="dropdown-menu_item ${
            todayCode == dateToCode(nListDate) ||
            selectedDate == dateToCode(nListDate)
              ? "active"
              : ""
          } " data-code="${dateToCode(
      nListDate
    )}" onclick="pickDate('${dateToCode(nListDate)}')">
    		<span class="body-01-${
          todayCode == dateToCode(nListDate) ||
          selectedDate == dateToCode(nListDate)
            ? "semibold"
            : "regular"
        }">${
      codeToDate(dateToCode(nListDate), "month-date-day").split(" ")[0]
    }</span>
    		<span class="body-01-${
          todayCode == dateToCode(nListDate) ||
          selectedDate == dateToCode(nListDate)
            ? "semibold"
            : "regular"
        }">${
      codeToDate(dateToCode(nListDate), "month-date-day").split(" ")[1]
    }</span>
    	</li>`;
    $(".dropdown_wrap[type='calendar']")
      .find(".dropdown-menu > .dropdown-menu_list")
      .append(nListTemp);
  }

  setScroll();
}
// 일자 이동
function minusToDay() {
  let selectedDate = $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("code");
  let viewMonth = $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("monthCode");

  let todayCode = dateToCode(toDay);

  let moveDate = new Date(
    Number(codeToDate(selectedDate).split("-")[0]),
    Number(codeToDate(selectedDate).split("-")[1] - 1),
    Number(codeToDate(selectedDate).split("-")[2]) - 1
  );

  let yesterday = new Date(toDay);
  yesterday.setDate(toDay.getDate() - 1); // 어제 날짜로 설정

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산
  console.log(toDay);
  console.log(moveDate);
  if ((toDay - moveDate) / oneDay <= 1) {
    //     $(`.dropdown_wrap[type='calendar']`)
    //         .find(".date_content")
    //         .data("code", dateToCode(yesterday));
    //     $(`.dropdown_wrap[type='calendar']`)
    //         .find(".date_content")
    //         .data("monthCode", dateToCode(yesterday));
    // } else {
    $(`.dropdown_wrap[type='calendar']`)
      .find(".date_content")
      .data("code", dateToCode(moveDate));
    $(`.dropdown_wrap[type='calendar']`)
      .find(".date_content")
      .data("monthCode", dateToCode(moveDate));
  }

  calendarGenRander();
}

function plusToDay() {
  let selectedDate = $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("code");
  let viewMonth = $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("monthCode");

  let todayCode = dateToCode(toDay);

  let moveDate = new Date(
    Number(codeToDate(selectedDate).split("-")[0]),
    Number(codeToDate(selectedDate).split("-")[1] - 1),
    Number(codeToDate(selectedDate).split("-")[2]) + 1
  );

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산
  // if ((toDay - moveDate) / oneDay < 0) {
  //     $(`.dropdown_wrap[type='calendar']`)
  //         .find(".date_content")
  //         .data("code", todayCode);
  //     $(`.dropdown_wrap[type='calendar']`)
  //         .find(".date_content")
  //         .data("monthCode", todayCode);
  // } else {
  $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("code", dateToCode(moveDate));
  $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("monthCode", dateToCode(moveDate));
  // }

  calendarGenRander();
}

function minusToMonth() {
  let viewMonth = $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("monthCode");

  let moveMonth = new Date(
    Number(codeToDate(viewMonth).split("-")[0]),
    Number(codeToDate(viewMonth).split("-")[1]) - 2,
    1
  );

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산
  if ((toDay - moveMonth) / oneDay > toDay.getDate()) {
    $(`.dropdown_wrap[type='calendar']`)
      .find(".date_content")
      .data("monthCode", viewMonth);
  } else {
    $(`.dropdown_wrap[type='calendar']`)
      .find(".date_content")
      .data("monthCode", dateToCode(moveMonth));
  }

  calendarGenRander();
}
function plusToMonth() {
  let viewMonth = $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("monthCode");

  let moveMonth = new Date(
    Number(codeToDate(viewMonth).split("-")[0]),
    Number(codeToDate(viewMonth).split("-")[1]),
    1
  );

  let oneDay = 24 * 60 * 60 * 1000; // 하루를 밀리초로 계산
  // if ((toDay - moveMonth) / oneDay < -1) {
  //     $(`.dropdown_wrap[type='calendar']`)
  //         .find(".date_content")
  //         .data("monthCode", viewMonth);
  // } else {
  //     console.log(moveMonth);
  $(`.dropdown_wrap[type='calendar']`)
    .find(".date_content")
    .data("monthCode", dateToCode(moveMonth));
  // }

  calendarGenRander();
}

function pickDate(code) {
  $(`.dropdown_wrap[type='calendar']`).removeClass("active");

  let pickTarget = $(
    `.dropdown_wrap[type='calendar'] .scheduale-content-selected .selected`
  );

  pickTarget.data("code", code);
  pickTarget.data("monthCode", code);

  calendarGenRander(el);
}
