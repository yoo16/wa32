$(function() {
  $('#btn').click(function(){
    $('#input').val('クリックしました');
		$('#input').css({
			'color': 'black',
			'font-size': '11px'
		});
  });

  $('#btn2').click(
    {msg:'クリックしました', msg2:'!!!'},
    function(e){
      $('#input').val(e.data.msg + e.data.msg2);
			$('#input').css({
				'color': 'gold',
				'font-size': '32px'
			});
    }
  );

  $('#btn3').click(function(){
    $('#input').val('クリックされました');
		$('#input').css({
			'color': 'black',
			'font-size': '11px'
		});
  });

  $('#btn3').mouseover(function(){
    $('#input').val('クリックしてください');
		$('#input').css({
			'color': 'black',
			'font-size': '11px'
		});
  });

  $('#btn3').mouseout(function(){
    $('#input').val('トゥールルルル');
		$('#input').css({
			'color': 'black',
			'font-size': '11px'
		});
  });

  $('#btn4').click(function(){
    $txt = $('#div1').text();
    $('#div1').text($txt + 'もしもし');
  });
  $('#btn5').click(function(){
    $('#div1').text('');
  });
});
