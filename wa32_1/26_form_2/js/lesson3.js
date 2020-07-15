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