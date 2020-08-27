const href = location.href;
const index = href.lastIndexOf('/') + 1;
const filename = href.substr(index);
const baseUrl = href.substring(0, index);

const foodsUrl = baseUrl + 'js/foods.json';
const shopsUrl = baseUrl + 'js/shops.json';

const status = $('#status');
const delay = 1000;

$(function () {
    $('#setTimer').on('click', function () {
        status.append('start\n');

        function sayHello() {
            let defer = new $.Deferred;
            setTimeout(function () {
                status.append('Hello!\n');
                defer.resolve();
            }, delay);
            return defer.promise();
        }
        
        function sayBye() {
            setTimeout(function () {
                status.append('Bye!\n');
            }, delay);
        }

        sayHello()
        .then(sayHello)
        .then(sayHello)
        .then(sayBye)
        .then(sayHello);
    });

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
