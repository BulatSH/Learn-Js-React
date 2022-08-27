// Навигация по DOM - элементам, data-атрибуты, преимущество for/of

'use strict';

console.log(document.body);

console.log(document.head);

console.log(document.documentElement); // documentElement - тег html

console.log(document.body.childNodes); // Узлы, которые явялются детьми у body
// Выведет
// NodeList(4) [text, div.wrapper, text, script]
// 0: text // Текстовая нода, просто перенос строки, его не видно на верстке
        // этим и отличаются узлы от элементов, каждая сущность, которая находится на странице будет узлом,
        // но не каждый узел будет элементом
// 1: div.wrapper
// 2: text // Тоже перенос строки
// 3: script
// 4: text // этот и ниже поставил live server
// 5: comment
// 6: text
// 7: script
// 8: text
// length: 9
// [[Prototype]]: NodeList

console.log(document.body.firstChild); // первая нода
console.log(document.body.lastChild); // последняя нода

console.log(document.querySelector('#current').parentNode); // Получаем родитель узла
console.log(document.querySelector('#current').parentNode.parentNode); // Получаем родитель родитель узла

// html data атрибуты - появились в html5
console.log(document.querySelector('[data-current="3"]')); // получаем дата атрибут data-current
console.log(document.querySelector('[data-current="3"]').nextSibling); // получаем следующую ноду после дата атрибута data-current
console.log(document.querySelector('[data-current="3"]').previousSibling); // получаем предыдущую ноду после дата атрибута data-current

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получаем следующий элемент после дата атрибута data-current
console.log(document.querySelector('[data-current="3"]').previousElementSibling); // получаем предыдущий элемент после дата атрибута data-current

console.log(document.querySelector('#current').parentElement); // Получаем родительский элемент

console.log(document.body.firstElementChild); // первый элемент
console.log(document.body.lastElementChild); // последняя элемент

console.log(document.body.childNodes); // - аналога, который позволил бы получить только дочерние элементы нет
// Поэтому
console.log('------------------');
for (let node of document.body.childNodes) { // for of в отличие от forEach позволяет использовать continue и breake
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
console.log('------------------');
