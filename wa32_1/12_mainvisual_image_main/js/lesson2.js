$(function () {
    function photoChange(target) {
        let items = target.find('li')
        let current = 0
        let easing = 'swing'
        let duration = 1200
        let showTime = 2000

        function open() {
            console.log(target)
            console.log(items)
            console.log(current)
        }

        function close() {
        }

        function change() {
        }

        open()
    }

    photoChange($('#photoList'))

})