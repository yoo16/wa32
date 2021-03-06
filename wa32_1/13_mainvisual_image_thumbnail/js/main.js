$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li')
        let thumbnailList = []
        let current = 0
        let easing = 'swing'

        // クリック画像処理
        function open() {
            $(photoList[current]).stop().fadeIn(1000, easing)

            let src = 'images/th_sample' + current + '_active.jpg'
            thumbnailList[current].attr('src', src)
        }

        // クリック前の画像処理
        function close() {
            $(photoList[current]).stop().fadeOut(1000, easing);

            let src = 'images/th_sample' + current + '.jpg'
            thumbnailList[current].attr('src', src);
        }

        // サムネイル画像による画像切り替え
        function clickThumbnail(index) {
            if (current != index) {
                close();
                current = index;
                open();
            }
        }

        // 初期設定
        function init() {
            target.find('#thumbnailList li').each(function (index) {
                thumbnailList[index] = $(this).find('img');
                $(this).find('a').on('click', function () {
                    clickThumbnail(index);
                });
            });
        }

        // function init() {
        //     target.find('#thumbnailList li').each(function (index) {
        //         thumbnailList[index] = $(this).find('img');
        //     });
        // }

        // $('.thumbnail').on('click', function () {
        //     clickThumbnail($('.thumbnail').index(this));
        // });

        init();
        open();
    }

    photoChange($('#photoBox'));
});