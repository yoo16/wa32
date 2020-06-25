$(function () {
    let pic = $('#pic')
    pic.prop({
        w: $('#pic-box').width(),   // 1コマ分の横幅
        h: $('#pic-box').height(),  // 1コマ分の高さ
        col: 6,                     // コマ画像の横コマ数
        max: 12,                    // 全コマ数
        num: 0,                     // 現在のコマ数のインデックス
    })
    console.log(pic)

    function loaded() {
        console.log('loaded!')
    }

    function init() {
        let img = new Image()
        //$(img).attr('src', pic.attr('src')).on('load', loaded)
        $(img).on('load', loaded).attr('src', pic.attr('src'))
        //$(img).on('load', loaded) //イベントが発生しない
        //$('#pic').on('load', loaded) //
    }

    init()
})