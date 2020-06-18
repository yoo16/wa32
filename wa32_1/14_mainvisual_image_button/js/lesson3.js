$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li');
        let current = 0;
        let prevBtn = $('#prev a');
        let nextBtn = $('#next a');
        let easing = 'swing';

        // 画像のフェードイン
        function open() {
            prevBtn.off();
            nextBtn.off();
            $(photoList[current]).stop().fadeIn(1200, easing, checkControl);
        }

        // 画像のフェードアウト
        function close() {
            $(photoList[current]).stop().fadeOut(1200, easing);
        }

        // コントロールボタンによる画像の切り替え
        function clickControl(type) {
            close();
            switch (type) {
                case 'prev':
                    current--;
                    break;
                case 'next':
                    current++;
                    break;
            }
            open();
        }

        // コントロールボタンの設定
        function checkControl() {
            switch (current) {
                case 0:
                    hideControl(prevBtn);
                    showControl(nextBtn);
                    break;
                case photoList.length - 1:
                    showControl(prevBtn);
                    hideControl(nextBtn);
                    break;
                default:
                    showControl(prevBtn);
                    showControl(nextBtn);
                    break;
            }
        }

        // コントロールボタンを表示する
        function showControl(btn) {
            btn.show();
            btn.off('click').on('click', function () {
                clickControl($(this).parent().attr('id'));
            });
        }

        // コントロールボタンを非表示にする
        function hideControl(btn) {
            btn.hide();
            btn.off('click');
        }

        checkControl();
        open();
    }

    photoChange($('#photoBox'));
});