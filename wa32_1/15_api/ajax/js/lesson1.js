const href = location.href;
const index = href.lastIndexOf('/') + 1;
const filename = href.substr(index);
const baseUrl = href.substr(0, index);
const apiUrl = baseUrl + 'js/foods.json';

console.log(href);
console.log(baseUrl);
console.log(apiUrl);
