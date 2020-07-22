$(function () {

    function setMyForm(target) {

        // チェックするテキストボックスの追加
        let items = [
            $('input[name=name]'),
            $('input[name=furigana]'),
        ];
        let messages = [
            '名前を入力してください',
            'ふりがなを入力してください',
        ];

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
                if (e.keyCode == 13) {
                    return false;
                }
            });

            $.each(items, function (index) {
                items[index].prop('isSuccess', false);
            });
            console.log(items);
        }

        init();
    }

    setMyForm($('#myForm'));
});