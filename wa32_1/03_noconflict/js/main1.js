//jQuery
$(function () {
    alert($('body').attr('id'));
});

//prototype.js
document.observe("dom:loaded", function () {
    $("myBody").addClassName("myClass");
});