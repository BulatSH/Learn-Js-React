'use strict';

// Скрипты и время их выполнения. setTimeout и setInterval

// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello'); // Третий и дальше аргументы передастся в анонимную callback функцию

// const timerId = setTimeout(logger, 2000); // асинхронная функция
// работает и без объявления переменной
// в переменную передается числовой идентификатор

// clearInterval(timerId); // останавливает setTimeout

// function logger () {
//     console.log('text');
// }

// console.log(timerId);

const button = document.querySelector('.btn');
let timerId,
    i = 0;

// button.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000); // Локальная перменная
//     timerId = setInterval(logger, 500); // повторяется каждые 0.5 секунды
//     // Здесь есть нюанс, если функция logger выполняется долго, например 3 секнуды,
//     // то setInterval не будет ждать 0,5 секунд после выполнения,
//     // а выполнится сразу, для решения этой проблемы используют
//     // рекурсивный вызов setTimeout
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log () {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500); // Сначала выполнятся все действия, потом метод подождет 0,5 секунд и так по новой


function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

button.addEventListener('click', myAnimation);
