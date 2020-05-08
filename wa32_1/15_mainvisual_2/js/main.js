$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li');
        let thumbnailList = [];
        let current = 0;

        // 画像のフェードイン
        function open() {
            thumbnailList[current].attr('src', 'images/tn' + current + '_ac.jpg');
            //$(photoList[current]).fadeIn(1000, 'easeInQuad');
            $(photoList[current]).stop().fadeIn(1000, 'easeInQuad');
        }

        // 画像のフェードアウト
        function close() {
            thumbnailList[current].attr('src', 'images/tn' + current + '.jpg');
            //$(photoList[current]).fadeOut(1000, 'easeOutQuad');
            $(photoList[current]).stop().fadeOut(1000, 'easeOutQuad');
        }

        // サムネイル画像による画像切り替え
        function clickThumbnail(num) {
            if (current != num) {
                close();
                current = num;
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

        init();
        open();
    }

    photoChange($('#photoBox'));
});