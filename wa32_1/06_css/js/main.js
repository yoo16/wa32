$(function() {
    /**
     * css()
     */
    $('input[name=item]').css('background', '#ff0000');
    // $('input[name=item]').css('background', 'rgb(255, 0, 0)');
    // $('input[name=item]').css('background', 'rgba(255, 0, 0, 1.0)');

    let color = $('#txt4').css('color');
    $('#color_result').html(color);

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