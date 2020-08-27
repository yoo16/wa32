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
});
