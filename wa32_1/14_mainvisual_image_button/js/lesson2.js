$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li');
        let current = 0;
        let prevBtn = $('#prev a');
        let nextBtn = $('#next a');
        let easing = 'swing';
        let duration = 1200;

        // 画像のフェードイン
        function open() {
            prevBtn.off('click');  //連打防止
            nextBtn.off('click');  //連打防止
            $(photoList[current]).stop().fadeIn(duration, easing, checkControl);
        }

        // 画像のフェードアウト
        function close() {
            $(photoList[current]).stop().fadeOut(duration, easing);
        }

        // コントロールボタンによる画像の切り替え
        function clickControl(type) {
        }

        // コントロールボタンの設定
        function checkControl() {
            console.log('checkControl')
            console.log(current)
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
            console.log(btn)
        }

        // コントロールボタンを非表示にする
        function hideControl(btn) {
            console.log(btn)
        }

        open();
    }

    photoChange($('#photoBox'));
});