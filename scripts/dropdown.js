$(document).ready(function () {
  $(".dropdown_wrap:not([type='calendar']) > .dropdown_button").click(
    function () {
      if ($(this).parent().attr("change") == "true") {
        $(this).parent().attr("change", "false");
        var classes = $(this).children("span").attr("class").split(" ");
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].indexOf("-semibold") !== -1) {
            var newClass = classes[i].replace("-semibold", "-regular");
            $(this).children("span").removeClass(classes[i]);
            $(this).children("span").addClass(newClass);
          }
        }
      } else {
        $(this).parent().attr("change", "true");
        var classes = $(this).children("span").attr("class").split(" ");
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].indexOf("-regular") !== -1) {
            var newClass = classes[i].replace("-regular", "-semibold");
            $(this).children("span").removeClass(classes[i]);
            $(this).children("span").addClass(newClass);
          }
        }
      }
    }
  );
  $(".dropdown_wrap:not([type='calendar']) > .dropdown_button").hover(
    function () {
      if ($(this).parent().attr("change") == "false") {
        var classes = $(this).children("span").attr("class").split(" ");
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].indexOf("-regular") !== -1) {
            var newClass = classes[i].replace("-regular", "-semibold");
            $(this).children("span").removeClass(classes[i]);
            $(this).children("span").addClass(newClass);
          }
        }
      }
    },
    function () {
      if ($(this).parent().attr("change") == "false") {
        var classes = $(this).children("span").attr("class").split(" ");
        for (var i = 0; i < classes.length; i++) {
          if (classes[i].indexOf("-semibold") !== -1) {
            var newClass = classes[i].replace("-semibold", "-regular");
            $(this).children("span").removeClass(classes[i]);
            $(this).children("span").addClass(newClass);
          }
        }
      }
    }
  );
  $(".dropdown_wrap[type='calendar'] > .dropdown_button .date_content").click(
    function () {
      if ($(this).parent().parent().attr("change") == "true") {
        $(this).parent().parent().attr("change", "false");
      } else {
        $(this).parent().parent().attr("change", "true");
      }
    }
  );
  $(".dropdown_wrap:not([type='calendar']) .dropdown-menu_item").click(
    function () {
      $(this).parent().parent().attr("change", "false");
    }
  );
  $(".dropdown_wrap[type='calendar'] .dropdown-menu_item").click(function () {
    $(this).parent().parent().attr("change", "false");
  });

  // $(
  //   ".main_box .table_search_container .item-list .dropdown_wrap .dropdown-menu_item"
  // ).click(function () {
  //   $(this)
  //     .parent()
  //     .parent()
  //     .children(".dropdown_button")
  //     .children("span")
  //     .hasClass("heading-01-regular");
  // });
});
