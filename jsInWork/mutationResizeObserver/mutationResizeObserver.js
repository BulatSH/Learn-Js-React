'use strict';

// MutationObserver, ResizeObserver и contenteditable
// Нужен для отслеживания изменения элемента

// contenteditable - атрибут в html - позволяет включать редактирование страницы пользователем

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecords => {
    // Передаем колбэк функцию с аргументом MutationRecords - список изменений
    console.log(MutationRecords);
});

observer.observe(box, {
    childList: true
}); // 1 аргумент, элемент, за которым мы будем следить, 2 аргумент, конфигурация с теми настройками, за которыми нам нужно следить
// https://developer.mozilla.org/ru/docs/Web/API/MutationObserver - все свойства конфига
// При добавлении или очистке текстового узла в браузере консоль выводит отслеживание
// Выводит массив с данными об изменениях
// https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord - документация

// 1) Observer срабатывает после изменений
// 2) Это все асинхронная операция

observer.disconnect(); // Удаление обсервера

// https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver - ResizeObserver отслеживает изменение размеров элементов

