'use strict';

// Есть 3 способа назначить обработчкик событий

// 1) html атрибут
// <button onclick="alert('Click')" id="btn">Нажми меня</button> // к событию в html добавляется on
// Событие click, обратотчик "обработчик"

// 2) Использование свойства DOM дерева
// const btn = document.querySelector('button');
// btn.onclick = function() { // Свойство DOM дерева onklick - тоже добавляется on
//     alert('Click');
// };
// Есть проблема с этим способом, если использовать это событие два или более раз, то выполнится только последнее
// btn.onclick = function() {
//     alert('Click');
// };
// btn.onclick = function() {
//     alert('Click Second');
// };
// Также этот обработчик события потом нельзя удалить

// 3) 
// const btn = document.querySelector('button'),
//     overlay = document.querySelector('.overlay');
// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('mouseenter', (event) => { // Callback функция будет выполняться каждый раз, когда мы будем наводиться на элемент
//     // console.log(event);
//     // event.target.remove();
//     // console.log('Hover');
// });
// Иногда нам нужно получить какие-то данные элемента, которым мы взаимодействуем, что за событие произошло
// Что за элемент используется, какое событие произошло и т.д.
// Для этого есть специальный аргумент event, который передается в callback фукцию в качестве первого аргумента
// Обработчик события можно удалить, для этого нужно использовать ту же функцию, которую мы назначали,
// поэтому нужно вынести функцию, которая передается в качестве второго аргумента, вынести в отдельную переменную
// let i = 0;

// const deleteElememt = (event) => {
//     // console.log(event.target);
//     console.log(event.currentTarget);
//     console.log(event.type);
//     // i++;
//     // if (i === 1) {
//     //     btn.removeEventListener('click', deleteElememt);
//     // }
// };

// btn.addEventListener('click', deleteElememt);
// overlay.addEventListener('click', deleteElememt);
// Есть еще такое важное понятие как всплытие события, не путать с всплытием перменной hoisting
// Когда есть два элемента, один родитель другого, при этом на них назначен один и тот же обработчик события
// <button id=​"btn">​Нажми меня​</button>
// click
// <button id=​"btn">​Нажми меня​</button>​
// click
// Событие сначала сработало для дочернего элемента, потом для родительского, это и есть всплытие событий,
// сначала срабатывает на вложенном элементе, потом по иерархии поднимается вверх
// Можно подправить это поведение - event.currentTarget

const link = document.querySelector('a');

link.addEventListener('click', (event) => { // event - объект события
    event.preventDefault(); // Можно отменять в конце фукнции вернув false, но это устаревший метод

    console.log(event.target);
});


const btns = document.querySelectorAll('button');

// btns.forEach(btn => {
//     btn.addEventListener('click', (event) => {
//         console.log(event.target);
//     });
// });

// У addEventListener существует возможность передать опции в качестве третьего аргумента - target.addEventListener(type, listener, {options});
// https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event.target);
    }, {once: true}); // once: true использовать обработчик только один раз
});
