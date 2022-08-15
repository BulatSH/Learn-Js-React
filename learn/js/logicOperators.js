'use strict';

// 0, null, undefined, '', NaN - всегда возвращают false, остальное true.

// Если это не true или false
// && Вернет первую ложь или последнюю правду из всех
// || Вернет первую правду или последнюю ложь из всех

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence приоритет операторов

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null || !3 || undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

let hamburger; // const подразумевает, что должно быть значение, поэтому let
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!');
}

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}

console.log(hamburger && cola || fries === 3 && nuggets);
