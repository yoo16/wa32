
$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li');
        let current = 0;
        let prevBtn = $('#prev a');
        let nextBtn = $('#next a');

        function checkControl() {
            //console.log(current);
            if (current == 0) {
                prevBtn.hide();
                nextBtn.show();
                if (photoList.length == 1) nextBtn.hide();
            } else if (current == photoList.length - 1) {
                prevBtn.show();
                nextBtn.hide();
            } else {
                prevBtn.show();
                nextBtn.show();
            }
        }

        function showImage() {
            checkControl();
            $(photoList[current]).stop().fadeIn(1200, 'swing');
        }

        function hideImage() {
            $(photoList[current]).stop().fadeOut(1200, 'swing');
        }

        prevBtn.on('click', function () {
            if (current > 0) {
                hideImage();
                current--;
                showImage();
            }
        });

        nextBtn.on('click', function () {
            if (current < photoList.length) {
                hideImage();
                current++;
                showImage();
            }
        });

        showImage();
    }

    photoChange($('#photoBox'));
});