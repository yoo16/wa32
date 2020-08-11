$(function () {

    function setMyForm(target) {

        // チェックするテキストボックスの追加
        let items = [
            $('input[name=name]'),
            $('input[name=furigana]'),
            // $('input[name=tel]'),
            // $('input[name=mail]'),
            // $('textarea[name=body]'),
        ];
        let messages = [
            '名前を入力してください',
            'ふりがなを入力してください',
            // '電話番号を入力してください',
            // 'メールアドレスを入力してください',
            // 'お問い合わせ内容を入力してください'
        ];

        let cookieExpires = 7;

        let patterns = [
            {
                label: '全角のみ',
                pattern: /^[^\x01-\x7E{blank}]+$/,
                message: '全角で入力してください',
            },
            {
                label: 'ふりがなのみ',
                pattern: /^[\u3040-\u309F|　]+$/,
                message: 'ひらがなで入力してください',
            },
            // {
            //     label: '電話番号',
            //     pattern: /^\d*$/,
            //     // pattern: /^0\d{9,10}$/,
            //     // pattern: /^0\d{2,4}-\d{1,4}-\d{4}$/,
            //     message: '電話番号が正しくありません',
            // },
            // {
            //     label: 'メールアドレス',
            //     pattern: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/,
            //     // pattern: /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            //     message: 'メールアドレスが正しくありません',
            // },
        ];

        // 入力チェック
        let check = function () {
            let errorCount = 0;
            $.each(items, function (index, item) {
                if (item.prop('isSuccess') == false) errorCount++;
            });
            target.find('input[type=submit]').attr('disabled', (errorCount > 0));
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

        //文字列フォーマットチェック
        function checkFormatText(index) {
            let selector = items[index];  //input, textarea
            if (!selector.prop('isSuccess')) return;  //既にエラーの場合リターン

            let pattern = patterns[index].pattern;
            let message = patterns[index].message;
            let match = selector.val().match(pattern);  //正規表現チェック
            if (match) {
                selector.prop('isSuccess', true);
                removeErrorMessage(selector);
            } else {
                selector.prop('isSuccess', false);
                addErrorMessage(selector, message);
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

        // Cookieの設定
        function setCookie() {
            $.cookie('isSaveCookie', true, { expires: cookieExpires });
            $.cookie('name', items[0].val(), { expires: cookieExpires });
            $.cookie('furigana', items[1].val(), { expires: cookieExpires });
        }

        // Cookieを取得する
        function getCookie() {
            // Cookie全取得
            let cookie = $.cookie();
            if (cookie.isSaveCookie) {
                $('#isSaveCookie').prop('checked', cookie.isSaveCookie);

                $.each(items, function (index, item) {
                    let name = item.attr('name');
                    if (cookie[name]) {
                        items[index].val(cookie[name]);
                        items[index].prop('isSuccess', true);
                        checkFormatText(index);
                    }
                });
                check();
            }
        }

        // Cookie を削除する
        function removeCookie() {
            $.removeCookie('isSaveCookie');
            $.removeCookie('name');
            $.removeCookie('furigana');
        }

        // 初期設定
        let init = function () {
            // submit を無効にする
            target.find('input[type=submit]').attr('disabled', true);

            // submitイベントの設定
            target.on('submit', function () {
                if ($('#isSaveCookie').prop('checked')) {
                    setCookie();
                } else {
                    removeCookie();
                }
                check();
                return false;
            });

            // enterキーで submit 防止
            target.find('input[type=text]').on('keypress', function (e) {
                if (e.keyCode == 13) return false;
            });

            $.each(items, function (index, item) {
                item.prop('isSuccess', false);
                item.on({
                    'blur': function () {
                        checkEmptyText(index);
                        if (patterns[index]) {
                            checkFormatText(index);
                        }
                        check();
                    },
                });
            });
        }

        init();

        // セッションを取得
        getCookie();
    }

    setMyForm($('#myForm'));
});