'use strict';

// Напишите функцию, которая вычисляет факториал

function factorial(n) {
    if (n <= 0) {
        return 1;
    } else if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'Введите целое число';
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
