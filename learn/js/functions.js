'use strict';

function showFirstMessage (text) {
    console.log(text);
}

showFirstMessage('Hello, World!');

// Замыкание функции - это сама функция, вместе со всеми внешними переменными, которые ей доступны.
// Unreachable code - код, после return, не выполнится

// Function declaration - создается до начала выполнения скрипта, можно вызвать перед объявлением

console.log(calc(2, 7));

function calc (a, b) {
    return (a + b);
}

console.log(calc(3, 4));

// Function expression - создается только тогда, когда доходит поток кода, можно вызвать только после объявления

const logger = function () {
    console.log('Hello');
};

logger();

// Стрелочные функции () => - не имеет своего контекста this

const calculate = (a, b) => a + b;

// Просто return возвращает undefined, если не пишем return, то по умолчанию в конце функции стоит: return: undefined;
// Функция всегда что-то возвращает
// return
// 5 * 4 - после return нельзя делать перенос строки, т.к. js сам ставит после return ;


function getMathResult(arg, multiple) {
    let result = arg;
    
    for (let i = 1; i < multiple; i++) {
        if (typeof(multiple) !== 'number' || multiple <= 0) {
            return result;
        }
        result += `---${(i + 1) * arg}`;
    }

    return result;
}

console.log(getMathResult(10, 5));
console.log(getMathResult(10, '5'));
