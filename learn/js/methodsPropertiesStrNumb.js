'use strict';

// методы - это действия

const str = 'Test test';

console.log(str.length); // 4 // Свойства никак не вызываются
console.log(str[2]); // s
console.log(str.toUpperCase()); // TEST, верхний регистр
console.log(str.indexOf('test')); // 5, в пятой позиции начинается test, отсчет с 0
// если нет кусочкая строки или буквы, то вернет -1

const logg = 'Hello, World';
console.log(logg.slice(7, 12)); // Вернет World, slice отрезает от 7 до 12 не включительно
// если указать только певый аргумент, то строка вырежется от 7 до конца - logg.slice(7)
console.log(logg.slice(-5, -1)); // Worl, -5 справа и -1 справа
console.log(logg.substring(7, 12)); // Тоже самое, только нельзя задавать отрицательные значения
// можно задавать первый аргумент больше, чем второй - так делать не надо
console.log(logg.substr(7, 5)); // World - начинает с 7 позиции и вырезает количество символов (второй аргумент)

const arr = [1, 2, 3];

console.log(arr.length); // 3 // Свойства никак не вызываются

// console.dir(Number); - в бразуере выводит свойства типа

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
// - документация методов и свойств чисел

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// - документация методов и свойств строк

// Для чисел есть встроенна библиотека Math

const num = 12.2;

console.log(Math.round(num)); // 12, Округляет до ближайшего целого

const test = '12.2px';
console.log(parseInt(test)); // parseInt() - переводит число, в другую систему исчисления: двоичная и т.д
// В данном случае выводит округленную до ближайшего целого числовую часть в типе Number - особенность метода
console.log(parseFloat(test)); // Выводит числовую часть в десятичной системе исчесления
