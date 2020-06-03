$(function () {

    $('#message').on('change', function () {
        let text = $(this).val();
        $('#result_message').html(text);
    })

    $('#type_text').on('input', function() {
        let text = $(this).val();
        $('#result_type_text').html(text);
    })

});