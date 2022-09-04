'use strict';

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// отличия for in и for of

// for in при использовании на объекте, массиве или строке будет работать с каждой сущностью, по порядку, которая является перечисляемой, то есть у которой стоит enumerable: true
// for (const key in user) {
//     console.log(user[key]);
// }
// Выведет
// Alex
// Smith
// 20/04/1993
// [Function: showMyPublicData]

// Т.к. массивы - это частный случай обектов, то здесь тоже можно использовать for in
// const arr = ['a', 'b', 'c'];

// for (const key in arr) {
//     console.log(arr[key]);
// }
// Выведет
// a
// b
// c

// Также можно перебирать строку, строка - это набор символов
// const str = 'string';
// for (const key in str) {
//     console.log(str[key]);
// }
// Выведет
// s
// t
// r
// i
// n
// g

// Важно! for in на массивах и строках может перебирать не по порядку, лучше его не использовать на массивах и строках

// В ES6 стандарте была введена конструкция for of, она проходится по значениям перебираемого объекта

// for (const key in arr) {
//     console.log(arr[key]); // -> a b c
// }

// // for (const key of arr) {
// //     console.log(arr[key]); // -> undefined
// // }

// // Когда мы работаем с in мы по ключу получаем значение, когда используем for of в key будет лежать сразу готовое значение
// for (const key of arr) {
//     console.log(key); // -> a b c
// }


const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

// for (const key of user) {
//     console.log(key); // user is not iterable - то есть объект не перебираемый
// }
// Перебираемый или итерируемый объект, это тот, который мы можем использовать в for of

// Строка и массив - это итерируемые объекты, а объект - нет. Это определяется тем, есть ли у сущности Symbol.iterator; - встроенный технический символ
// console.dir(arr); // Выводит что-то в качестве объекта
// Array -> prototype -> Symbol(Symbol.iterator): function values() <- Symbol.iterator - значит, что объект перебираемый
// Перебираемые объекты: строки, массивы, типизированные масивы, set, map и DOM коллекции
// Преимущества for of
// Строгое соответствие порядков в переборе
// Исключение всех лишних свойств

const arr = ['a', 'b', 'c'];
Array.prototype.someMethod = function () {};

for (const key in arr) {
    console.log(arr[key]); // Выведет
    // a
    // b
    // c
    // [Function (anonymous)]
}

for (const key of arr) {
    console.log(key); // Выведет
    // a
    // b
    // c
    // Изчезает лишнее свойство, которое может быть унаследовано
}


// Что из себя представляет Symbol.iterator?
// Как его добавить к обычному объекту?

// Итератор - это метод, который возвращает объект с методом next
const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function () {
        console.log('Hello');
    }
};

// Чтобы сделать объект итерируемым, нам нужно добавить в объект метод с именем Symbol.iterator
salaries[Symbol.iterator] = function () { // Прописываем в ручную, такая логика у итераторов
    return {
        // Можно добавлять что-то свое
        current: this.john,
        last: this.ann,
        next () {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {
                    done: false,
                    value: this.current
                };
            } else {
                return {done: true}; // for of прекратит свою работу
            }

            // Глубь языка
            // { 
            //     done: true,
            //     value: 123
            // }
        }
    };
};
// Когда наш цикл for of будет запускаться на объекте salaries, он вызывает метод, который мы прописали выше 1 раз
// И этот метод должен вернуть нам iterator, то есть объект с методом next
// Как раз таки, если этот метод вызывается, то есть начинает работать for of,
// И при этом не возвращается метод объект с методом next, то выводится ошибка: этот объект не итерируемый

// for (let res of salaries) {
//     console.log(res);
// }
// Выведет
// 1000
// 1500
// 2000
// 2500
// 3000
// 3500
// 4000
// 4500
// 5000

// Такой итератор можно вызывать и в ручную
const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
// Мы в эту переменную получим объект iterator с методом next и привязкой к объекту
// { done: false, value: 1000 }
