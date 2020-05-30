$(function() {
    let el = {
        message: $('#shop_message'),
        item_list: $('#item_list'),
        shop_name: $('#shop_name'),
        item_name: $('.item_name'),
        item_price: $('input[name=price]'),
        item_amount: $('input[name=amount]'),
        character_name: $('input[name=character_name]'),
        number: $('.number'),
        input: $('input'),
    }

    let setting = {
        init: () => {
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
            let title = $('<h2></h2>').html(shop.name);
        },
        initItem: () => {
            el.item_name.html(item.default_name);

            el.item_price.val(item.default_price);
            el.item_amount.val(item.default_amount);
            
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
        }
    };

    let item = {
        default_name: 'アイテム名',
        default_price: 0,
        default_amount: 1,
        items: [
            { index:0, name: '銅のつるぎ', price: 150, amount: 1},
            { index:1, name: '鉄のやり', price: 550, amount: 1},
            { index:2, name: '皮のたて', price: 90, amount: 1},
            { index:3, name: '鉄のかぶと', price: 850, amount: 1},
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