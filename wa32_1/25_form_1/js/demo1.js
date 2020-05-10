$(function () {

    function setMyForm(target) {

        let items = []; // チェック対象となるテキスト入力要素

        // チェック
        let check = function () {
            console.log('check');
        }

        // エラーメッセージを表示
        let addErrorMessage = function (selector, msg) {
        }

        // エラーメッセージを非表示
        let removeErrorMessage = function (selector) {
        }

        // 未入力チェック
        let checkEmptyText = function (selector, msg) {
        }

        // 初期設定
        let init = function () {
        }

        init();
    }

    setMyForm($('#myForm'));
});