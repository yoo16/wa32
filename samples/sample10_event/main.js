$(function() {
  $('#btn1').on('click', function() {
    console.log('ボタン1がクリックされました。');
  });
  $('#btn2').click(function() {
    console.log('ボタン2がクリックされました。');
  });
  
  $('#btn3').on(
    'click',
    {msg: 'ボタン3がクリックされました。'},
    function(e) { console.log(e.data.msg); }
  );
  $('#btn4').click(
    {msg1: 'ボタン4がクリックされました。',
     msg2: 'こんにちは',
     msg3: 'さようなら'
    },
    function(e) {
      console.log(e.data.msg1);
      console.log(e.data.msg2);
      console.log(e.data.msg3);
    }
  );
  
  function eventFunc(e) {
    console.log('name:' + e.data.name);
    console.log('mail:' + e.data.mail);
    console.log('tel:' + e.data.tel);
  }
  
  $('#btn5').click(
    {name: '江畑',
     mail: 'ebata@aaa.bbb',
     tel: '1234567890'},
    eventFunc
  );
  $('#btn6').click(
    {name: '清水',
     mail: 'simiz@aaa.bbb',
     tel: '01234567890'},
    eventFunc
  );
  
  $(document).on('mousemove', function(e) {
    $('input').val(
      'e.pageX:' + e.pageX + ' ' +
      'e.pageY:' + e.pageY
    );
  });
  
  $('#btn7').click(function() {
    console.log('click');
  });
  $('#btn7').mouseover(function() {
    console.log('mouseover');
  });
  $('#btn7').mouseout(function() {
    console.log('mouseout');
  });
  
  $('#btn8').on({
    'click': function() {
      console.log('click');
    },
    'mouseover': function() {
      console.log('mouseover');
    },
    'mouseout': function() {
      console.log('mouseout');
    }
  });

  $('#btn9').on(
    'click mouseover mouseout',
    function(e) { console.log(e.type); }
  );
  
  $(window).on('resize', function() {
    $('#window_size').val(
      $(window).width() + ':' +
      $(window).height()
    );
  });
});