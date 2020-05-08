$(function () {

    $('#btn').on('click', function () {
        $('#input').val('クリックしました');
        $('#input').css({
            'color': 'black',
            'font-size': '11px'
        });
    });

    $('#btn2').on('click',
        { msg: 'クリックしました', msg2: '!!!' },
        function (event) {
            $('#input').val(event.data.msg + event.data.msg2);
            $('#input').css({
                'color': 'gold',
                'font-size': '32px'
            });
        }
    );

    $('#btn3').on('click', function () {
        $('#input').val('クリックされました');
        $('#input').css({
            'color': 'black',
            'font-size': '11px'
        });
    });

    $('#btn3').on('mouseover', function () {
        $('#input').val('クリックしてください');
        $('#input').css({
            'color': 'black',
            'font-size': '11px'
        });
    });

    $('#btn3').on('mouseout', function () {
        $('#input').val('トゥールルルル');
        $('#input').css({
            'color': 'black',
            'font-size': '11px'
        });
    });

    $('#btn4').on('click', function () {
        $txt = $('#div1').text();
        $('#div1').text($txt + 'もしもし');
    });

    $('#btn5').click(function () {
        $('#div1').text('');
    });

});
