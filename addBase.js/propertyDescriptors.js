'use strict';

// Дескрипторы свойств и полезные методы объектов

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// У каждого из свойств объекта есть еще и специальные атрибуты, их еще называют флагами и всего их три

// 1) writable - если этот параметр будет стоять true, то свойство объекта можно изменить, если false, то только для чтения
// 2) enumerable - если этот флаг стоит в true, то свойство будет перечисляться в циклах, если нет, то свойство будет их игнорировть
// 3) сщташпгкфиду - если здесь стоит true, то свойство можно будет удалить, а атрибуты можно изменить, если false - нельзя
// Для всех создававемых нами свойств они по умолчанию стоят в позиции true

// console.log(Object.getOwnPropertyDescriptor(user, 'name')); // выведет { value: 'Alex', writable: true, enumerable: true, configurable: true }
// Принимает два аргументы, 1 - объект, с которым мы взаимодействуем, 2 свойство, флаги которого хотим получить

// Метод изменения параметров
// Object.defineProperty(user, 'name', {writable: false}); // Мы убрали возможно редактировать это свойство
// 1 аргумент - объект, 2 - свойство, 3 - параметр, который хотим изменить
// user.name = 'Ivan'; // Выведет Cannot assign to read only property 'name' of object '#<Object>' - можем только читать, но не изменять

// С помощью метода defineProperty() можно создать свойство объекта, также можно задавать значения флагам, но если третий аргумент будет пустым,
// то все значания флагов будут false, это важно отличие от обычного создания свойств
// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender')); // Выведет
// {
//     value: 'male',
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// Создаем свойство, которое нельзя изменить, только для чтения
// Object.defineProperty(user, 'birthday', {writable: false}); // Теперь не можем перезаписывать дату рождения
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
// user.birthday = '10'; // Выведет ошибку, только чтение
// Object.defineProperty(user, 'birthdayTwo', {value: prompt('Date?', ''), enumerable: true, configurable: true}); // Свойство запишется в объект и изменить мы его уже не сможем

// Создание только перебора данных
// for (let key in user) {
//     console.log(key); // Функция тоже выводится
// }
// name
// surname
// birthday
// showMyPublicData
// Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
// for (let key in user) {
//     console.log(key); // теперь выводятся только данные
// }

// Создаем свойство, которое нельзя ни удалить из объекта, ни изменить его флаги и значения, например Math.PI
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// console.log(user);
// Если мы установим флаг configurable в false, то это дорога в один конец, после этого мы не сможем ни изменить, ни удалить свойство

// Object.defineProperties(user, { // Позволяет изменять сразу все
//     name: {writable: false},
//     surname: {writable: false}
// });


// Полезные методы объекта

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object - методы объектов

// Объкты не равны друг другу, даже если у них одинаковое содержимое, но есть метод, который позволяет сравнивать содержимое объектов: Object.is();

// Object.keys() - возвращает массив перечисляемых ключей свойств https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Object.values() - возвращает массив перечисляемых значений свойств https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// Object.entries() - возвращает массив перечисляемых свойств https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const date = Symbol('date');

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    [date]: '20/24/2021',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

for (let key in user) {
    console.log(key); // Метод перебора игнорирует символы
}

console.log(Object.getOwnPropertyDescriptor(user, date)); // Выведет флаги символа, все флаги стоят со значением true, хотя в цикле он не перечисляем
// Это текхнические нюансы самого символа
