const api_url = 'https://zipcloud.ibsnet.co.jp/api/search?callback=?'

$(function () {
    $('#clear').on('click', function () {
        $('.address').val('');
    });

    $('#search').on('click', function () {
        $.getJSON(api_url, { 
            zipcode: $('#zip').val()
        }).done(function (data) {
            //console.log(data)
            if (data.results) {
                let result = data.results[0];
                $('#prefecture').val(result.prefcode)
                $('#city').val(result.address2)
                $('#town').val(result.address3)
            } else {
                alert('郵便番号が正しくありません')
            }
        });
    });

    function loadPrefecture() {
        $.each(prefectures, function (key, value) {
            option = $('<option>').val(value.code).text(value.label)
            $('#prefecture').append(option)
        });
    }

    loadPrefecture()
});