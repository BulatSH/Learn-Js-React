'use strict';

// Живые коллекции и полезные методы

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// console.log(boxesQuery); // NodeList // Есть позелные методы, например, forEach
// console.log(boxesGet); // HTMLCollection
// Сформированы по разному
// console.log(document.body.children); // HTMLCollection

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     // document.body.append(div);

//     boxesGet[boxesGet.length] = div; // Вернет ошибку, напрямую работать с коллекцией нельзя, это запрещено синтакисом js
// }

// console.log(boxesQuery); // Получаем псевдомассив с тремя элементами, получаем состояние элементов на момент вызова команды querySelectorAll - статичная коллекция
// console.log(boxesGet); // Получаем псевдомассив с одним элементом, отслеживает все изменения в DOMдереве и дает текущий результат - живая коллекция
// // Живые коллекции отображют текущее состояние DOM дерева

// // Иногда возникает необъодимость работать с живыми коллекциями
// console.log(Array.from(boxesGet)); // Создаем массив из массивоподобного объекта // образовывается обычный статичный массив

boxesQuery.forEach(box => {
    if (box.matches('.this')) { // matches, определение по селектору: тег, класс, айди и тд
        console.log(box);
    }
});

console.log(boxesQuery[0].closest('.wrapper')); // closest находит родитель по селектору // необязательно первый родитель, может быть сколько угодно вложенностей
// Если не находит, то получаем null
