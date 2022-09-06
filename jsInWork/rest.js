'use strict';

// Rest оператор и параметры по умолчанию (ES6)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters - документация

// rest (оставшиеся элементы) - отдельные элементы объединяет объединяет в один массив (spread наоборот)

const log = function (a, b, ...rest) { // ...rest всгеда пищется последним, можно называть как угодно // rest параметр не поддерживает дефолтные значения
    console.log(a, b, rest); // basic rest [ 'operator', 'usage' ]
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble (number, basis = 2) { // Значение по умолчаню, лучше так
    // basis = basis || 2; // Значение по умолчанию

    console.log(number * basis);
}

calcOrDouble(3);
