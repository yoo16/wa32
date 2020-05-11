$(function () {
    //const halfWidthPattern = /[\x01-\x7E]+$/;
    const halfWidthPattern = /[\x01-\x7E]/;
    const notHalfWidthPattern = /[^\x01-\x7E]/;
    const halfWidthRepeatPattern = /^[\x01-\x7E]+$/;
    const notHalfWidthRepeatPattern = /^[^\x01-\x7E]+$/;

    let patterns = [];
    patterns = [
        {key: 'halfWidth', pattern: halfWidthPattern},
        {key: 'notHalfWidth', pattern: notHalfWidthPattern},
        {key: 'halfWidthRepeat', pattern: halfWidthRepeatPattern},
        {key: 'notHalfWidthRepeat', pattern: notHalfWidthRepeatPattern},
    ];

    /**
     * init
     */
    function init() {
        $.each(patterns, function(key, value) {
            let patternId = '#' + value.key + 'Pattern';
            $(patternId).html(value.pattern);
        });
    }

    /**
     * @param string value 
     * @param string pattern 
     * @param string resultId 
     * @return object
     */
    function check(pattern) {
        let result = $('#' + pattern.key + 'Result');
        let input = $('input[name=' + pattern.key + ']');

        let value = input.val();
        let match = value.match(pattern.pattern);

        console.log(match);
        if (match) {
            result.html(match);
        } else {
            result.html('<span class="text-danger">一致しません</span>');
        }
        return match;
    }

    /**
     * crear result
     */
    function clearResult() {
        $('.result').html('');
    }

    $('#checkCharacter').on('click', function() {
        clearResult();
        $.each(patterns, function(key, pattern) {
            check(pattern);
        });
    });

    init();

});