$(function () {

    function setMyForm(target) {

        let items = []; // チェック対象となるテキスト入力要素

        // チェック
        let check = function () {
            checkEmptyText(items[0], '名前を入力してください');
        }

        // エラーメッセージを表示
        let addErrorMessage = function (selector, msg) {
            removeErrorMessage(selector);
            selector.before('<span class="errorMsg">' + msg + '</span>');
            selector.addClass('errorInput')
        }

        // エラーメッセージを非表示
        let removeErrorMessage = function (selector) {
            let msgSelector = selector.parent().find('.errorMsg');
            if (msgSelector.length != 0) {
                msgSelector.remove();
                selector.removeClass('errorInput');
            }
        }

        // 未入力チェック
        let checkEmptyText = function (selector, msg) {
            if (selector.val() == '') {
                // エラーメッセージを表示
                addErrorMessage(selector, msg);
                selector.prop('isSuccess', false);
            } else {
                // エラーメッセージを非表示
                removeErrorMessage(selector);
                selector.prop('isSuccess', true);
            }
        }

        // 初期設定
        let init = function () {
            // submitイベントの設定
            target.on({
                'submit': function () {
                    check(); // チェック
                    return false;
                }
            });

            items = [
                target.find('input[name=forName]'),
            ];

            $.each(items, function (index) {
                items[index].prop('isSuccess', false);
            });

            // enterキーでsubmitするのを防止
            target.find('input[type=text]').on({
                'keypress': function (e) {
                    if (e.keyCode == 13) return false;
                }
            });
        }

        init();
    }

    setMyForm($('#myForm'));
});