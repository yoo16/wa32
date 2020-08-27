$(function () {
    function loadPrefecture() {
        $.each(prefectures, function (key, value) {
            option = $('<option>').val(value.code).text(value.label)
            $('#prefecture').append(option)
        });
    }
    loadPrefecture()
});