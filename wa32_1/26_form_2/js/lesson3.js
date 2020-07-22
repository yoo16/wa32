$(function () {
    let result = $('#result');
    let reg = $('#reg');
    let input = $('input[name=character]');
    let selectReg = $('#selectReg');
    let patterns = [
        { label: '半角', pattern: /[\x01-\x7E]/ },
        { label: '全角', pattern: /[^\x01-\x7E]/ },
        { label: '半角のみ', pattern: /^[\x01-\x7E]+$/ },
        { label: '全角のみ', pattern: /^[^\x01-\x7E]+$/ },
        { label: '数字のみ1', pattern: /^[0-9]+$/ },
        { label: '数字のみ2', pattern: /^[\d]+$/ },
        { label: '半角英数 _ のみ', pattern: /^[\w]+$/ },
        { label: '日付', pattern: /^\d{4}[-\/]\d\d[-\/]\d\d$/ },
        { label: 'ドメイン', pattern: /^(?!\-)[\-0-9A-Za-z]{1,63}(?<!\-)(?:\.(?!\-)[\-0-9A-Za-z]{1,63}(?<!\-))*$/},
        { label: 'メールアドレス', pattern: /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ },
    ];

    /**
     * init
     */
    function init() {
        $.each(patterns, function (index, value) {
            selectReg.append($('<option>').html(value.label).val(index));
        });
    }

    /**
     * check
     */
    function check(params) {
        //正規表現チェック
        let match = input.val().match(params.pattern);

        reg.html(params.pattern);
        if (match) {
            result.html(match);
        } else {
            result.html($('<span>').html('一致しません'));
        }
        return match;
    }

    /**
     * crear result
     */
    function clearResult() {
        $('#result').html('');
    }

    /**
     * on click
     */
    $('#checkBtn').on('click', function () {
        clearResult();
        let index = selectReg.val();
        check(patterns[index]);
    });

    init();

});