//$.support.cors = true;
const prefecturesUrl = 'https://covid19-japan-web-api.now.sh/api/v1/prefectures';
const positivesUrl = 'https://covid19-japan-web-api.now.sh/api/v1/positives';

$(function () {
    let prefectureList = $('#prefectureList');
    let positivesList = $('#positivesList');
    let loadingWindow = $('#loading');
    let currentPrefecture = '';

    /**
     * click search
     */
    $('#search').on('click', function () {
        showLoadingWindow();
        $.getJSON(prefecturesUrl, {}
        ).done(function (data) {
            showJson(data);
            showList(data);
            hideLoadingWindow();
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

        let title = $('<div class="col-12"><h2 class="h2">コロナの都道府県別データ</h2></div>');
        prefectureList.append(title);

        $.each(values, function (key, value) {
            let div = $('<div class="col-4"></div>');

            let prefecture = $('<h2 class="h2"></div>').html(value.name_ja);
            let pcr = $('<div></div>').html('PCR検査数: ' + value.pcr);
            let cases = $('<div></div>').html('発症者数: ' + value.cases);
            let deaths = $('<div></div>').html('死者数: ' + value.deaths);
            let searchBtn = $('<button class="searchPositives btn btn-block btn-outline-primary mt-2">詳細</button>');
            let prefectureValue = prefectures[value.id];
            searchBtn.attr('prefecture', prefectureValue.label);

            div.append(prefecture);
            div.append(pcr);
            div.append(cases);
            div.append(deaths);
            div.append(searchBtn);

            prefectureList.append(div);
        });

        /**
         * click searchPositives
         */
        $('.searchPositives').off('click');
        $('.searchPositives').on('click', function () {
            //console.log($(this).attr('prefecture'));
            showLoadingWindow();
            currentPrefecture = $(this).attr('prefecture');
            $.getJSON(positivesUrl, { prefecture: currentPrefecture }
            ).done(function (data) {
                //console.log(data);
                showPositives(data);
                showJson(data);
                hideLoadingWindow();
            });
        });
    }

    /**
     * show loading
     */
    function showLoadingWindow() {
        console.log('showLoading');
        console.log(loadingWindow);
        loadingWindow.show();
    }

    /**
     * hide loading
     */
    function hideLoadingWindow() {
        loadingWindow.hide();
    }

    /**
     * showPositives
     *  
     * @param array values 
     */
    function showPositives(values) {
        positivesList.html('');
        //console.log(values);
        let title = $('<div class="col-12"></div>');
        let h2 = $('<h2 class="h2"></h2>');
        h2.html(currentPrefecture);
        title.append(h2);
        positivesList.append(title);
        $.each(values, function (key, value) {
            let div = $('<div class="col-4"></div>');
            let residence_prefecture = $('<h2 class="h2"></div>').html(value.residence_prefecture);
            let diagnosis_date = $('<div></div>').html('発症日: ' + value.diagnosis_date);
            let age = $('<div></div>').html('年代: ' + value.age);
            let gender = $('<div></div>').html('性別: ' + value.gender);

            div.append(residence_prefecture);
            div.append(diagnosis_date);
            div.append(age);
            div.append(gender);

            positivesList.append(div);
        });

        let closeBtn = $('<button id="closePositives" class="btn btn-block btn-outline-primary mt-2">戻る</button>');
        $(closeBtn).off('click');
        $(closeBtn).on('click', function () {
            // positivesList.hide();
            // prefectureList.show();
            scrollTo(prefectureList);
        });

        positivesList.append(closeBtn);
        // positivesList.show();
        // prefectureList.hide();
        scrollTo(positivesList);
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

    function scrollTo(target) {
        var time = 400;
        var offsetY = -50;

        $('html, body').animate({
            scrollTop: $(target).offset().top + offsetY
        }, {
            duration: time,
            easing: 'easeOutExpo'
        });
        return false;
    }

    loadPrefecture()
    //positivesList.hide();

});