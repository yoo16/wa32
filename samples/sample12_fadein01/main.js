$(function() {
  let photo = $('#photo');
  // フェードイン
  function open() {
    photo.fadeIn(3000, "swing",
      function() {
        setTimeout(close, 1000);
      });
  }
  // フェードアウト
  function close() {
    photo.fadeOut(1500, "swing",
      function() {
        setTimeout(open, 500);
      });
  }
  open();
});