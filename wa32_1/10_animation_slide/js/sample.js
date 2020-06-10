$(function () {
    let girl = $('#girl');
    girl.css({
        position: 'absolute',
        top: 0,
        left: 0,
    });

    let current = 0;
    let duration = 500;
    let easing = 'linear'

    $('#reset_btn').on('click', function () {
        girl.animate({ 'left': 0, 'top': 0 }, duration, easing);
    })

    $('#left_btn').on('click', function () {
        girl.animate({ 'left': 0 }, duration, easing);
    })

    $('#right_btn').on('click', function () {
        girl.animate({ 'left': 500 }, duration, easing);
    })

    $('#top_btn').on('click', function () {
        girl.animate({ 'top': 0 }, duration, easing);
    })

    $('#bottom_btn').on('click', function () {
        girl.animate({ 'top': 300 }, duration, easing);
    })

    $('#diagonal_btn').on('click', function () {
        girl.animate({ 'left': 500, 'top': 300 }, duration, easing);
    })

    $('#sqrt_btn').on('click', function () {
        // console.log(current)
        current = 0
        girl.css({ top: 0, left: 0 })
        girl.animate(
            {
                step: function (current) {
                    let point = getPoint(current);
                    girl.css({ left: point.x, top: point.y });
            }
        })
    })

    function getPoint(point) {
        let r = 100;
        let x = r * point;
        let y = Math.sqrt((r * r) - (x * x));
        return { x: x, y: y };
    }

});