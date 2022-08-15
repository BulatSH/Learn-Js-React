'use strict';

const num = 50;

// (num === 50) ? console.log('Ok') : console.log('No'); 
// Тернарный оператор (Тернарный, потому что участвуют 3 оператора), есть бинарные операторы: 4+4 и унарные +4

switch (num) { // передаем то, что сравниваем; всегда строгое сравнение
    case 49:
        console.log('No');
        break;
    case 100:
        console.log('No');
        break;
    case 50:
        console.log('Yes');
        break;
    default: 
        console.log('Не в этот раз');
        break;
}
