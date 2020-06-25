$(function () {
    let pic = $('#pic')
    pic.prop({
        w: $('#pic-box').width(),   // 1コマ分の横幅
        h: $('#pic-box').height(),  // 1コマ分の高さ
        col: 6,                     // コマ画像の横コマ数
        max: 12,                    // 全コマ数
        num: 0,                     // 現在のコマ数のインデックス
    })
    
    let intervalID
    
    function loaded() {
        intervalID = setInterval(function() {
            change(pic)
        }, 100)
    }
    
    function change(target) {
        target.prop('num', target.prop('num') + 1);
        console.log(target.prop('num'))
        if (target.prop('num') >= target.prop('max')) {
            clearInterval(intervalID)
        } else {
            let num = target.prop('num');
            let col = target.prop('col');
            let width = target.prop('w');
            let height = target.prop('h');
            target.css({
                'top': Math.floor(num / col) * height * -1 + 'px',
                'left': (num % col) * width * -1 + 'px',
            });
            // target.css({
            //     'top':
            //         Math.floor(target.prop('num') / target.prop('col'))
            //         * target.prop('h') * -1 + 'px',
            //     'left': (target.prop('num') % target.prop('col'))
            //         * target.prop('w') * -1 + 'px'
            // });
        }
    }

    function init() {
        let img = new Image()
        $(img).attr('src', pic.attr('src')).on('load', loaded)
    }

    init()
})