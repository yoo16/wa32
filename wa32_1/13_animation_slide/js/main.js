$(function () {
    let photo = $('#photo');
    slideToRight();

    //slide right
    function slideToRight() {
        photo.animate(
            { 'left': 300 },
            1000,
            'linear',
            function () {
                setTimeout(slideToDown, 1000);
            });
    };

    //slide left
    function slideToLeft() {
        photo.animate({ 'left': 0 }, 1000,
            'linear',
            function () {
                setTimeout(slideToUp, 1000)
            });
    };

    //slide down
    function slideToDown() {
        photo.animate({ 'top': 100 }, 1000,
            'linear',
            function () {
                setTimeout(slideToLeftUp, 1000);
            });
    };

    //slide left up
    function slideToLeftUp() {
        photo.animate({ 'left': 0, 'top': 0 }, 1000,
            'linear',
            function () {
                setTimeout(slideToRight, 1000);
            });
    };

    //slide up
    function slideToUp() {
        photo.animate({ 'top': 0 }, 1000,
            'linear',
            function () {
                setTimeout(slideToLeft, 1000);
            });
    };
});