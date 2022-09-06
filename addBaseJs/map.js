'use strict';

// Специфические структуры данных
// Map - карты

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// console.log(user);
// Важно! Ключи в объектах могут быть только строками или символами. Даже этот ключ name все равно что 'name'

// const user = {
//     4: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };

// console.log(typeof(Object.keys(user)[0])); // Выведет string, если даже мы записываем в ключ свойства число, оно преобразовывается в строку

// const obj = {
//     {}: 'Smith', // Выдаст синтаксическую ошибку
// };


// Что делать, если в ключ мы хотим записать как, например, число? Для этого и нужен map
// Map специфическая структура данных, похожая на объект, только у них вместо свойст может быть использовано все, что угодно: объекты, массивы, фукнции и т.п.
const shops = [
    {rise: 500},
    {oil: 200},
    {bread: 50}
];

// const map = new Map(); // Называются специфическими, т.к. у них есть свои методы для работы
// map.set() - устанавливает ключ значение
// map.set(shops[0], 5000); // Два аргумента: ключ - значение
// map.set(shops[1], 15000); // Можно так же воспользоваться циклом, где в 0 передать i
// map.set(shops[2], 25000); // set обратно возвращает map
// // Можно цепочкой map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);
// console.log(map);
// Map(3) {
//     { rise: 500 } => 5000,
//     { oil: 200 } => 15000,
//     { bread: 50 } => 25000
// }

// const budget = [5000, 15000, 25000];

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]); // Можно так
// });

// console.log(map.get(shops[0])); // Получаем значение ключа // 5000
// console.log(map.has(shops[0])); // Проверка на наличие // true

// map.delete(key); // Удаляем свойство
// map.clear(); // Полностью очищает карту
// map.size; // Свойтсво, количество элементов внутри карты

// console.log(map);
// Map(3) {
//     { rise: 500 } => 5000,
//     { oil: 200 } => 15000,
//     { bread: 50 } => 25000
// }
// Консоль отображает вывод как объект, с объектами,
// но внутри вся карта - это массив массивов

const map = new Map([[
    {paper: 400}, 8000 // Можно задать начальное значение // массив с массивами
]]);

const budget = [5000, 15000, 25000];

shops.forEach((shop, i) => {
    map.set(shop, budget[i]); // Можно так
});

// console.log(map);


// Перебор Map
// 1) map.keys() - по ключам
const goods = [];
for (let shop of map.keys()) { // Map итерируемый
    // console.log(shop);
    goods.push(Object.keys(shop)[0]);
};
console.log(goods); // Массив со всеми товарами
// { paper: 400 }
// { rise: 500 }
// { oil: 200 }
// { bread: 50 }
// console.log(map.keys()); // Массив объектов

// 2) for of - по значениям
for (let price of map.values()) {
    console.log(price);
}
// 8000
// 5000
// 15000
// 25000

// 3) map.entries() - получаем массив с массивами свойство и значение
for (let price of map.entries()) {
    console.log(price);
}

// Т.к. это массив можно деструктуризировать
for (let [shop, price] of map.entries()) {
    console.log(price, shop);
}
// 8000 { paper: 400 }
// 5000 { rise: 500 }
// 15000 { oil: 200 }
// 25000 { bread: 50 }

// 4) forEach
// map.forEach((value, key, map) => {
//     console.log(key, value);
// });
// { paper: 400 } 8000
// { rise: 500 } 5000
// { oil: 200 } 15000
// { bread: 50 } 25000

// Еще одна полезная вещь
// Мы можем создать карту из объекта и наоборот

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user)); // entries массив массивов
console.log(userMap);
// Map(4) {
//     'name' => 'Alex',
//     'surname' => 'Smith',
//     'birthday' => '20/04/1993',
//     'showMyPublicData' => [Function: showMyPublicData]
// }

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj); // Массив массивов преобразует в объект
// {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: [Function: showMyPublicData]
// }

// Отличия карт от объектов
// У карт (Map) ключи могут быть чем угодно, у объекта только строками или Symbol
// Порядок свойств в картах всегда такой, как мы добавляли, у объектов нет четкого порядка
// При создании пустой карты в ней ничего не будет содержаться, наследуемые свойства тоже, в пустом объекте будут, это может стать проблемой, если мы случайно перезапишем эти свойства
// Карты легко перебирать
// Размер карты легко получить через свойство size
