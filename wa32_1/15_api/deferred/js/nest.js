const href = location.href;
const index = href.lastIndexOf('/') + 1;
const filename = href.substr(index);
const baseUrl = href.substring(0, index);

const foodsUrl = baseUrl + 'js/foods.json';
const shopsUrl = baseUrl + 'js/shops.json';

const status = $('#status');
const delay = 1000;

$(function () {
    $('#getJson').on('click', function () {
        $.getJSON(
            foodsUrl
        ).then(function (data) {
            $('#foods').text(JSON.stringify(data));
            $.getJSON(
                shopsUrl
            ).then(function (data) {
                $('#shops').text(JSON.stringify(data))
            });
        });
    });

    $('#setTimer').on('click', function () {
        status.text('');
        status.append('Hello!\n');
        setTimeout(function () {
            status.append('Hello!\n');
            setTimeout(function () {
                status.append('Hello!\n');
                setTimeout(function () {
                    status.append('Bye!\n');
                    status.append('Hello!\n');
                }, delay);
            }, delay);
        }, delay);
    });
});
