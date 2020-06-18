
$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li');
        let current = 0;
        let prevBtn = $('#prev a');
        let nextBtn = $('#next a');

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
            $(photoList[current]).stop().fadeIn(1200, 'swing');
        }

        function hideImage() {
            $(photoList[current]).stop().fadeOut(1200, 'swing');
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