'use strict';

// WeakMap и WeakSet служат для оптимизации кода


// WeakMap

// let user = {
//     name: 'Ivan'
// };

// user = null;

// console.log(user); // null, объект удален из памяти, т.к. на него нет больше ссылок

// const arr = [user];
// user = null;

// console.log(user);
// console.log(arr[0]); // { name: 'Ivan' } - объект остается доступным
// Пока массив существует, объект тоже будет существовать в памяти

// let map = new Map();
// map.set(user, 'data');

// user = null;

// console.log(map.keys()); // [Map Iterator] { { name: 'Ivan' } }
// Точно такая же ситуация, как с массивам

// Здесь мы переходим к структуре под названием WeakMap - слабая карта
// У нее есть свои особенности
// 1) В ней ключами могут быть только объекты
// 2) Если нет ссылки на этот объект, и он существует только внутри WeakMap, то этот объект будет удален с WeakMap
// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map.has(user)); // false
// console.log(map); // В браузере выведет No properties - нет никаких свойств
// WeakMap { <items unknown> } - в консоли
// <items unknown> - означает, что в текущий момент времени интерпретатор не омжет определить, что находится внутри
// Получается, что это динамическая структура данных

// Отсюда идут ограничения при работе с WeakMap
// Таких методов, как keys(), values(), entries() - не существует
// Перебрать с for of тоже не можем

// set, get, delete, has - доступны

// let cache = new WeakMap();

// function cacheUser (user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }

//     return cache.get(user);
// }

// let lena = {
//     name: 'Lena'
// };

// let alex = {
//     name: 'Alex'
// };

// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena)); // false
// console.log(cache.has(alex)); // true


// Коллекция WeakSet аналогична Set, только в WeakSet мы можем добавлять только объекты, не примитимы
// Объект присутствует в множетсве только до тех пор, пока он доступен где-то еще
// Метод WeakSet поддерживает методы add, has, delete
// size, keys, get у него нет
// WeakSet не является перебираемой

let messages = [
    {
        text: 'Hello',
        from: 'John'
    },
    {
        text: 'World',
        from: 'Alex'
    },
    {
        text: '...',
        from: 'M'
    },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]); // Такой же элемент не сможем добавить, WeakSet аналогична Set

messages.shift(); // false, т.к. мы удалили объект, первый элемент массива, поэтому с WeakSet тоже удалится
console.log(readMessages.has(messages[0])); // true

// Минус WeakSet том, что мы не можем ни перебрать, ни получить все прочитанные сообщения или одно, мы можем лишь проверить
