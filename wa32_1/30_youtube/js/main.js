$(function () {
    let settings = [
        { 'videoId': 'BR2i5nOhTXM', },
        { 'videoId': 'kt5KflkOgHM', },
        { 'videoId': '_CKEEfQBXZI', },
        { 'videoId': '1F5Cuzd0ThQ', },
        { 'videoId': '0r6O9wgBvGo', },
    ];
    const width = 640;
    const height = 480;
    const main = $('#main');

    $.each(settings, function (index, setting) {
        let src = '//www.youtube.com/embed/' + setting.videoId + '?';
        let params = {
            width: width,
            height: height,
            src: src,
        }
        let iframe = $('<iframe>');
        iframe.attr(params);
        $(main).append(iframe);
    });

    var OAUTH2_CLIENT_ID = 'AIzaSyAt2EBAy3GXCJk6-yaXjcfG78pDLs1LMf8';
    var OAUTH2_SCOPES = [ 'https://www.googleapis.com/auth/youtube' ];

    googleApiClientReady = function () {
        gapi.auth.init(function () {
            window.setTimeout(checkAuth, 1);
        });
    }

    function checkAuth() {
        gapi.auth.authorize({
            client_id: OAUTH2_CLIENT_ID,
            scope: OAUTH2_SCOPES,
            immediate: true
        }, handleAuthResult);
    }

    function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
            $('.pre-auth').hide();
            $('.post-auth').show();
            loadAPIClientInterfaces();
        } else {
            $('#login-link').click(function () {
                gapi.auth.authorize({
                    client_id: OAUTH2_CLIENT_ID,
                    scope: OAUTH2_SCOPES,
                    immediate: false
                }, handleAuthResult);
            });
        }
    }

    function loadAPIClientInterfaces() {
        gapi.client.load('youtube', 'v3', function () {
            handleAPILoaded();
        });
    }

});