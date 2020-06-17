$(function () {
    function photoChange(target) {
        let items = target.find('li')
        let current = 0
        let easing = 'swing'

        function open() {
            $(items[current]).fadeIn(
                1200,
                easing,
                function () { setTimeout(change, 1500) }
            );
        }

        function close() {
            $(items[current]).fadeOut(1200, easing)
        }

        function change() {
            close()
            current = ++current % items.length
            open()
        }

        open()
    }

    photoChange($('#photoList'))

})