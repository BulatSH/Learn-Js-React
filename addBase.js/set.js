'use strict';

// Специфические структуры данных
// Set - особый вид коллекций, по типу массива, где каждое значение может повторяться только один раз
// Проще массив, где каждое значение встречается только однажды

// const arr = [1, 1, 2, 2, 4, 5, 6, 5];

// const set = new Set(arr);
// console.log(set);
// Выведет Set(5) { 1, 2, 4, 5, 6 }

const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set = new Set(arr);
console.log(set);

// Методы Set
set.add('Ivan'); // Возвращает сам массив, set.add('Ivan').add('Oleg'); - поэтому можно так
set.add('Oleg');
console.log(set); // Set(4) { 'Alex', 'Ann', 'Oleg', 'Ivan' }

// Можно это реализовать вручную у массива, но с Set не надо ничего придумывать и у Set это работает лучше и оптимизированнее
// set.delete(value);
// set.has(value); // Проверка наличия
// set.clear(); // Полная очистка
// set.size // размер Set, набора данных

for (let value of set) console.log(value);
// Alex
// Ann
// Oleg
// Ivan

// set.forEach((value, valueAgaing, set) => { // valueAgaing - значение снова, сделано для совместимости
//     console.log(value, valueAgaing);
// });
// Alex Alex
// Ann Ann
// Oleg Oleg
// Ivan Ivan

console.log(set.values()); // [Set Iterator] { 'Alex', 'Ann', 'Oleg', 'Ivan' }
console.log(set.keys()); // [Set Iterator] { 'Alex', 'Ann', 'Oleg', 'Ivan' }
// Ключей как таковых у Set нет, этот метод присутствует для обратной совместимости с Map
console.log(set.entries()); 
// [Set Entries] {
//     [ 'Alex', 'Alex' ],
//     [ 'Ann', 'Ann' ],
//     [ 'Oleg', 'Oleg' ],
//     [ 'Ivan', 'Ivan' ]
// }
// Тоже для обратной совместимости

// Еще часто реализовывают функцию помощник, которая фильтрует любой массив
function unique (arr) {
    // return new Set(arr);
    return Array.from(new Set(arr)); // Создаем массив из набора данных с уникальными значениями
}

console.log(unique(arr)); // [ 'Alex', 'Ann', 'Oleg' ]
