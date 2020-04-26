/*
 * main.js
 */

$(function () {
    $('input').val('初期値書き換え');

    $('#title').val('タイトル書き換え');

    $('.memo').val('メモ書き換え');

    $('div > input').val('親要素 > 子要素 書き換え');

    $('input[name=price]').val('1000');

    $('input[type=hidden]').val('3');

    $('li:first input').val(0);
    //$('li:first-child input').val('0');
    //$('li:nth-child(1) input').val('10');

    $('li:nth-child(3) input').val(500);
    $('li:eq(2) input').val(500);

    $('li:last input').val(1000);

    $('div:has(p)').css('border', '1px solid #ff0000');
    //$('div:has(p)').css('background-color', '#ff0000');
    //$('div:has(p)').css('color', '#ffffff');
    //$('div > p').css('border', '1px solid #0000ff');
});