$(function () {
    let styles = {
        fontSize: '32px',
        color: '#ff0000',
        marginLeft: '100px'
    }
    let text1 = document.getElementById('txt1');

    setStyle(text1, styles);
});

function setStyle(dom, styles) {
    for (let prop in styles) {
        dom.style[prop] = styles[prop];
    }
}