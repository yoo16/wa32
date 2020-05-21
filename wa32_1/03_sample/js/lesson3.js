jQuery.noConflict();

jQuery(function ($) {
    $('li:eq(0) input[name="item"]').val('銅のつるぎ');
    $('li:eq(1) input[name="item"]').val('皮のたて');
    $('li:eq(2) input[name="item"]').val('皮のぼうし');
});

document.observe("dom:loaded", function () {
    alert('prototype.js');
});