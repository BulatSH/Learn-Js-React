'use strict';

// ООП и прототипно ориентированное наследование

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));
// Строка - примитивный тип данных, но если применить к строке свойство или метод, то
// JS сначала оборачивает строку в объект, применяет к нему действия, и обратно возвращает строку

console.dir([1, 2, 3]);
// Создаем экземпляр массива, любые конструкции прототипно наслежуются из обеъкта __proto__

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

// const john = {
//     health: 150,
// };

// john.__proto__ = soldier; // устаревший способ, лучше такое не использовать

// Object.setPrototypeOf(john, soldier); // Устанавливаем протип для Джона от солдата

const john = Object.create(soldier); // Создаем новый объект Джон, который будет прототипно наследоваться от soldier


console.log(john.armor); // вернет 100, объект john является прототипом объекта soldier
john.sayHello();
