$(function() {
  let photo = $('#photo');
  // 右スライド
  function slideToRight() {
    photo.animate(
      {'left': 300},
      1000,
      'linear',
      function() {
        setTimeout(slideToDown, 1000);
      });
  };
  // 左スライド
  function slideToLeft() {
    photo.animate({'left': 0}, 1000,
      'linear',
      function() {
        setTimeout(slideToUp, 1000)});
  };
  // 下スライド
  function slideToDown() {
    photo.animate({'top': 100}, 1000,
      'linear',
      function() {
        setTimeout(slideToLeftUp, 1000);
      });
  };
  // 左上スライド
  function slideToLeftUp() {
    photo.animate({'left': 0, 'top': 0}, 1000,
      'linear',
      function() {
        setTimeout(slideToRight, 1000);
      });
  };
  // 上スライド
  function slideToUp() {
    photo.animate({'top': 0}, 1000,
      'linear',
      function() {
        setTimeout(slideToRight, 1000);
      });
  };
  slideToRight();
});