// Динамическая типизация

'use string';

// To String

// 1)
console.log(typeof(String(null))); // вернет string
console.log(typeof(String(4))); // вернет string

// 2) Конкатенация
console.log(typeof(5 + '')); // вернет string
console.log(typeof(undefined + '')); // вернет string

const num = 5;

console.log('https://vk.com/catalog' + num); // вернет https://vk.com/catalog5

const fontSize = 26 + 'px'; // (интерполяция), вернет 26px

// To Number

// 1
console.log(typeof(Number('4'))); // вернет number

// 2, Унарный плюс
console.log(typeof(+'5')); // вернет number

// 3
console.log(typeof(parseInt('15px', 10)));  // вернет number

let answ = +prompt('Hello', ''); // возвращает string, но унарный +, если пользователь введет число, вернет number

// Все, что мы получаем от пользователя, всегда будет строкой

// To Boolean

// 0, '', null, undefined, NaN; - всегда будет false

// 1
let switcher = null;

if (switcher) { // false
    console.log('Working');
}

switcher = 1;

if (switcher) { // true
    console.log('Working');
}

// 2
console.log(typeof(Boolean('4'))); // boolean

// 3
console.log(typeof(!!'4')); // boolean
