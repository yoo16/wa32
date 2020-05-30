$(function() {
    let el = {
        message: $('#message_box'),
        item_list: $('#item_list'),
        shop_name: $('#shop_name'),
        item_name: $('.item_name'),
        item_price: $('input[name=price]'),
        item_amount: $('input[name=amount]'),
        character_name: $('input[name=character_name]'),
        number: $('.number'),
        input: $('input'),
    }

    let style = {
        global: {
            number: {
                textAlign: 'right',
            },
            input: {
                padding: '10px 10px',
                border: 'solid 1px #a0a0a0',
                borderRadius: '5px',
            }
        },
        shop: {
            title: {
                padding: '5px 10px',
                color: '#50a0f0',
                textAlign: 'center',
            }
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

    let setting = {
        init: () => {
            el.number.css(style.global.number);
            el.input.css(style.global.input);
        },
    }

    let character = {
        name: 'HAL',
        init: () => {
            el.character_name.val(character.name);
        },
        goShop: () => {
            shop.open();
        },
    }

    let shop = {
        name: '武器屋',
        message_base: 'さん、何のご用でしょうか？',
        init: () => {
            shop.initTitle();
            shop.initItem();
        },
        initTitle: () => {
            el.message.css(style.message);

            let title = $('<h2></h2>').html(shop.name);
            el.shop_name.append(title).css(style.shop);
        },
        initItem: () => {
            el.item_name.html(item.default_name);

            el.item_price.val(item.default_price);
            el.item_amount.val(item.default_amount);
            
            el.item_list.css(style.item_list);
            el.item_price.css(style.item_price);
            el.item_amount.css(style.item_amount);

            el.item_price.attr('disabled', 'disabled');
        },
        open: () => {
            shop.message();
            shop.showItem();
        },
        showItem: () => {
            item.items.map(function(item) {
                el.item_name.eq(item.index).html(item.name);
                el.item_price.eq(item.index).val(item.price);
            });
        },
        message: () => {
            let message = character.name + shop.message_base;
            el.message.html(message);
            el.message.animate({ 'left': 0 }, 1000).animate({ 'top': 0 }, 500);
        }
    };

    let item = {
        default_name: 'アイテム名',
        default_price: 0,
        default_amount: 1,
        items: [
            { index:0, name: '銅のつるぎ', price: 150, amount: 1},
            //{ index:1, name: '鉄のやり', price: 550, amount: 1},
            { index:2, name: '皮のたて', price: 90, amount: 1},
            //{ index:3, name: '鉄のかぶと', price: 850, amount: 1},
            { index:4, name: '皮のぼうし', price: 50, amount: 1},
        ],
    };

    function init() {
        setting.init();
        character.init();
        shop.init();
    }

    init();
    character.goShop();
});