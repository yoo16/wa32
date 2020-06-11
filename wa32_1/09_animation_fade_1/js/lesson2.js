$(function () {
    //fade in
    let girl = $('#girl');
    function open() {
        girl.fadeIn(2000, "swing",
            function () {
                setTimeout(close, 1000);
            });
    }

    //fade out
    function close() {
        girl.fadeOut(500, "swing",
            function () {
                setTimeout(open, 500);
            });
    }
    open();

    let usagi = $('#usagi');
    function usagiOpen() {
        usagi.fadeIn(2000, "swing", 
            function () {
                setTimeout(usagiClose, 500);
        });
    }

    function usagiClose() {
        usagi.fadeOut(2000, "swing",
            function () {
                setTimeout(usagiOpen, 500);
        })
    }
    usagiOpen();

});