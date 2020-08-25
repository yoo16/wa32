const href = location.href;
const index = href.lastIndexOf('/') + 1;
const filename = href.substr(index);
const baseUrl = href.substring(0, index);
const apiUrl = baseUrl + 'js/foods.json';

// console.log(href);
// console.log(index);
// console.log(filename);
// console.log(baseUrl);
// console.log(apiUrl);

$(function () {
    $('#getText').on('click', function () {
        $.ajax({
            url: apiUrl,
            type: 'get',
            dataType: 'text',
        }).done(function(text) {
            $('#type').text('text');
            $('#result').text(text);
            let data = JSON.parse(text);
            console.log(data);
        }).fail(function() {
            alert('API Error');
        });
    });
});

$(function () {
    $('#getJson').on('click', function () {
        $.ajax({
            url: apiUrl,
            type: 'get',
            dataType: 'json',
        }).done(function(data) {
            console.log(data);
            $('#type').text('json');
            let text = JSON.stringify(data);
            $('#result').text(text);
        }).fail(function() {
            alert('API Error');
        });
    });
});