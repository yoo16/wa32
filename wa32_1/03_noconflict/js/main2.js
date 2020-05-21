jQuery.noConflict();

//jQuery
jQuery(function () {
    alert(jQuery('body').attr('id'));
});

//prototype.js
document.observe("dom:loaded", function () {
    $("myBody").addClassName("myClass");
});