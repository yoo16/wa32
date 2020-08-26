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