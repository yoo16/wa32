$(function () {

    function setMyForm(target) {

        let items = []; // チェック対象となるテキスト入力要素

        // チェック
        let check = function () {
            checkEmptyText(items[0], '名前を入力してください');
        }

        // エラーメッセージを表示
        let addErrorMessage = function (selector, msg) {
            alert('addErrorMessage');
            alert(selector.val());
            alert(msg);
        }

        // エラーメッセージを非表示
        let removeErrorMessage = function (selector) {
            alert('removeErrorMessage');
            alert(selector.val());
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