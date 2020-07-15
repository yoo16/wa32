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
            // submitイベントの設定
            target.on('submit', function () {
                check();
                return false;
            });

            // enterキーで submit 防止
            target.find('input[type=text]').on('keypress', function (e) {
                if (e.keyCode == 13) return false;
            });

            // チェックするテキストボックスの追加
            items = [
                target.find('input[name=name]'),
                target.find('input[name=furigana]')
            ];

            messages = [
                '名前を入力してください',
                'ふりがなを入力してください',
            ];

            $.each(items, function (index) {
                items[index].prop('isSuccess', false);
            });
        }

        init();
    }

    setMyForm($('#myForm'));
});