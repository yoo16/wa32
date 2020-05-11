$(function () {
    //const halfWidthPattern = /[\x01-\x7E]+$/;
    const halfWidthPattern = /[\x01-\x7E]/;
    const notHalfWidthPattern = /[^\x01-\x7E]/;
    const halfWidthRepeatPattern = /[\x01-\x7E]+$/;
    const notHalfWidthRepeatPattern = /[^\x01-\x7E]+$/;

    function check(value, pattern, resultId) {
        let result = value.match(pattern);
        console.log(result);
        $(resultId).html(result);
        return result;
    }

    function clearResult() {
        $('.result').html('');
    }

    $('#checkCharacter').on('click', function() {
        clearResult();
        check($('input[name=halfWidth]').val(), halfWidthPattern, '#halfWidthResult');
        check($('input[name=notHalfWidth]').val(), notHalfWidthPattern, '#notHalfWidthResult');
        check($('input[name=halfWidthRepeat]').val(), halfWidthRepeatPattern, '#halfWidthRepeatResult');
        check($('input[name=notHalfWidthRepeat]').val(), notHalfWidthRepeatPattern, '#notHalfWidthRepeatResult');
    });

});