//$.support.cors = true;
const totalUrl = 'https://covid19-japan-web-api.now.sh/api/v1/total';
const prefecturesUrl = 'https://covid19-japan-web-api.now.sh/api/v1/prefectures';
const positivesUrl = 'https://covid19-japan-web-api.now.sh/api/v1/positives';

$(function () {
    let totalList = $('#totalList');
    let prefectureList = $('#prefectureList');
    let positivesList = $('#positivesList');
    let currentPrefecture = '';
    let positives = null;
    const positivesByCount = 10;
    let positivesCount = 0;
    let positivesFrom = 0;
    let positivesTo = positivesByCount;
    let columns = {
        total: {
            date: {label: '日付'},
            pcr: {label: 'PCR検査数'},
            hospitalize: {label: '入院患者数'},
            positive: {label: '陽性者数'},
            death: {label: '死亡者数'},
        },
        prefecture: {
            name_ja: {label: '都道府県'},
            pcr: {label: 'PCR検査数'},
            cases: {label: '発症者数'},
            deaths: {label: '死者数'},
        },
        positives: {
            residence_prefecture: {label: '市区町村'},
            diagnosis_date: {label: '発症日'},
            age: {label: '年代'},
            gender: {label: '性別'},
        }
    }

    $('#search').on('click', function () {
        $.when(
            $.getJSON(totalUrl),
            $.getJSON(prefecturesUrl),
        ).done(function(totalResponse, prefectureResponse) {
            showTotal(totalResponse[0]);
            showList(prefectureResponse[0]);
            addEventPositives();
        }).fail(function() {
            console.log('error');
        });
    });

    let addEventPositives = function() {
        $('.searchPositives').off('click');
        $('.searchPositives').on('click', function () {
            currentPrefecture = $(this).attr('prefecture');
            $.when(
                $.getJSON(positivesUrl, { prefecture: currentPrefecture}),
            ).done(function(response) {
                positivesCount = 0;
                positivesFrom = 0;
                positivesTo = positivesByCount;
                positives = response;
                positivesCount = positives.length;
                showPositives(positives);
            }).fail(function() {
                console.log('error');
            });
        });
    }

    function scrollTo(target) {
        var time = 400;
        var offsetY = -50;

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top + offsetY
        }, {
            duration: time,
            easing: 'easeOutExpo'
        });
        return false;
    }

    function showTotal(values) {
        totalList.html('');

        //table
        let table = $('<table>').addClass('table');
        let tr = $('<tr>');

        //header
        $.each(columns.total, function(key, column) {
            tr.append($('<th>').html(column.label));
        })
        table.append(tr);

        //body
        tr = $('<tr>');
        $.each(columns.total, function(key, column) {
            tr.append($('<td>').html(values[key]));
        })
        table.append(tr);
        totalList.append(table);
    }

    function showList(values) {
        prefectureList.html('');

        let searchBtn = function(value) {
            let btn = $('<button>');
            btn.addClass(['searchPositives', 'btn', 'btn-outline-primary']);
            btn.text('詳細');
            btn.attr('prefecture', prefectures[value.id].label);
            return btn;
        }

        //table
        let table = $('<table>').addClass('table');
        let tr = $('<tr>');

        //header
        $.each(columns.prefecture, function (key, column) {
            tr.append($('<th>').html(column.label));
        });
        tr.append($('<th>'));
        table.append(tr);

        //body
        $.each(values, function (index, value) {
            tr = $('<tr>');
            $.each(columns.prefecture, function(key, column) {
                tr.append($('<td>').html(value[key]));
            });
            let td = $('<td>');
            td.append(searchBtn(value));
            tr.append(td);
            table.append(tr);
        });

        prefectureList.append(table);
    }

    /**
     * showPositives
     *  
     * @param array values 
     */
    function showPositives(values) {
        positivesList.html('');

        let table = $('<table>').addClass('table');
        let tr = $('<tr>');

        //header
        $.each(columns.positives, function(index, column) {
            tr.append($('<th>').html(column.label));
        });
        table.append(tr);

        //body
        $.each(values, function (key, value) {
            if (key >= positivesFrom && key <= positivesTo) {
                tr = $('<tr>');
                $.each(columns.positives, function(key, column) {
                    tr.append($('<td>').html(value[key]));
                });
                table.append(tr);
            }
        });

        let addPositivesNavigation = function() {
            let nextButton = $('<buttton>');
            nextButton.addClass(['btn', 'btn-outline-primary']);
            nextButton.text('Next').attr('id', 'nextPositives');

            let prevButton = $('<buttton>');
            prevButton.addClass(['btn', 'btn-outline-primary']);
            prevButton.text('Prev').attr('id', 'prevPositives');

            positivesList.append(prevButton);
            positivesList.append(nextButton);

            let count = $('<span>').text(positivesCount + '件');
            positivesList.append(count);

            $('#nextPositives').off('click');
            $('#nextPositives').on('click', function() {
                console.log('next');
                if (positivesFrom + positivesByCount < positivesCount) {
                    positivesFrom+= positivesByCount;
                    positivesTo+= positivesByCount;
                    showPositives(positives);
                }
            })
            $('#prevPositives').off('click');
            $('#prevPositives').on('click', function() {
                console.log('prev');
                positivesFrom-= positivesByCount;
                positivesTo-= positivesByCount;
                if (positivesFrom < 0) {
                    positivesFrom = 0;
                    positivesTo = positivesByCount;
                } else {
                    showPositives(positives);
                }
            })
        }

        positivesList.append($('<h2>').addClass('h2').html(currentPrefecture));

        addPositivesNavigation();
        positivesList.append(table);
        scrollTo(positivesList);
    }

});