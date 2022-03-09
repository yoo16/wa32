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
            console.log(index);
            console.log(videoId);
        };

        function createYoutubePlayer() {
        };

        function init() {
            createYoutubePlayer();
            $.each(links, function (index) {
                console.log($(this).attr('href'));
                $(this).on('click', function () {
                    change(index, $(this).attr('href'));
                    return false;
                });
            });
            change(videoIndex, $(links[videoIndex]).attr('href'));
        };

        init();

    };

    setYouTube($('#youtube'), {});

});