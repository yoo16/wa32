$(function () {

    let index = 0;
    let item_name = '';
    let price = '';
    let amount = 0;

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
        $('#shop_message').html('さん。お買い上げありがとうございました。');
    });

    $('.buy').on('click', function() {
        $('#shop_message').html('個で、Gになります。よろしいですか？');
    });

    $('.plus').on('click', function(event) {
        index = $(this).attr('index');
        // index = $(this).closest('li').attr('index');
        // index = $('.minus').index(this);

        amount++;

        //グローバルになってしまう
        $('input[name=amount]').eq(index).val(amount);
    });

    $('.minus').on('click', function(event) {
        index = $(this).attr('index');
        // index = $(this).closest('li').attr('index');
        // index = $('.minus').index(this);

        amount--;
        if (amount < 0) amount = 0;

        //グローバルになってしまう
        $('input[name=amount]').eq(index).val(amount);
    });

});
