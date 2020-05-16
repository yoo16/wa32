/*
 * main.js
 */

$(function () {
    $('img').css('position', 'absolute');
    $('img').animate({ 'left': 600 }, 1000);

    $('img').css('position', 'absolute')
            .animate({ 'top': 100 }, 500);

    //Error
    //console.log($('img').css('position', 'absolute').attr('id'));
    // $('img').css('position', 'absolute')
    //         .attr('id').animate({'top':300}, 1000);
});