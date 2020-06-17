$(function () {
    function photoChange(target) {
        let items = target.find('li')
        let current = 0
        let easing = 'swing'

        function open() {
            console.log(target)
            console.log(items)
            console.log(current)
            console.log(easing)
        }

        function close() {
        }

        function change() {
        }

        open()
    }

    photoChange($('#photoList'))

})