
$(function() {
    alert('jQuery で実行');
});

document.observe("dom:loaded", function() {
    alert('prototype.js で実行');
});