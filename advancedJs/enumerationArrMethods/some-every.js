'use strict';

// some и every - два похожих метода
// some - берет массив, перебирает его и если хотя бы 1 элемент подходит,
// то он вернет true, иначе false
// every - наоборот

const some = [4, 'qwq', 'asdasd'];

console.log(some.every(item => typeof (item) === 'number')); // false
console.log(some.some(item => typeof (item) === 'number')); // true
