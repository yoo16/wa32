let methods = {
    hello: {
        callback: function (name) {
            $('#result').text('callback:' + name)
        }
    },
    bye: {
        callback: function (name) {
            $('#result').text('callback:' + name)
        }
    },
};

function main(key) {
    methods[key].callback(key);
}
main('hello');

//ajax
let successCallback = function() {
    console.log('success');
}
let errorCallback = function() {
    console.log('error');
}
let url = 'http://localhost/api/test';
$.ajax({
    url: url,
    type: 'get',
    dataType: 'json',
}).done(function(result) {
    successCallback();
}).fail(function(result) {
    errorCallback();
});