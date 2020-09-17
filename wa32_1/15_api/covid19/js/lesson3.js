const totalUrl = 'https://covid19-japan-web-api.now.sh/api/v1/total';
const prefecturesUrl = 'https://covid19-japan-web-api.now.sh/api/v1/prefectures';

$(function () {
    let totalList = $('#totalList');
    let prefectureList = $('#prefectureList');

    let columns = {
        total: {
            date: {label: '日付'},
            pcr: {label: '累積PCR検査数'},
            positive: {label: '累積PCR検査陽性者数'},
            hospitalize: {label: '現在入院患者数'},
            death: {label: '死亡者数'},
        },
        //追加
        prefecture: {
            name_ja: {label: '都道府県'},
            pcr: {label: 'PCR検査数'},
            cases: {label: '発症者数'},
            deaths: {label: '死者数'},
        },
    }

    //修正
    $('#search').on('click', function () {
        $.when(
            $.getJSON(totalUrl),
            $.getJSON(prefecturesUrl),
        ).then(function(totalResponse, prefectureResponse) {
                //修正
                showTotal(totalResponse[0]);
                showList(prefectureResponse[0]);
            },
            function() {
                console.log('error');
            }
        );
    });

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

    //追加
    function showList(values) {
        prefectureList.html('');

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
            table.append(tr);
        });
        prefectureList.append(table);
    }

});