'use strict';

// Контекст вызова. This - это то, что окружает функцию и в каких условиях она вызывается
// https://tproger.ru/translations/javascript-this-keyword/ - большой гайд по this

// function showThis () {
//     console.log(this); // undefined
//     // Ссылается на глобальный объект window без строгого режима
// }

// showThis();
// 1) Обычная функция: this = window, если стоит 'use strict' = undefined

// function showThis (a, b) {
//     console.log(this); // undefined
//     function sum () {
//         console.log(this); // undefined - если даже контекст вызова изпользуется в функции внутри функции сам контекст не меняется, будет undefined в 'use strict'
//         // return this.a + this.b; // Cannot read properties of undefined (reading 'a')
//         return a + b; // Используем замыкание
//     }

//     console.log(sum()); // 9
// }

// showThis(4, 5);

// 2) Если мы используем метод внутри объекта, то контекст вызова всегда будет ссылаться на этот объект
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this); // { a: 20, b: 15, sum: [Function: sum] }
//         function shout () {
//             console.log(this); // undefined
//         }

//         shout(); // Простой вызов функции
//     }
// };

// obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объекта
// function User (name, id) {
//     this.name = name; // this это объект, здесь записывается свойство/ключ в объект
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`); // this.name ссылается на тот объект, который мы создадим
//     };
// }

// const ivan = new User('Ivan', 28); // создаем объект

// 4) Ручное присвоение контекста: call, apply, bind
// function sayName (surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); // Эти функции делают одно и то же, разница лишь в синтаксисе, в call аргументы передаются через запятую
// sayName.apply(user, ['Smith']); // Эти функции делают одно и то же, разница лишь в синтаксисе, здесь аргументы передаются в массиве
// // { name: 'John' }
// // John
// // { name: 'John' }
// // John

// function count (num) {
//     return this * num;
// }

// const double = count.bind(2); // bind создает новую функцию и под нее подвязывает контекст

// console.log(double(3)); // 6
// console.log(double(13)); // 26

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log(this); // button // Получаем саму кнопку, контектом вызова будет сам элемент, на котором произошло событие
//     // почти всегда this это то же самое что и event.target

//     this.style.backgroundColor = 'red';
// });

// У стрелочной функции нет своего контекста вызова, она всегда его будет брать у своего родителя

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => { // стрелочная функция берет контекст у своего родителя, в данном случае из метода sayNumber, а у метода контекст ссылается на объект, получается, что стрелочная функция тоже ссылается на объект
            console.log(this); // { num: 5, sayNumber: [Function: sayNumber] }
            console.log(this.num); // 5
        };

        say();
    }
};

obj.sayNumber();


const double = a => a * 2; // Стрелочную функцию можно укоротить

console.log(double(4)); // 8


const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    // this.style.backgroundColor = 'red'; // Cannot set properties of undefined (setting 'backgroundColor')
    // контекст вызова потерялся, когда она обращается к this, то получает undefined
    e.target.style.backgroundColor = 'red';
});
