'use strict';

// Оператор нулевого слияния (Nullish, ??) ES11

const box = document.querySelector('.box');

// const newHeight = 100;
// const newWidth = 400;

const newHeight = 0; // ниже вернется 200, т.к 0 вернет false
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h || 200}px`; // Значение по умолчанию, h || 200, вернет первое правдивое значение
    elem.style.width = `${w ?? 200}px`; // Позволит поставить 0

    elem.innerHtml = w ?? 200 * w ?? 200; // Сначала выполнится умножение, т.к. приоритет у ?? ниже, чем у умножения
    // нужно учитывать, и можно обернуть в скобки
}

changeParams(box, newHeight, newWidth);
// Если мы вызовем функцию закомментируея передаваемые в нее переменные,
// то возникнет ошибка, т.к. такких переменных не будет

// let userName;
// let userName = null;
let userName = '';

console.log(userName ?? 'User');
// Оператор нулевого значения работает только с null и undefined,
// а не со всеми 5 значениями, которые false в логическом контексте

// Нюансы Nullish оператора
let uName;
let uKey;

console.log(uName ?? uKey ?? 'User'); // Вернет User
// Этот оператор можно использовать и в таком ключе
// У ?? одинаковый приоритет с оператором || - 4

// console.log(uName && uKey ?? 'User'); // Выдаст ошибку
// Нулиши не могут использоваться внутри одного выражения с && и ||
