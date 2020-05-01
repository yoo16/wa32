$(function () {
    let html = $('#contents').html();
    console.log(html);
    $('#contents').html('<p id="txt">p要素を追加</p>');

    html = $('#contents2').html();
    console.log(html);
    $('#contents2').html('<h2>h2タグ</h2>');
    $('#contents2').html('<span>span要素を追加</span>');
});