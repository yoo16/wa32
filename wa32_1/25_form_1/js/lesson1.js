$(function () {

    function setMyForm(target) {

        let items = []; // チェック対象となるテキスト入力要素
        let messages = [];

        // チェック
        let check = function () {
        }

        // 未入力チェック
        let checkEmptyText = function (index) {
        }

        // エラーメッセージを表示
        let addErrorMessage = function (selector, message) {
        }

        // エラーメッセージを非表示
        let removeErrorMessage = function (selector) {
        }

        // 初期設定
        let init = function () {
            console.log('init');
        }

        init();
    }

    setMyForm($('#myForm'));
});