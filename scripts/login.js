$(document).ready(function () {
    $("#login").click(function () {
        $(".login > .container[auth='true']").removeClass("hide");
        $(".login > .container[auth='false']").addClass("hide");
        $(".login-sub > .container[auth='true']").removeClass("hide");
        $(".login-sub > .container[auth='false']").addClass("hide");
    });
    $("#logout").click(function () {
        $(".login > .container[auth='false']").removeClass("hide");
        $(".login > .container[auth='true']").addClass("hide");
        $(".login-sub > .container[auth='false']").removeClass("hide");
        $(".login-sub > .container[auth='true']").addClass("hide");
    });
});
