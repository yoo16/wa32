/*
 * main.js
 */

$(function () {
    $('input').val('初期値書き換え');

    $('#title').val('タイトル書き換え');

    $('.memo').val('メモ');

    $('div > input').val('子要素');

    $('div select').css('background', '#2050f0');

    $('input[name=price]').val('0');

    $('input[type=hidden]').val('3');

    /** 
     * filter
     */
    $('li:first input').val(0);
    //$('li:first-child input').val('0');
    //$('li:nth-child(1) input').val('0');
    //$('li:eq(0) input').val('0');
    $('li:nth-child(3) input').val(500);
    $('li:eq(2) input').val(500);
    $('li:last input').val(1000);

    $('.weapon, #shop input').val('複数');

    $('div:has(p)').css('border', '1px solid #ff0000');
    //$('div:has(p)').css('background-color', '#ff0000');
    //$('div:has(p)').css('color', '#ffffff');
    //$('div > p').css('border', '1px solid #0000ff');
});