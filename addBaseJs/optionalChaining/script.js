'use strict';

// console.log(uName ?? uKey ?? 'User');

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block); // Выведет null, т.к. этого элемента нет в html

console.log(block.textContent); // Выведет ошибку, т.к. причина выше

// if (block) {
//     console.log(block.textContent); // Так код пойдет дальше
// }

console.log(block?.textContent); // Оператор ? проверяет значение слева от себя, если оно имеет значение либо undefined, либо null, то вернет undefined
// Но есть нюанс, это работает только на чтение свойства
// То есть такое не сработает и выдаст ошибку: block?.textContent = '123'; - если в undefined пытаемся записать строку, то ошибка

console.log(1 + 2); // Не выполнится, т.к. выше была ошибка

const userData = {
    name: 'Ivan',
    age: null,
    say: function () {
        console.log('Hello');
    }
};

// console.log(userData.skills.js); // Выдаст ошибку, т.к. поля js не существует

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js); // Так код пойдет дальше
// }

console.log(userData.skills?.js); // Оператор ? проверяет значение слева от себя, если оно имеет значение либо undefined, либо null, то вернет undefined
console.log(userData?.skills?.js); // Так тоже сработает
// Если userData не будет как переменной, то мы получим ошибку

userData.say();
// userData.hey(); // Выдаст ошибку
userData.hey?.(); // Так сработает, с квадратными скобками тоже сработает
