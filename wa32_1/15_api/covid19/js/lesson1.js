const totalUrl = 'https://covid19-japan-web-api.now.sh/api/v1/total';

$(function () {
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

    $('#search').on('click', function () {
        $.when(
            $.getJSON(totalUrl),
        ).done(function(response) {
            showTotal(response);
        }).fail(function() {
            console.log('error');
        });
        // $.when(
        //     $.getJSON(totalUrl),
        // ).then(
        //     function(response) {
        //         showTotal(response);
        //     },
        //     function(response) {
        //         console.log('error');
        // });
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

});