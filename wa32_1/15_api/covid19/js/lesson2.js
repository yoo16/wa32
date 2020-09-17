const totalUrl = 'https://covid19-japan-web-api.now.sh/api/v1/total';

$(function () {
    //追加
    let totalList = $('#totalList');
    let columns = {
        total: {
            date: {label: '日付'},
            pcr: {label: '累積PCR検査数'},
            positive: {label: '累積PCR検査陽性者数'},
            hospitalize: {label: '現在入院患者数'},
            death: {label: '死亡者数'},
        },
    }

    //修正
    $('#search').on('click', function () {
        $.when(
            $.getJSON(totalUrl),
        ).then(function(totalResponse) {
                showTotal(totalResponse);
            },
            function() {
                console.log('error');
            }
        );
    });

    //追加
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

});