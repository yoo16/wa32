$(function () {
    var headerHight = $('body').attr('header-height');

    $('a[href^="#"]').click(function () {
        var href = $(this).attr('href');
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        $("html, body").animate({ scrollTop: position }, 250, "swing");
        return false;
    });
});