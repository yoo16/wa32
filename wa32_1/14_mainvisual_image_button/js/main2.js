
$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li');
        let current = 0;
        let prevBtn = $('#prev a');
        let nextBtn = $('#next a');
        let easing = 'swing';
        let duration = 1200;

        function checkControl() {
            checkNext();
            checkPrev();
        }

        function checkNext() {
            let hasPrev = false;
            if (current > 0) hasPrev = true;
            (hasPrev) ? prevBtn.show() : prevBtn.hide();
        }

        function checkPrev() {
            let hasNext = false;
            if (current < photoList.length - 1) hasNext = true;
            (hasNext) ? nextBtn.show() : nextBtn.hide();
        }

        function showImage() {
            $(photoList[current]).stop().fadeIn(duration, easing);
        }

        function hideImage() {
            $(photoList[current]).stop().fadeOut(duration, easing);
        }

        function checkIndex(type) {
            if (type == 'prev' && current > 0) current--;
            if (type == 'next' && current < photoList.length - 1) current++;
        }

        $('.control').on('click', function () {
            if ($(photoList[current]).is(':animated')) return;
            hideImage();
            checkIndex($(this).attr('id'));
            showImage();
            checkControl();
        });

        showImage();
        checkControl();
    }

    photoChange($('#photoBox'));
});