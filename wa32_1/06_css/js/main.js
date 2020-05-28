$(function() {
    /**
     * css() : set key & value
     */
    $('input[name=item]').css('background', '#ff0000');
    // $('input[name=item]').css('background', 'rgb(255, 0, 0)');
    // $('input[name=item]').css('background', 'rgba(255, 0, 0, 1.0)');

    $('input[name=item]').css('font-size', '14pt');
    //$('input[name=item]').css('fontSize', '2.0rem');

    let color = $('#txt').css('color');
    let font_size = $('#txt').css('font-size');

    $('#color_result').append(color);
    $('#color_result').append('<br>');
    $('#color_result').append(font_size);

    /**
     * css() : set object
     */
    let css = { 
        width: '150px',
        border: '1px solid rgba(255, 0, 0, 1.0)',
        background: 'rgba(200, 0, 0, 0.2)',
        fontSize: '1.2rem',
        padding: '5px 20px',
        textAlign: 'right',
        borderRadius: '50px',
    }
    $('input[name=price]').css(css);

    $('#callback').css('width', function(index, value) {
        let width = parseInt(value);
        console.log(index);
        console.log(value);
        console.log(width);
        return width * 0.5;
    });

    /**
     * get window size
     */
    // console.log($('#box1'));
    let width = $('#box1').width();
    let height = $('#box1').height();
    let result = `width: ${Math.round(width)} height: ${Math.round(height)}`;
    $('#window_size_result').html(result);

    /**
     * set window size
     */
    $('#box2').width('150px');
    $('#box2').height('100px');
});