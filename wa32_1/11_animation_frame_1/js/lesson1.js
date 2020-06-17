$(function () {
    let pic = $('#pic')
    pic.prop({
        w: $('#pic-box').width(),   // 1コマ分の横幅
        h: $('#pic-box').height(),  // 1コマ分の高さ
        col: 6,                     // コマ画像の横コマ数
        max: 12,                    // 全コマ数
        num: 0,                     // 現在のコマ数のインデックス
    })

    console.log(pic.prop('w'))
    console.log(pic.prop('h'))
})