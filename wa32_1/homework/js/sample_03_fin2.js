$(function() {
    let shop_name = '<h2>武器屋</h2>';
    let default_item_name = 'アイテム名';
    let character_name = 'HAL';

    let style = {
        number: {
            textAlign: 'right',
        },
        input: {
            padding: '10px 10px',
            border: 'solid 1px #a0a0a0',
            borderRadius: '5px',
        },
        title: {
            padding: '5px 10px',
            color: '#50a0f0',
            textAlign: 'center',
        },
        item_list: {
            margin: '10px 0',
            padding: '10px',
            background: 'white',
            border: '2px solid #50a0a0',
            color: '#505050',
            listStyleType: 'none',
            zIndex: 1,
        },
        item_price: {
            width: '100px',
        },
        item_amount: {
            width: '50px',
        },
        message: {
            position: 'relative',
            top: '500px',
            left: '-500px',
            marginTop: '10px',
            padding: '10px',
            border: '2px solid #50a0a0',
            borderRadius: '5px',
            color: '#505050',
            zIndex: 0,
        },
    }

    function init() {
        //global
        $('.number').css(style.number);
        $('input').css(style.input);

        //character
        $('input[name=character_name]').val(character_name);

        //message_box
        $('#message_box').css(style.message);

        //shop
        $('#shop_name').html(shop_name)
        $('#shop_name').css(style.title);

        //item list
        $('#item_list .item_name').html(default_item_name);
        $('#item_list input[name=price]').val(0);
        $('#item_list input[name=amount]').val(0);

        $('#item_list').css(style.item_list);
        $('#item_list input[name=price]').css(style.item_price);
        $('#item_list input[name=amount]').css(style.item_amount);

        $('#item_list input[name=price]').attr('disabled', 'disabled');
    }

    function show() {
        //item list
        $('#item_list .item_name').eq(0).html('銅のつるぎ');
        $('#item_list .item_name').eq(2).html('皮のたて');
        $('#item_list .item_name').eq(4).html('皮のぼうし');

        $('#item_list input[name=price]').eq(0).val(150);
        $('#item_list input[name=price]').eq(2).val(90);
        $('#item_list input[name=price]').eq(4).val(50);

        //message
        let message = character_name + 'さん、何のご用でしょうか？';
        $('#message_box').html(message);

        //animation
        $('#message_box').animate({ 'left': 0 }, 1000).animate({ 'top': 0 }, 500);
    }

    init();
    show();

});