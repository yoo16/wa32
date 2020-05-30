$(window).on('load', function(){
    console.log('window load');
});

$(document).on('load', function(){
    console.log('document load');
});

$(function() {
    console.log('$');
});

$(document).ready(function () {
    console.log('ready()');
});

$(document).on('ready', function() {
    console.log('on ready');
});