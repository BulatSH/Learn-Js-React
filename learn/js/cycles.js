'use strict';

let num = 50;

// while (num <= 55) { // первый вид циклов
//     console.log(num);
//     num++;
// }

// do { // второй вид циклов
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break; // завершает цикл, когда достигается условие
//         continue; // пропускается шаг, когда достигается условие, и продолжается дальше
//     }
//     console.log(i);
// }

// for (let j = 0; j < 3; j++) {
//     console.log(j);
//     for (let k = 0; k < 3; k++) {
//         console.log(k);
//     }
// }


// *
// **
// ***
// ****
// *****
// ******

const lines = 5;
let result = ''; // треугольник

for (let i = 0; i <= lines; i++) {
    for (let k = 0; k < lines - i; k++) {
        result += ' ';
    }

    for (let j = 0; j <= i; j++) {
        if (j === 0) {
            result += '*';
        } else {
            result += '**';
        }
    }
    
    if (lines !== i) {
        result += '\n';
    }
}

console.log(result);

// point: for (let i = 0; i < 3; i++) { // point - метка
//     console.log(`lvl 1: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`lvl 2: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) {
//                 continue point; // с break тоже работает
//             }
//             console.log(`lvl 3: ${k}`);
//         }
//     }
// }

let rangeCount = 5;
while (rangeCount <= 10) {
    console.log(rangeCount);
    rangeCount++;
}

for (let j = 20; j >= 10; j-- ) {
    if (j === 13) {
        break;
    }
    console.log(j);
}

// for (let i = 1; i <= 10; i++ ) {
//     if (i%2===0) {
//         console.log(i);
//     }
// }

for (let k = 2; k <= 16; k++) {
    if (k % 2 === 0) {
        continue;
    } else {
        console.log(k);
    }
}

let elseRangeCount = 2;

while (elseRangeCount <= 15) {
    if (elseRangeCount%2 !== 0) {
        console.log(elseRangeCount);
    }
    elseRangeCount++;
}

const arr = [];

for (let l = 0; l <= 5; l++) {
    arr[l] = l + 5;
}
console.log(arr);
