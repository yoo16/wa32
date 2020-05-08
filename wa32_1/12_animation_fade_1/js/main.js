$(function () {
    //fade in
    let photo = $('#photo');
    function open() {
        photo.fadeIn(3000, "easeInQuad",
            function () {
                setTimeout(close, 1000);
            });
    }

    //fade out
    function close() {
        photo.fadeOut(1500, "easeInQuad",
            function () {
                setTimeout(open, 500);
            });
    }
    open();
});