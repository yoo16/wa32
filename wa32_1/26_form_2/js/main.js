$(function () {

    function setMyForm(target) {

        let items = []; // チェック対象となるテキスト入力要素

        // チェック
        let check = function () {
            // 名前のチェック
            checkEmptyText(items[0], '名前を入力してください');
            if (items[0].prop('isSuccess'))
                checkFormatText(items[0], 0, '入力フォーマットが正しくありません');
            // ふりがなのチェック
            checkEmptyText(items[1], 'ふりがなを入力してください');
            if (items[1].prop('isSuccess'))
                checkFormatText(items[1], 1, '入力フォーマットが正しくありません');
        }

        // エラーメッセージを表示
        let addErrorMessage = function (selector, msg) {
            removeErrorMessage(selector);
            selector.before('<span class="errorMsg">' + msg + '</span>');
            selector.addClass('errorInput');
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

        // 文字列のフォーマットチェック
        function checkFormatText(selector, checkmode, msg) {
            let value = selector.val();
            switch (checkmode) {
                // 全角のみ
                case 0:
                    if (value.match(/^[^\x01-\x7E]+$/)) {
                        selector.prop('isSuccess', true);
                        removeErrorMessage(selector);
                    } else {
                        selector.prop('isSuccess', false);
                        addErrorMessage(selector, msg);
                    }
                    break;
                // ひらがなのみ
                case 1:
                    if (value.match(/^[\u3040-\u309F]+$/)) {
                        selector.prop('isSuccess', true);
                        removeErrorMessage(selector);
                    } else {
                        selector.prop('isSuccess', false);
                        addErrorMessage(selector, msg);
                    }
                    break;
            }
        }

        // 初期設定
        let init = function () {
            // submitイベントの設定
            target.on({
                'submit': function () {
                    // チェック
                    check();
                    return false;
                }
            });

            items = [
                target.find('input[name=forName]'),
                target.find('input[name=forFurigana]')
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