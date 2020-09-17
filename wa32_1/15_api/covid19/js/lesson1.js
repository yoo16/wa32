const totalUrl = 'https://covid19-japan-web-api.now.sh/api/v1/total';

$(function () {
    $('#search').on('click', function () {
        $.when(
            $.getJSON(totalUrl),
        ).then(function(totalResponse) {
                console.log(totalResponse);
            },
            function() {
                console.log('error');
            }
        );
    });
});