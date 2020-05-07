$(function () {
    let girl = $('#girl');
    let intervalID;
    let duration = 150;
    let col = 4;
    let max = 8;

    girl.prop({
        w: $('#girl-box').width(),
        h: $('#girl-box').height(),
        col: col,
        max: max,
        num: 0 
    });

    /**
     * change
     */
    function change(target) {
        let currentNo = target.prop('num');
        let nextNo = currentNo + 1;
        let maxNo = target.prop('max');
        let width = target.prop('w');
        let height = target.prop('h');
        let colCount = target.prop('col');
        let col = currentNo % colCount;
        let row = Math.floor(currentNo / colCount);
        let x = width * col;
        let y = height * row;

        target.prop('num', nextNo);
        if (nextNo > maxNo) {
            clearInterval(intervalID);
        } else {
            target.css({
                'top': -y + 'px',
                'left': -x + 'px'
            });
        }
    };

    /**
     * loaded
     */
    function loaded() {
        intervalID = setInterval(function () { change(girl); }, duration);
    }

    /**
     * init
     */
    function init() {
        let img = new Image();
        $(img).on('load', loaded).attr('src', girl.attr('src'));
    };

    init();
});