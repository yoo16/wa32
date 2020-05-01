/*
 * main.js
 */

$(function () {
    console.log($);
    console.log($.fn);

    // $('#itemList li').removeClass('item');
    // $('#itemList li').addClass('item');
    // $('#itemList li').css('color', 'red');

    let target = $('#itemList li');
    target.removeClass('dummy');
    target.addClass('item');
    target.css('color', 'red');

    // let target = $('#itemList li');
    // target.removeClass('item').addClass('item').css('color', 'red');
});