'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передает не структуру obj, а ссылку на существующий объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);
// выведет
// { a: 10, b: 1 }
// { a: 10, b: 1 }
// Когда мы работаем с объектами (объекты, массивы, функции и др (obj data)) идет передача по ссылке, а не по значению

function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10; // все норм
newNumbers.c.x = 10; // поменяет значения ключей в обоих объектах
// когда мы клонируем объекты, есть глубокие и поверхностные копии объекта
// мы создали поверхностную копию
// когда клонировали мы обратились к объекту
// {
//     x: 7,
//     y: 4
// }
// то есть по ссылке

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); // соединение объектов, первый аргумент объект с которым надо соединить, второй - который соединяем с первым

const clone = Object.assign({}, add); // поверхностная копия

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // метод, который позволяет скопировать старый массив. Поверхностная копия

newArray[1] = 'testtest';

console.log(newArray);
console.log(oldArray);

// Spread оператор появился в es6 для массивов и в es9 для объектов
// Оператор разворота, так назвали, т.к. он разворачивает структуру и превращает в набор данных
// Еще один способ поверхностного копирования

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook']; // такой синтаксис берет массивы и разворачивает их элементы в новом

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // передает элементы массива как аргументы

const arr = ['a', 'b'];

const newArr = [...arr];

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

newQ.two = 5;

console.log(q);
console.log(newQ);
