'use strict';

// Параметры документа, окна и работа с ними

// document - страница
// window - окно
// screen - монитор

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

// const width = box.clientWidth; // ширина без бордера и маргинов
// const height = box.clientHeight; // высота без бордера и маргинов

// console.log(width, height); // 383 333 // Например, ширина должна быть 420, но 37px съедает скролл, т.е. он не учитывается, также box-sizing: border-box;

// const width = box.offsetWidth; // ширина с учетом бордера, сколла и маргинов
// const height = box.offsetHeight; // высота с учетом бордера, сколла и маргинов

// console.log(width, height); // 400 350

const width = box.scrollWidth; // ширина с учетом невидимой части в скролле
const height = box.scrollHeight; // высота с учетом невидимой части в скролле

console.log(width, height); // 383 1352 // Полоса прокрутки не включается

// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
// });

// scrollTop, scrollLeft - сколько есть отлистанного контента, еще и можно изменить значение

btn.addEventListener('click', () => {
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); // DOMRect {x: 760, y: 50, width: 400, height: 350, top: 50, …} // Получаем все координаты элемента
// Рассчитывается не как в css, в js right: 1000, то это значение высчитывается от правого верхнего угла до левой границы элемента

console.log(box.getBoundingClientRect().top); // 50


// computed стили - те стили, которые уже были применены к элементу

const style = window.getComputedStyle(box); // Идут из css

console.log(style.display); // block


// Метрики глобальных объектов

console.log(document.documentElement.clientWidth); // document - не имеет такое свойство, нужно обращаться через documentElement

console.log(window.scrollBy(0, 400)); // От текущего положения на 400 px вниз
console.log(window.scrollTo(0, 400)); // От начала страницы на 400 px вниз
