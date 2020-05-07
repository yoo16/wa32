$(function () {
    let pic = $('#pic');
    let intervalID;

    pic.prop({
        w: $('#pic-box').width(),   // 1コマ分の横幅
        h: $('#pic-box').height(),  // 1コマ分の高さ
        col: 6,                     // コマ画像の横コマ数
        max: 12,                    // 全コマ数
        num: 0                      // 現在のコマ数のインデックス
    });

    /**
     * target 画像の位置を変更
     */
    function change(target) {
        // target.prop('num', target.prop('num') + 1);
        // if (target.prop('num') >= target.prop('max')) {
        //     //num >= max になったら終了
        //     clearInterval(intervalID);
        // } else {
        //     console.log(target.prop);
        //     target.css({
        //         'top':
        //             Math.floor(target.prop('num') / target.prop('col'))
        //             * target.prop('h') * -1 + 'px',
        //         'left': (target.prop('num') % target.prop('col'))
        //             * target.prop('w') * -1 + 'px'
        //     });
        // }

        target.prop('num', target.prop('num') + 1);
        if (target.prop('num') >= target.prop('max')) {
            //num >= max になったら終了
            clearInterval(intervalID);
        } else {
            console.log(target.prop);
            target.css({
                'top':
                    Math.floor(target.prop('num') / target.prop('col'))
                    * target.prop('h') * -1 + 'px',
                'left': (target.prop('num') % target.prop('col'))
                    * target.prop('w') * -1 + 'px'
            });
        }
    };

    /**
     * 画像読み込み完了
     * 100ms(0.1秒)ごとに change関数を実行
     */
    function loaded() {
        intervalID = setInterval(function () {
            change(pic);
        }, 100);
    }

    /**
     * 初期化
     */
    function init() {
        let img = new Image();
        $(img).on('load', loaded).attr('src', pic.attr('src'));

        // $('#pic').one('load', function() {

        //  }).each(function() {
        //     if (this.complete) loaded();
        //  });
    };

    init();
});