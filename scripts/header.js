$(document).ready(function () {
    $(".menu-list > .menu-item").hover(
        function () {
            if ($(this).children(".submenu-list").length > 0) {
                // over
                $(".submenu_container").attr("change", "true");
                $(this).children(".submenu-list").attr("change", "true");
            }
        },
        function () {
            if ($(this).children(".submenu-list").length > 0) {
                // out
                $(".submenu_container").attr("change", "false");
                $(this).children(".submenu-list").attr("change", "false");
            }
        }
    );
});
