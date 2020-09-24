$(function () {

    function setYouTube(target, setting) {

        const YOUTUBE_EMDEB_PATH = '//www.youtube.com/embed/';

        let option = {
            'videoId': '',
            'width': 420,
            'height': 315,
            'frameborder': 0,
            'allowfullscreen': true,
            'rel': true,
            'loop': false,
            'autoplay': false
        };
        let paramStr = '';
        let paramArr = [];
        let movie = target.find('#movie');
        let youtube;
        let links = target.find('#links a');
        let videoIndex = 0;

        function change(index, videoId) {
            if (index != videoIndex) {
                $(links[videoIndex]).removeClass('ac');
            };
            videoIndex = index;
            $(links[videoIndex]).addClass('ac')

            let src = YOUTUBE_EMDEB_PATH + videoId + '/' + paramStr;
            youtube.attr('src', src);
        };

        function createYoutubePlayer() {
            for (let i in setting) {
                option[i] = setting[i]
            };
            option.allowfullscreen = (option.allowfullscreen) ? 'allowfullscreen' : '';

            if (!option.rel) paramArr.push('rel=0');
            if (option.loop) paramArr.push('loop=1');
            if (option.autoplay) paramArr.push('autoplay=1');
            if (option.mute) paramArr.push('mute=1');
            paramStr = paramArr.join('&');
            if (paramStr.length > 0) paramStr = '?' + paramStr;

            let src = YOUTUBE_EMDEB_PATH + option.videoId + '/';
            let iframe = $('<iframe>');
            iframe.attr({
                src: src,
                width: option.width,
                height: option.height,
                frameborder: option.frameborder,
                allowfullscreen: option.allowfullscreen,
            });
            movie.append(iframe);
            youtube = movie.find('iframe');
        };

        function init() {
            createYoutubePlayer();
            $.each(links, function (index) {
                $(this).on('click', function () {
                    change(index, $(this).attr('href'));
                    return false;
                });
            });
            change(videoIndex, $(links[videoIndex]).attr('href'));
        };

        init();

    };

    setYouTube($('#youtube'), {
        'width': 880,
        'height': 495,
        'autoplay': true,
        'allowfullscreen': false,
        'rel': false,
        'loop': true,
        'mute': false,
    });

});