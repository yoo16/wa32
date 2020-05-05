
$(function () {
    var result = '';
    addType('{}', {});
    addType('[]', []);
    addType('function() {}', function () { });
    addType('new Error()', new Error());
    addType('new Date()', new Date());
    addType('JSON', JSON);
    addType('Math', Math);
    addType('Hello', 'Hello');
    addType('1', 1);
    addType('true', true);

    console.log(html);

    console.log(typeof ({}))
    console.log(typeof ([]))
    console.log(typeof (function () { }))
    console.log(typeof (new Error()))
    console.log(typeof (new Date()))
    console.log(typeof (JSON))
    console.log(typeof (Math))
    console.log(typeof ('Hello'))
    console.log(typeof (1))
    console.log(typeof (true))
});

var html = '';
function addType(title, target) {
    var h2 = $('<h3 class="h3"></h3>');
    h2.html(title);
    $('#result').append(h2);

    var p = $('<p></p>');
    p.html(typeof(target));
    $('#result').append(p);
}