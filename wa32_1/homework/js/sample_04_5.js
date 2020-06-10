$(function () {

    let index = 0;
    let item_name = '';
    let price = '';
    let amount = 0;
    let total_price = 0;
    let character_money = 5000;

    init();

    function init() {
        $('#shop_message').html('さん、何のご用でしょうか？');

        $('.item_name').eq(0).html('銅のつるぎ');
        $('input[name="price"]').eq(0).val(150);

        $('.item_name').eq(1).html('鉄のやり');
        $('input[name="price"]').eq(1).val(550);

        $('.item_name').eq(2).html('皮のたて');
        $('input[name="price"]').eq(2).val(90);

        $('.item_name').eq(3).html('鉄のかぶと');
        $('input[name="price"]').eq(3).val(850);

        $('.item_name').eq(4).html('皮のぼうし');
        $('input[name="price"]').eq(4).val(50);
    }

    $('#cancel').on('click', function() {
        init();
    });

    $('#ok').on('click', function() {
        let message = '';
        if (total_price == 0) {
            message = '商品を選んでください。';
        } else if (character_money >= total_price) {
            message = 'さん。お買い上げありがとうございました。';
            character_money-= total_price;
            $('input[name=character_money]').val(character_money);
        } else {
            message = 'さん。お金が足りないようです。';
        }
        $('#shop_message').html(message);
    });

    $('.buy').on('click', function() {
        if (amount <= 0) return;

        let message = '';
        message+= item_name + ' ' + amount + '個で、';
        message+= total_price + 'Gになります。よろしいですか？';
        $('#shop_message').html(message);
    });

    $('.plus').on('click', function(event) {
        index = $('.plus').index(this);

        item_name = $('.item_name').eq(index).text();
        price = $('input[name=price]').eq(index).val();
        amount = $('input[name=amount]').eq(index).val();

        amount++;

        $('input[name=amount]').eq(index).val(amount);

        calculate();
    });

    $('.minus').on('click', function(event) {
        index = $('.minus').index(this);

        item_name = $('.item_name').eq(index).text();
        price = $('input[name=price]').eq(index).val();
        amount = $('input[name=amount]').eq(index).val();

        amount--;
        if (amount < 0) amount = 0;

        $('input[name=amount]').eq(index).val(amount);

        calculate();
    });

    function calculate() {
        total_price = price * amount;
        $('.total_price').eq(index).html(total_price + 'G');
    }

});
