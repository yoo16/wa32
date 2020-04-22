$(function() {
  function photoChange(target) {
    let items = target.find('li');  // li要素のセレクタを格納した配列
    let current = 0;                // 現在表示されているインデックス

    // フェードイン
    function open() {
      $(items[current]).fadeIn(
        1200,
        "easeInQuad",
        function() { setTimeout(change, 1500); }
      );
    }
    
    // フェードアウト
    function close() {
      $(items[current]).fadeOut(1200, "easeOutQuad");
    }
    
    // 画像の切り替え
    function change() {
      close();
      current = ++current % items.length;
      open();
    }
    
    open();
  }
  
  photoChange($('#photolist'));
});