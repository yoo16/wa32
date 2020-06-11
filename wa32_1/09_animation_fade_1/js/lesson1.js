$(function () {
    let girl = $('#girl');
    let duration = 500;
    let easing = 'swing'

    $('#fade_in').on('click', function () {
        girl.fadeIn(duration, easing);
    })

    $('#fade_out').on('click', function () {
        girl.fadeOut(duration, easing);
    })
});