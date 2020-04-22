$(function() {
  let html = $('#contents').html();
  console.log(html);
  $('#contents').html('<p id="txt">p要素を追加</p>');
  
  html = $('#contents2').html();
  console.log(html);
  $('#contents2').html('<span>h2</span>');
  $('#contents2').html('<span>aaa</span>');
});