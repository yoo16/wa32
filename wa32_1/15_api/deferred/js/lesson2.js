const href = location.href;
const index = href.lastIndexOf('/') + 1;
const filename = href.substr(index);
const baseUrl = href.substring(0, index);

const foodsUrl = baseUrl + 'js/foods.json';
const shopsUrl = baseUrl + 'js/shops.json';

$(function () {
    $('#getJson').on('click', function () {
        $.when(
            $.getJSON(foodsUrl),
            $.getJSON(shopsUrl),
        ).then(function (foods, shops) {
            $('#foods').text(JSON.stringify(foods));
            $('#shops').text(JSON.stringify(shops));
        }, function (error) {
            console.log(error);
        });
    });
});
