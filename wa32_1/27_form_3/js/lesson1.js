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

        let patterns = [
            {
                label: '全角のみ',
                pattern: /^[^\x01-\x7E]+$/,
                message: '全角で入力してください',
            },
            {
                label: 'ふりがなのみ',
                pattern: /^[\u3040-\u309F]+$/,
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

        // チェック
        let check = function () {
            $.each(items, function(index, item) {
                checkEmptyText(index);
            })
            checkFormatText(0);
            checkFormatText(1);
            checkFormatText(2);
            checkFormatText(3);
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

            $.each(items, function (index) {
                items[index].prop('isSuccess', false);

                // (1) init の each の中に blur のイベント登録処理を追加
                items[index].on({
                    'blur': function () {
                        checkEmptyText(index);
                        if (patterns[index]) {
                            checkFormatText(index);
                        }
                    },
                });
            });
        }

        init();
    }

    setMyForm($('#myForm'));
});