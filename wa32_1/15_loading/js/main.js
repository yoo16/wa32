$(function () {
    "use strict";

    function load() {

        let images = []; //画像の参照先を格納する配列
        let index = 0; //読み込み画像インデックス

        //画像の読み込み完了
        function loaded() {
            let loading = $($('#main').find('.loading')[index]);
            let img = $($('#main').find('.photo')[index]);
            loading.fadeOut(200);
            img.css({
                'display': 'block',
                'opacity': 0
            }).animate({ 'opacity': 1 }, 800, function () {
                index++;
                if (index >= images.length) {
                    complete();
                } else {
                    loadImage();
                };
            });
        };

        //画像の読み込み
        function loadImage() {
            let img = new Image();
            $(img).on('load', loaded).attr('src', images[index]);
        };

        //初期設定
        function init() {
            $('#main').find('img').each(function (index) {
                $(this).addClass('photo');
                images[index] = $(this).attr('src');
            });

            let li = $('#main').find('li');
            $('<p>', {
                'class': 'loading',
                'html': '<img src="images/loading.gif">'
            }).appendTo(li);

            loadImage();
        };

        //すべての画像の読み込み完了
        function complete() {
            $('#main').find('.loading').remove();
        };

        init();
    };

    load();

});