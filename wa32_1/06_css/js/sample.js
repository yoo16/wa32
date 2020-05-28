$(function () {
    console.log('width:' + $('#box1').width());
    console.log('height:' + $('#box2').height());

    $('#box1').width('40px');
    $('#box2').width('70px').height('100px');


    $('#txt1').css('color', '#090000');

    $('#txt2').css('font-size', '24px');
    $('#txt3').css('fontSize', '2.0rem');

    $('#txt1').css('font-weight', 'bold');

    let css = {
        'color': 'red',
        'font-size': '32px',
        'font-weight': 'bold'
    };
    $('#txt4').css(css);


    let color = $('#txt4').css('color');

    $('#txt1').css('color', color);

    let css2 = {
        'color': 'black',
        'font-size': '48px',
        'font-weight': 'bold',
        'border': 'solid',
        'text-align': 'center',
        'background-color': 'yellow'
    };
    $('#txt5').css(css2);

    $('#txt6').css({
        'color': 'red',
        'font-size': '48px',
        'font-weight': 'bold',
        'border': 'solid',
        'text-align': 'center',
        'background': 'repeating-linear-gradient(-30deg, black 0, black 10px, yellow 10px, yellow 20px)'
    });

});