const href = location.href;
const index = href.lastIndexOf('/') + 1;
const filename = href.substr(index);
const baseUrl = href.substr(0, index);
const apiUrl = baseUrl + 'js/foods.json';

$(function () {
    $('#getText').on('click', function () {
        $.ajax({
            url: apiUrl,
            type: 'get',
            dataType: 'text',
        }).done(function(data) {
            $('#type').text('text');
            $('#result').text(data);
            console.log(JSON.parse(data));
        }).fail(function(error) {
            console.log(error);
        });
    });

    $('#getJson').on('click', function () {
        $.ajax({
            url: apiUrl,
            type: 'get',
            dataType: 'json',
        }).done(function(data) {
            $('#type').text('json');
            $('#result').text(JSON.stringify(data));
        }).fail(function(error) {
            console.log(error);
        });
    });

    $('#getJsonThen').on('click', function () {
        $.ajax({
            url: apiUrl,
            type: 'get',
            dataType: 'json',
        }).then(
            function(data) {
               $('#type').text('json(then)');
               $('#result').text(JSON.stringify(data));
            },
            function (error) {
               console.log(error);
        });
    });
});
