// 'use strict';

// Сборщик мусора и утечки памяти

// Сборщики мусора - это подпрограмма, которая отслеживает выделения, и использовение памяти компьютера, и при необходимости освобождает память
// https://learn.javascript.ru/garbage-collection

// Утечка памяти
// Например
// function func() {
//     smth = 'string';
//     // Если мы создаем перменную без let, const и если в js не использует use strict,
//     // то перменная создастся глобально, и не сможет быть удалена
//     // smth = 'string'; - равнозначна window.smth = 'string';
// }

// const someRes = getData();
// const node = document.querySelector('.class');
// setInterval(function () {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);
// Забытые таймеры тоже могут оставить у себя ссылки, и тоже будет утечка памяти
// К примеру, если мы здесь удалим node из DOM дерева, то ссылка все равно останется
// Не нужно забывать останавливать ненужные таймер

// Обработчики событий на несуществующих элементах
// Правда, современные браузеры автоматически их удаляют
// в JQ или React это тоже реализовано, больше подходит для нативного js

// // Замыкание, тоже может быть утечка памяти
// function outer () {
//     const potentialHugeArray = [];

//     return function inner () {
//         potentialHugeArray.push('Hello');
//         console.log('Hello');
//     };
// }

// const sayHello = outher(); // в sayHello содержится функция inner()
// и массив все время будет находиться в пямяти, т.к. сохранится ссылка на него

// Ссылки на DOM элементы, тоже может быть утечка памяти
function createElement () {
    const div = document.createElement('div');
    div.id = 'test';
    return div;
};

const testDiv = createElement();

document.body.append(testDiv);

function deleteElement () {
    document.body.removeChild(document.getElementById('test'));
};

deleteElement(); // removeChild ориентируется не на то, что мы создали div сами,
// а на DOM. И получается, что эта переменная удалится с DOM, но останется в js.
// Можно поместить метод append в фукнцию создания элемента,
// и как только функция отработает, все, что внутри нее, удалится
