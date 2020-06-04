$(function() {
    let el = {
        message: $('#shop_message'),
        item_list: $('#item_list'),
        shop_name: $('#shop_name'),
        item_name: $('#item_list .item_name'),
        item_price: $('#item_list input[name=price]'),
        item_amount: $('#item_list input[name=amount]'),
        item_total_price: $('#item_list .item_total_price'),
        character_name: $('input[name=character_name]'),
        character_money: $('input[name=character_money]'),
        number: $('.number'),
        input: $('input'),
    }

    let setting = {
        init: () => {
        },
    }

    let character = {
        name: 'HAL',
        money: 1000,
        init: () => {
            el.character_name.val(character.name);
            el.character_money.val(character.money);
        },
        goShop: () => {
            shop.open();
        },
        buy: () => {
            character.money-= item.total_price;
            el.character_money.val(character.money);
        },
        update: () => {
            character.name = el.character_name.val();
            character.money = el.character_money.val();
        },
    }

    let shop = {
        name: '武器屋',
        message_base: 'さん、何のご用でしょうか？',
        is_item_selected: false,
        init: () => {
            shop.initTitle();
            shop.initItem();
        },
        initTitle: () => {
            let title = $('<h2 class="h2"></h2>').html(shop.name);
            el.shop_name.append(title);
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
        getAmount: () => {
            return parseInt(el.item_amount.eq(item.selected).val());
        },
        message: () => {
            let message = character.name + shop.message_base;
            el.message.html(message);
        },
        calculateItemsPrice: () => {
            const selected_item = item.get();
            const amount = shop.getAmount();
            item.selected_total_price = selected_item.price * amount;
            // console.log(total_price);
            return item.selected_total_price;
        },
        updateItemsTotalPrice: () => {
            //console.log(item.selected);
            //console.log(item.selected_total_price);
            let total_price = '';
            if (item.selected_total_price > 0) {
                total_price = item.selected_total_price + 'G';
            }
            el.item_total_price.eq(item.selected).html(total_price);
        },
        calculate() {
            shop.is_item_selected = true;

            let selected_item = item.get();
            let item_name = selected_item.name;
            let price = selected_item.price;

            // let item_name = el.item_name.eq(item.selected).text();
            // let price = el.item_price.eq(item.selected).val();
            // let amount = el.item_amount.eq(item.selected).val();
            let amount = shop.getAmount();

            item.total_price = price * amount;
            let message = '';
            // message += item_name + amount
            // message += '個で ' 
            // message += total_price + shop.buy_message_base;
            message = `${item_name} ${amount}個で、${item.total_price}Gになります。<br>`
            message+= 'よろしいですか？';
            el.message.html(message);
        },
        validate() {

        },
        sell() {
            let message = '';
            if (character.money < item.total_price) {
                message = character.name + 'さん。お金が足りないようです。';
            } else if (shop.is_item_selected == true) {
                character.buy();

                shop.is_item_selected = false;
                message = character.name + 'さん。お買い上げありがとうございました。';
            } else {
                message = '商品を選んでください。';
            }
            el.message.html(message);
        }
    };

    let item = {
        default_name: 'アイテム名',
        default_price: 0,
        default_amount: 1,
        selected: 0,
        selected_total_price: 0,
        total_price: 0,
        items: [
            { index:0, name: '銅のつるぎ', price: 150, amount: 1},
            { index:1, name: '鉄のやり', price: 550, amount: 1},
            { index:2, name: '皮のたて', price: 90, amount: 1},
            { index:3, name: '鉄のかぶと', price: 850, amount: 1},
            { index:4, name: '皮のぼうし', price: 50, amount: 1},
        ],
        getIndex: (node) => {
            return node.closest('li').attr('index');
        },
        getAmount: () => {
            return el.item_amount.eq(item.selected).val();
        },
        get: () => {
            return item.items[item.selected];
        },
    };

    function init() {
        setting.init();
        character.init();
        shop.init();
    }

    $('#item_list button').on('click', function() {
        item.selected = item.getIndex($(this));
    });

    $('.plus').on('click', function() {
        let amount = item.getAmount();
        amount++;
        el.item_amount.eq(item.selected).val(amount);
        shop.calculateItemsPrice();
        shop.updateItemsTotalPrice();
    });

    $('.minus').on('click', function() {
        let amount = item.getAmount();
        amount--;
        if (amount < 0) amount = 0;
        el.item_amount.eq(item.selected).val(amount);
        shop.calculateItemsPrice();
        shop.updateItemsTotalPrice();
    });

    $('.buy').on('click', function() {
        shop.calculate();
    });

    $('#buy').on('click', function() {
        shop.sell();
    });

    $('#update_character').on('click', function() {
        character.update();
    });

    $('#clear').on('click', function() {
        shop.showItem();
        shop.message();
        $('#buy_list').html('');
    });

    init();
    character.goShop();
});