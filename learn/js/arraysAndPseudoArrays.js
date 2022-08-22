'use strict';

// const arr = [1, 2, 3, 4, 5];
// arr[99] = 0; // Никогда так не делать
//console.log(arr.length); // это последний индекс + 1

// arr.pop(); // Удаляет последний элемент массива
// arr.push(10); // Добавляет элемент массива в конец

// Есть еще методы shift и endshift, но их редко используют из-за недостатков. Т.к. происходит перераспределение индексов
// arr.shift(); // Удаляет первый элемент массива
// arr.unshift(7888787); // Добавляет в начало массива элемент

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value); // value - это каждый отдельный элемент, а не индекс
// Здесь можем использовать breake и continue, в forEach нет
// }
// for of работает только с массивоподобными сущностями
// например, массив, строка, псевдомассивы, ? map и сэд - это потом, также можем перебрать все элементы со страницы

// console.log(arr);

// const arr = [11, 2, 3, 14, 5];

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// forEach принимает в себя callback функцию. Проходится по каждому элементу массива и выполняет функцию. Функция гибко настраивается
// Может принять в себя три аргумента
// 1. item (может быть любым) это значение элемента массива
// i - индекс
// Ссылка на массив

// https://drive.google.com/file/d/17D4THU5-UJtzihybKVjSDHeX67pz3xLR/view - методы и свойства массивов

const str = 'asdasd,asdasd,asdsad,adsa,sde,eade,dadad,ade,dae';
const products = str.split(','); // превращает строку в массив, разделитель ',' - может быть любым
// products.sort(); // const arr = [11, 2, 3, 14, 5]; arr.sort() - выведет 11, 14, 2, 3, 5 - сортирует строки!
// но этого можно избежать, метод sort может принимать в себя callback функцию

const arr = [11, 2, 3, 14, 5];

arr.sort(compareNum); // sort использует алгоритм быстрой сортировки

function compareNum (a, b) { // почему это работает? http://algolist.ru/sort/quick_sort.php
    return a - b;
}

console.log(arr);

console.log(products.join(';')); // превращает массив в строку, разделитель ';' - может быть любым

// Псевдомассивы - это структура, которая хранит данные по порядку. Выглядит как массивы. Но не имеет методов и свойст массивов.

// Алгоритмы поиска на JavaScript - http://mathhelpplanet.com/static.php?p=javascript-algoritmy-poiska
