
document.addEventListener('DOMContentLoaded', function () {
    document.cookie = "city_name=Tokyo; expires=365"

    let values = document.cookie;
    console.log(values);
    document.getElementById('cityName').val();
}, false);