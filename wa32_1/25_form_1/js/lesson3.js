$(function () {

    function setMyForm(target) {

        let items = []; // チェック対象となるテキスト入力要素
        let messages = [];

        // チェック
        let check = function () {
            // 名前のチェック
            checkEmptyText(0);
            // ふりがなのチェック
            checkEmptyText(1);
        }

        // 未入力チェック
        let checkEmptyText = function (index) {
            let selector = items[index];
            let message = messages[index];
            if (selector.val() == '') {
                // エラーメッセージを表示
                addErrorMessage(selector, message);
                selector.prop('isSuccess', false);
            } else {
                // エラーメッセージを非表示
                removeErrorMessage(selector);
                selector.prop('isSuccess', true);
            }
        }

        // エラーメッセージを表示
        let addErrorMessage = function (selector, message) {
            removeErrorMessage(selector);
            let span = $('<span>').addClass('error').html(message);
            selector.before(span);
            selector.addClass('errorInput');
        }

        // エラーメッセージを非表示
        let removeErrorMessage = function (selector) {
            let msgSelector = selector.parent().find('.error');
            if (msgSelector.length != 0) {
                msgSelector.remove();
                selector.removeClass('errorInput');
            }
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

            $.each(items, function (index) {
                items[index].prop('isSuccess', false);
            });
        }

        init();
    }

    setMyForm($('#myForm'));
});