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

    $('li:first input').val('li の最初');
    //$('li:first-child input').val('li の最初');

    $('li:nth-child(3) input').val('li の3つ目');

    $('li:last input').val('li の最後');
    //$('li:last-child input').val('li の最後');
});