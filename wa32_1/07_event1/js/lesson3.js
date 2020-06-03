$(function () {
    let result = $('#result');

    /**
     * showMessage
     * 
     * @param string message 
     */
    function showMessage(message) {
        result.html(message);
        // console.log(message);
    }

    /**
     * showUserInfo 
     * 
     * @param Event e 
     */
    function showUserInfo(event) {
        // console.log(event.data);
        let user = event.data;

        $('#user_info .name').html(user.name);
        $('#user_info .mail').html(user.mail);
        $('#user_info .tel').html(user.tel);
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
    $('#btn3').on('click',
        { 
            message: 'ボタン3がクリックされました。' 
        },
        function (event) { 
            showMessage(event.data.message)
        }
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
            // console.log(event.data);
            // console.log(event.data.msg1);
            // console.log(event.data.msg2);
            // console.log(event.data.msg3);
            //let message = event.data.msg1 + ' ' + event.data.msg2  + ' ' +  event.data.msg3;
            let message = `${event.data.msg1} ${event.data.msg2} ${event.data.msg3}`;
            showMessage(message);
        }
    );

    /**
     * event click btn5
     */
    $('#btn5').on('click',
        {
            name: 'User1',
            mail: 'user1@aaa.bbb',
            tel: '03-1111-2222'
        },
        showUserInfo
    );

    $('#btn6').on('click',
        {
            name: 'User2',
            mail: 'user2@aaa.bbb',
            tel: '090-1234-5678'
        },
        showUserInfo
    );

    /**
     * mousemove
     */
    $(document).on('mousemove', function (event) {
        //let message = '(x, y) = (' + event.pageX + ', ' + event.pageY + ')';
        let message = `(x, y) = (${event.pageX} ${event.pageY})`;
        $('#mouse').text(message);
    });

    /**
     * click event btn7
     */
    $('#btn7').on('click', function () {
        showMessage('Click!');
        // console.log('click');
    });

    /**
     * mouseover event btn7
     */
    $('#btn7').on('mouseover', function () {
        showMessage('Mouse Over!');
        // console.log('mouseover');
    });

    /**
     * mouseout event btn7
     */
    $('#btn7').on('mouseout', function () {
        showMessage('Mouse Out!');
        // console.log('mouseout');
    });

    /**
     * click,mouseover,mouseout event btn8
     */
    $('#btn8').on({
        'click': function () {
            showMessage('Click!');
            // console.log('click');
        },
        'mouseover': function () {
            showMessage('Mouse Over!');
            // console.log('mouseover');
        },
        'mouseout': function () {
            showMessage('Mouse Out!');
            // console.log('mouseout');
        }
    });

    /**
     * click,mouseover,mouseout event btn9
     */
    $('#btn9').on(
        'click mouseover mouseout',
        function (event) { 
            showMessage(event.type);
            // console.log(event.type);
        }
    );

    /**
     * window resize
     */
    $(window).on('resize', function () {
        //let message = '(x, y) = (' + event.pageX + ', ' + event.pageY + ')';
        let message = `(width, height) = (${$(window).width()} ${$(window).height()})`;
        $('#window_size').text(message);
    });

});