$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li')
        let thumbnailList = []
        let current = 0
        let easing = 'swing'

        // クリック画像処理
        function open() {
            console.log('open')
        }

        // クリック前の画像処理
        function close() {
            console.log('close')
        }

        // サムネイル画像による画像切り替え
        function clickThumbnail(index) {
            console.log(index)
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