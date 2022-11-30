'use strict';

// filter - фильтрует элементы внутри массива по правилу (условию)

// Мы уже знаем про forEach, самое главное,
// что нужно понять в этом методе это то,
// что он никогда не возвращает новый массив

const names = ['Ivan', 'Ann', 'Ksenia', 'Alexandr'];

// Фильтрует по условию
const shortNames = names.filter(name => name.length < 5);

console.log(shortNames);
