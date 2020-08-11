$(function () {
    let setCookie = function setCookie() {
        let login_name = $('input[name=login_name]').val();
        $.cookie('login_name', login_name);
    }

    let getCookie = function() {
        if (login_name = $.cookie('login_name')) {
            $('input[name=login_name]').val(login_name);
        }
    } 

    let init = function () {
        // $('#loginForm').on('submit', function(event) {
        //     setCookie();
        //     // event.preventDefault();
        // });
        $('#loginBtn').on('click', function (event) {
            setCookie();
            // event.preventDefault();
        });

        getCookie();
    }

    init();
});