$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li');
        let current = 0;
        let prevBtn = $('#prev a');
        let nextBtn = $('#next a');
        let easing = 'swing';

        // 画像のフェードイン
        function open() {
            console.log('open');
        }

        // 画像のフェードアウト
        function close() {
        }

        // コントロールボタンによる画像の切り替え
        function clickControl(type) {
        }

        // コントロールボタンの設定
        function checkControl() {
            console.log('checkControl');
        }

        // コントロールボタンを表示する
        function showControl(btn) {
        }

        // コントロールボタンを非表示にする
        function hideControl(btn) {
        }

        checkControl();
        open();
    }

    photoChange($('#photoBox'));
});