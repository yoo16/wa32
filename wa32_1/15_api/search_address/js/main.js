/*
 * main.js
 */

var address = {}
const api_url = 'https://zipcloud.ibsnet.co.jp/api/search?callback=?'

$(function () {
    /**
     * click clear
     */
    $('#clear').on('click', function () {
        $('.address').val('');
    });

    /**
     * click search
     */
    $('#search').on('click', function () {
        $.getJSON(api_url, { 
            zipcode: $('#zip').val()
        }
        ).done(function (data) {
            //console.log(data)
            if (data.results) {
                var result = data.results[0];
                $('#prefecture').val(result.prefcode)
                $('#city').val(result.address2)
                $('#town').val(result.address3)
            } else {
                alert('郵便番号が正しくありません')
            }
        });
    });

    /**
     * regist
     */
    $('#regist').on('click', function () {
        address.zip = $('#zip').val()
        address.prefcode = $('#prefecture').val()
        address.city = $('#city').val()
        address.town = $('#town').val()
        address.building = $('#building').val()
        console.log(address)

        let json = JSON.stringify(address)

        //TODO Ajax Post
        post(json);
    });

    /**
     * loadPrefecture
     */
    function loadPrefecture() {
        $.each(prefectures, function (key, value) {
            option = $('<option>').val(value.code).text(value.label)
            $('#prefecture').append(option)
        });
    }

    /**
     * post json
     */
    function post(json) {
        //TODO post JSON
        $('#postJson').val(json)
    }
    loadPrefecture()
});