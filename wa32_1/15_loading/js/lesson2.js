$(function () {

    function loadImages() {
        let srcList = []; //画像の参照先を格納する配列
        let index = 0; //読み込み画像インデックス
        let duration = 800;

        //初期設定
        function init() {
            $('#main').find('img').each(function (index) {
                $(this).addClass('photo');
                srcList[index] = $(this).attr('src');
            });
        
            let img = $('<img>').attr('src', 'images/loading.gif');
            let p = $('<p>').addClass('loading').append(img);
            let li = $('#main').find('li');
            p.appendTo(li)
        
            load();
        };

        //画像の読み込み
        function load() {
        };

        //画像の読み込み完了
        function loaded() {
        };

        //すべての画像の読み込み完了
        function complete() {
        };
        init();
    };

    loadImages();
});