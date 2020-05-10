$(function () {

    function setMyForm(target) {

        let items = []; // チェック対象となるテキスト入力要素

        // チェック
        let check = function () {
            // エラーカウント
            let errorCount = 0;
            for (let i = 0; i < items.length; i++) {
                if (items[i].prop('isSuccess') == false) {
                    errorCount++;
                }
            }
            // submitの制御
            if (errorCount > 0) {
                target.find('input[type=submit]').attr('disabled', true);
            } else {
                target.find('input[type=submit]').attr('disabled', false);
            }
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

        // Cookieの設定
        function setCookie() {
            Cookies.set('name', items[0].val(), { expires: 7 });
        }

        function setCookie_JSON() {
            let obj = {
                'name': items[0].val(),
                'furigana': items[1].val()
            }
            Cookies.set('myForm', obj, { expires: 7 });
        }

        // Cookieを取得する
        function getCookie() {
            items[0].val(Cookies.get('name'));
            items[0].prop('isSuccess', true);
        }

        function getCookie_JSON() {
            let obj = Cookies.getJSON('myForm');
            if (obj) {
                items[0].val(obj.name);
                items[0].prop('isSuccess', true);
                items[1].val(obj.furigana);
                items[1].prop('isSuccess', true);
            }
        }

        // 初期設定
        let init = function () {
            // submitを無効にする
            target.find('input[type=submit]').attr('disabled', true);
            // submitイベントの設定
            target.on({
                'submit': function () {
                    // チェック
                    check();
                    setCookie_JSON();
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

            // 名前のセレクタにblurイベントを設定
            items[0].on({
                'blur': function () {
                    checkEmptyText(items[0], '名前を入力してください');
                    if (items[0].prop('isSuccess'))
                        checkFormatText(items[0], 0, '入力フォーマットが正しくありません');

                    check();
                }
            });

            // ふりがなのセレクタにblurイベントを設定
            items[1].on({
                'blur': function () {
                    checkEmptyText(items[1], 'ふりがなを入力してください');
                    if (items[1].prop('isSuccess'))
                        checkFormatText(items[1], 1, '入力フォーマットが正しくありません');

                    check();
                }
            });

            // Cookieを取得する
            getCookie_JSON();
            check();
        }

        init();
    }

    setMyForm($('#myForm'));
});