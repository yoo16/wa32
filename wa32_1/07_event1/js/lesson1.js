
window.onload = (event) => {
    document.getElementById('native_button')
            .addEventListener('click', function(event) {
        alert('Native click');
    });
}

$(function () {
    $('#on_event_button').on('click', function(event) {
        alert('on click Event');
    });

    $('#click_event_button').click(function(event) {
        alert('click Event Method');
    });
});

// $(document).on('mousemove', function (event) {
//     console.log(event.pageX);
//     console.log(event.pageY);
// });