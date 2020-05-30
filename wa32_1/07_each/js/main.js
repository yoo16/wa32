$(function () {
    let items = [
        { index:0, name: '銅のつるぎ', price: 150, amount: 1},
        { index:1, name: '鉄のやり', price: 550, amount: 1},
        { index:2, name: '皮のたて', price: 90, amount: 1},
        { index:3, name: '鉄のかぶと', price: 850, amount: 1},
        { index:4, name: '皮のぼうし', price: 50, amount: 1},
    ];

    $.each(items, function(key, value) {
        console.log(key);
        console.log(value);
    });

    $('li').each(function(index, element){
        console.log(index);
        console.log(element);
    });

});
