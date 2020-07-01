$(function () {
    function photoChange(target) {
        let items = target.find('li')
        let current = 0
        let easing = 'swing'
        let duration = 1200
        let showTime = 2000

        function open() {
            $(items[current]).fadeIn(
                duration,
                easing,
                function () { setTimeout(change, showTime) }
            );
        }

        function close() {
            $(items[current]).fadeOut(duration, easing)
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