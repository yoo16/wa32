$(function () {
    $('input').val('inputの値を変更');
    $('#title').val('セレクタの練習');
    $('.txt').val('クラス指定');
    $('input, #title, .txt').val('複数指定');
    $('div input').val('div内のinput');
    $('div > input').val('divが親');

    $('input[name]').val('name属性');
    $('input[name=title]').val('name属性のtitle');

    $('li:first input').val('最初の要素');
    $('li:nth-child(3) input').val('3つ目の要素');

    $('div:has(p)').css('border', '1px solid #f00');
});