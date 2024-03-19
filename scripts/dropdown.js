$(document).ready(function () {
    $(".dropdown_wrap:not([type='calendar']) > .dropdown_button").click(
        function () {
            if ($(this).parent().attr("change") == "true") {
                $(this).parent().attr("change", "false");
            } else {
                $(this).parent().attr("change", "true");
            }
        }
    );
    $(".dropdown_wrap[type='calendar'] > .dropdown_button .date_content").click(
        function () {
            if ($(this).parent().parent().parent().attr("change") == "true") {
                $(this).parent().parent().parent().attr("change", "false");
            } else {
                $(this).parent().parent().parent().attr("change", "true");
            }
        }
    );
    $(".dropdown_wrap:not([type='calendar']) .dropdown-menu_item").click(
        function () {
            $(this).parent().parent().parent().attr("change", "false");
        }
    );
    $(".dropdown_wrap[type='calendar'] .dropdown-menu_item").click(function () {
        $(this).parent().parent().parent().attr("change", "false");
    });
});
