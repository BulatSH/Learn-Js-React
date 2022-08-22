'use strict';

// Объекты в JS - это ассоциативные массивы

// const obj = new Object(); - создавать объекты можно и так, но лучше с {}

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options.name);

// delete options.name; // Удаляет свойство

// console.log(options);

// for (let key in options) { // Перебирает свойства объекта // Есть еще 'let key of options', но с объектами это не работает
//     console.log(`Свойство ${key} имеет значение: ${options[key]}`);
// }
// Выведет 
// test
// { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }
// Свойство width имеет значение: 1024
// Свойство height имеет значение: 1024
// Свойство colors имеет значение: [object Object] - [object Object] строковое представление объекта
// JS не может объект превратить в строку, поэтому выводит такую структуру

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение: ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение: ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

// console.log(options['colors']['border']);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object - документация

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

// options.makeTest();

// Деструктуризация объекта

const {border, bg} = options.colors; // - дестркуктуризация // ES6 стандарт JS
console.log(border);

// console.log(Object.keys(options).length); // Возвращает массив со всеми ключами первого уровня

// JS - объектно ориентированный язык, все сущности, которые в нем есть, сводятся к объектам (? прототипно ориентированный)

// console.dir(String);
