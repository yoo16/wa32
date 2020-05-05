$(function () {
    let photo = $('#photo_1');
    //easein
    function open() {
        photo.fadeIn(3000, "easeInSine",
            function () {
                setTimeout(close, 1000);
            });
    }
    //easeout
    function close() {
        photo.fadeOut(1500, "easeOutSine",
            function () {
                setTimeout(open, 500);
            });
    }
    open();
});