
$(function () {
    function photoChange(target) {
        let photoList = target.find('#photoList li');
        let current = 0;
        let prevBtn = $('#prev a');
        let nextBtn = $('#next a');

        function checkControl() {
            let isPrev = false;
            let isNext = false;
            if (current > 0) isPrev = true;
            if (current < photoList.length - 1) isNext = true;

            (isPrev) ? prevBtn.show() : prevBtn.hide();
            (isNext) ? nextBtn.show() : nextBtn.hide();
        }

        function showImage() {
            $(photoList[current]).fadeIn(1200, 'swing');
        }

        function hideImage() {
            $(photoList[current]).fadeOut(1200, 'swing');
        }

        function checkIndex(type) {
            if (type == 'prev' && current > 0) current--;
            if (type == 'next' && current < photoList.length - 1) current++;
        }

        $('.control').on('click', function () {
            if ($(photoList[current]).is(':animated')) return;
            //console.log(current);
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