$(function () {
    $('#shop_name').html('<h2>武器屋</h2>');

    let message = 'さん、何のご用でしょうか？'
    $('#message').html(message);

    $('.item_name').html('アイテム名');

    $('input[name=price]').val(0);
    $('input[name=amount]').val(0);
    $('input[name=character_name]').val('HAL');
});