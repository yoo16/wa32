$(function () {
    let result = $('#result');

    /**
     * showMessage
     * 
     * @param string message 
     */
    function showMessage(message) {
        console.log(message);
        result.text(message);
    }

    /**
     * click event btn1
     */
    $('#btn1').on('click', function () {
        showMessage('ボタン1がクリックされました。');
    });

    /**
     * click event btn2
     */
    $('#btn2').click(function () {
        showMessage('ボタン2がクリックされました。');
    });

    /**
     * click event btn3
     */
    $('#btn3').on(
        'click',
        { message: 'ボタン3がクリックされました。' },
        function (event) { showMessage(event.data.message) }
    );

    /**
     * click event btn4
     */
    $('#btn4').on('click',
        {
            msg1: 'ボタン4がクリックされました。',
            msg2: 'こんにちは',
            msg3: 'さようなら'
        },
        function (event) {
            console.log(event.data);
            console.log(event.data.msg1);
            console.log(event.data.msg2);
            console.log(event.data.msg3);

            let message = event.data.msg1 + ' ' + event.data.msg2  + ' ' +  event.data.msg3;
            showMessage(message);
        }
    );

    /**
     * eventFunc 
     * 
     * @param Event e 
     */
    function eventFunc(event) {
        let message = '';
        message+= 'name:' + event.data.name;
        message+= ',mail:' + event.data.mail;
        message+= ',tel:' + event.data.tel;
        showMessage(message);

        console.log('name:' + event.data.name);
        console.log('mail:' + event.data.mail);
        console.log('tel:' + event.data.tel);
    }

    /**
     * event click btn5
     */
    $('#btn5').on('click',
        {
            name: '江畑',
            mail: 'ebata@aaa.bbb',
            tel: '1234567890'
        },
        eventFunc
    );

    $('#btn6').on('click',
        {
            name: '清水',
            mail: 'simiz@aaa.bbb',
            tel: '01234567890'
        },
        eventFunc
    );

    /**
     * mousemove
     */
    $(document).on('mousemove', function (event) {
        $('#mouse').text(
            '(x, y) = (' + event.pageX + ', ' + event.pageY + ')'
        );
    });

    /**
     * click event btn7
     */
    $('#btn7').on('click', function () {
        showMessage('click');
        console.log('click');
    });

    /**
     * mouseover event btn7
     */
    $('#btn7').on('mouseover', function () {
        showMessage('mouseover');
        console.log('mouseover');
    });

    /**
     * mouseout event btn7
     */
    $('#btn7').on('mouseout', function () {
        showMessage('mouseout');
        console.log('mouseout');
    });

    /**
     * click,mouseover,mouseout event btn8
     */
    $('#btn8').on({
        'click': function () {
            showMessage('click');
            console.log('click');
        },
        'mouseover': function () {
            showMessage('mouseover');
            console.log('mouseover');
        },
        'mouseout': function () {
            showMessage('mouseout');
            console.log('mouseout');
        }
    });

    /**
     * click,mouseover,mouseout event btn9
     */
    $('#btn9').on(
        'click mouseover mouseout',
        function (event) { 
            showMessage(event.type);
            console.log(event.type);
        }
    );

    /**
     * window resize
     */
    $(window).on('resize', function () {
        $('#window_size').text(
            '(width, height) = (' 
            + $(window).width() + ', '
            + $(window).height() + ')'
        );
    });

});