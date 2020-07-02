$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li')
        let thumbnailList = []
        let current = 0
        let easing = 'swing'
        let duration = 1200

        // クリック画像処理
        function open() {
            $(photoList[current]).stop().fadeIn(duration, easing)

            let src = 'images/th_sample' + current + '_active.jpg'
            thumbnailList[current].attr('src', src)
        }

        // クリック前の画像処理
        function close() {
            $(photoList[current]).stop().fadeOut(duration, easing)

            let src = 'images/th_sample' + current + '.jpg'
            thumbnailList[current].attr('src', src)
        }

        // サムネイル画像による画像切り替え
        function clickThumbnail(index) {
            if (current != index) {
                close()              //現在の画像を非表示
                current = index  //画像インデックス更新
                open()             //最新の画像を表示
            }
        }

        // 初期設定
        function init() {
            target.find('#thumbnailList li').each(function (index) {
                thumbnailList[index] = $(this).find('img')
                $(this).find('a').on('click', function () {
                    clickThumbnail(index)
                })
            })
        }

        init()
        open()
    }

    photoChange($('#photoBox'));
});