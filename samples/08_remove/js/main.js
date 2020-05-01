$(function () {
    let div = $('#div3');
    console.log(div.html());
    let txt = $('#txt1').remove();
    div.html(txt);
    console.log(div.html());
});