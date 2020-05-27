$(function() {
    /**
     * css()
     */
    $('input[name=item]').css('background', '#ff0000');
    // $('input[name=item]').css('background', 'rgb(255, 0, 0)');
    // $('input[name=item]').css('background', 'rgba(255, 0, 0, 1.0)');

    $('input[name=item]').css('font-size', '14pt');
    //$('input[name=item]').css('fontSize', '2.0rem');

    let color = $('#txt4').css('color');
    $('#color_result').html(color);

    /**
     * css()
     */

    $('input[name=price]').css(
        { 
            width: '150px',
            border: '1px solid rgba(255, 0, 0, 1.0)',
            background: 'rgba(200, 0, 0, 0.2)',
            fontSize: '1.2rem',
            padding: '5px 20px',
            textAlign: 'right',
            borderRadius: '50px',
        }
    );

    /**
     * box1
     */
    // console.log($('#box1'));
    let width = $('#box1').width();
    let height = $('#box1').height();
    let result = `width: ${Math.round(width)} height: ${Math.round(height)}`;
    $('#window_size_result').html(result);

    /**
     * box2
     */
    $('#box2').width('150px');
    $('#box2').height('100px');
});