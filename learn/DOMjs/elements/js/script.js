// Получение элементов на странице

'use strict';

// https://learn.javascript.ru/css-selectors
// https://habr.com/ru/post/336136/

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button'); // HTMLCollection
const circles = document.getElementsByClassName('circle'); // HTMLCollection
const hearts = document.querySelectorAll('.heart'); // NodeList // У querySelectorAll появляется метод перебора foreach

console.log(box);
console.log(buttons);
console.log(circles);
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});
