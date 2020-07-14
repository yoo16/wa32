$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li')
        let thumbnailList = []
        let currentIndex = 0
        let easing = 'swing'
        let duration = 1200

        console.log(photoList[0]);
        // 初期設定
        function init() {
            target.find('#thumbnailList li').each(function (index) {
                console.log($(this).find('img').attr('src'));
                thumbnailList[index] = $(this).find('img')
            })
        }

        // クリック画像処理
        function open() {
            console.log(thumbnailList[currentIndex]);
            thumbnailList[currentIndex].addClass('active');
            $(photoList[currentIndex]).stop().fadeIn(duration, easing)
        }

        // クリック前の画像処理
        function close() {
            thumbnailList[currentIndex].removeClass('active');
            $(photoList[currentIndex]).stop().fadeOut(duration, easing)
        }

        // サムネイル画像による画像切り替え
        function clickThumbnail(index) {
            if (currentIndex != index) {
                close()              //現在の画像を非表示
                currentIndex = index  //画像インデックス更新
                open()             //最新の画像を表示
            }
        }

        // クリックイベント
        $('.thumbnail').on('click', function () {
            clickThumbnail($('.thumbnail').index(this))
        })

        init()
        open()
    }

    photoChange($('#photoBox'));
});