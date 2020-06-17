
$(function () {
    let girl = $('#girl');
    girl.css({
        position: 'relative',
        top: 0,
        left: 0,
    })
    const easing = 'easeInOutBack'
    const duration = 1000

    // slideToRight();

    //slide right
    function slideToRight() {
        girl.animate(
            { 'left': 300 }, duration, easing,
            function () {
                setTimeout(slideToDown, 1000)
            })
    }

    //slide left
    function slideToLeft() {
        girl.animate({ 'left': 0 }, duration, easing,
            function () {
                setTimeout(slideToUp, 1000)
            })
    }

    //slide down
    function slideToDown() {
        girl.animate({ 'top': 100 }, duration, easing,
            function () {
                setTimeout(slideToLeft, 1000)
            })
    }

    //slide left up
    function slideToLeftUp() {
        girl.animate({ 'left': 0, 'top': 0 }, duration, easing,
            function () {
                setTimeout(slideToRight, 1000)
            })
    }

    //slide up
    function slideToUp() {
        girl.animate({ 'top': 0 }, duration, easing,
            function () {
                setTimeout(slideToRight, 1000)
            })
    }

    setInterval(function () {
        girl.animate({ 'left': 300 }, duration, easing)
            .animate({ 'top': 300 }, duration, easing)
            .animate({ 'left': 0 }, duration, easing)
            .animate({ 'top': 0 }, duration, easing,)
    })

})