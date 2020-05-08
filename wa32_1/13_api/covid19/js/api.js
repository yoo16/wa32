//$.support.cors = true;
const prefecturesUrl = 'https://covid19-japan-web-api.now.sh/api/v1/prefectures';
const positivesUrl = 'https://covid19-japan-web-api.now.sh/api/v1/positives';

let prefectureList = $('#prefectureList');
let positivesList = $('#positivesList');
let currentPrefecture = '';

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
        $.getJSON(prefecturesUrl, {}
        ).done(function (data) {
            showJson(data);
            showList(data);
        });
    });

    /**
     * show JSON
     * 
     * @param string
     */
    function showJson(data) {
        let json = JSON.stringify(data);
        $('#resultJson').html(json);
    }

    /**
     * show prefecture list
     *  
     * @param array values 
     */
    function showList(values) {
        prefectureList.html('');
        //console.log(values);
        $.each(values, function(key, value){
            let div = $('<div class="col-4"></div>');
            let card = $('<div class=""></div>');
            let cardHeader = $('<div class=""></div>');
            let cardBody = $('<div class=""></div>');

            let prefecture = $('<h2 class="h2"></div>');
            prefecture.html(value.name_ja);
            cardHeader.append(prefecture);

            let pcr = $('<div></div>').html('PCR検査数: ' + value.pcr);
            let cases = $('<div></div>').html('発症者数: ' + value.cases);
            let deaths = $('<div></div>').html('死者数: ' + value.deaths);
            let searchBtn = $('<button class="searchPositives btn btn-block btn-outline-primary mt-2">検索</button>');
            let prefectureValue = prefectures[value.id];
            searchBtn.attr('prefecture', prefectureValue.label);

            cardBody.append(pcr);
            cardBody.append(cases);
            cardBody.append(deaths);
            cardBody.append(searchBtn);

            card.append(cardHeader);
            card.append(cardBody);
            div.append(card);
            prefectureList.append(div);
        });

        /**
         * click searchPositives
         */
        $('.searchPositives').off('click');
        $('.searchPositives').on('click', function () {
            //console.log($(this).attr('prefecture'));
            currentPrefecture = $(this).attr('prefecture');
            $.getJSON(positivesUrl, { prefecture: currentPrefecture }
            ).done(function (data) {
                //console.log(data);
                showPositives(data);
                showJson(data);
            });
        });
    }

    /**
     * showPositives
     *  
     * @param array values 
     */
    function showPositives(values) {
        positivesList.html('');
        //console.log(values);
        $.each(values, function(key, value){
            let div = $('<div class="col-4"></div>');
            let card = $('<div class=""></div>');
            let cardHeader = $('<div class=""></div>');
            let cardBody = $('<div class=""></div>');

            let prefecture = $('<h2 class="h2"></div>');
            prefecture.html(value.name_ja);
            cardHeader.append(prefecture);

            let diagnosis_date = $('<div></div>').html('発症日: ' + value.diagnosis_date);
            let age = $('<div></div>').html('年代: ' + value.age);
            let gender = $('<div></div>').html('性別: ' + value.gender);
            let residence_prefecture = $('<div></div>').html('市区町村: ' + value.residence_prefecture);

            cardBody.append(diagnosis_date);
            cardBody.append(age);
            cardBody.append(gender);
            cardBody.append(residence_prefecture);

            card.append(cardHeader);
            card.append(cardBody);
            div.append(card);
            positivesList.append(div);
        });

        let closeBtn = $('<button id="closePositives" class="btn btn-block btn-outline-primary mt-2">閉じる</button>');
        $(closeBtn).off('click');
        $(closeBtn).on('click', function () {
            positivesList.hide();
            prefectureList.show();
        });

        positivesList.append(closeBtn);
        positivesList.show();
        prefectureList.hide();
    }

    /**
     * loadPrefecture
     */
    function loadPrefecture() {
        $.each(prefectures, function (key, value) {
            option = $('<option>').val(value.code).text(value.label)
            $('#prefecture').append(option)
        });
    }

    loadPrefecture()
    positivesList.hide();
});