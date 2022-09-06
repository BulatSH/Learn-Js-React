'use strict';

// JSON формат передачи данных, глубокое клонирование объектов
// js object notation
// Используется для передачи и хранения данных
// JSON - это набор пар ключ/значение

const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// console.log(JSON.stringify(person)); // метод stringify превращает объект в json // {"name":"Alex","tel":"+744444444"} // Важно! Все сущности записаны в двойные кавычки
// console.log(JSON.parse(JSON.stringify(person))); // метод parse превращает JSON в объект // { name: 'Alex', tel: '+744444444' } // Можно использовать как угодно
// До JSON была xml, есть много онлайн конвертаторов, если нужно, только JSON более удобнее, современнее и весит меньше

// Глубокие копии объектов
// Как раз таки они создаются с помощью JSON
const clone = JSON.parse(JSON.stringify(person)); // Создает полностью глубокий клон, со всеми свойствами и методами внутри
clone.parents.mom = 'Ann';
console.log(person);
// {
//     name: 'Alex',
//     tel: '+744444444',
//     parents: { mom: 'Olga', dad: 'Mike' }
// }
console.log(clone);
// {
//     name: 'Alex',
//     tel: '+744444444',
//     parents: { mom: 'Ann', dad: 'Mike' }
// }
