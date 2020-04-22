$(function(){

	function setYouTube(target, op){

		let option = { //iframe要素の属性値とパラメータ
			'videoId': '',
			'width': 640,
			'height': 480,
		};
		let paramStr = ''; //文字列化したパラメータ
		let paramArr = []; //パラメーターリスト

		for( let i in op ){
      console.log(i);
			option[i] = op[i]
		};

		$('<div>', {
			'html': '<iframe width="'+option.width+'" height="'+option.height+'" src="//www.youtube.com/embed/'+option.videoId+'"></iframe>'
		}).appendTo(target);

	};

	setYouTube($('#youtube-0'), {
		'videoId': 'BR2i5nOhTXM',
		'width': 400,
		'height': 400
	});

	setYouTube($('#youtube-1'), {
		'videoId': 'kt5KflkOgHM',
		'width': 420,
		'height': 400
	});

	setYouTube($('#youtube-2'), {
		'videoId': '_CKEEfQBXZI',
		'width': 280,
		'height': 280
	});

	setYouTube($('#youtube-3'), {
		'videoId': '1F5Cuzd0ThQ',
		'width': 200,
		'height': 200
	});

	setYouTube($('#youtube-4'), {
		'videoId': '0r6O9wgBvGo'
	});

});