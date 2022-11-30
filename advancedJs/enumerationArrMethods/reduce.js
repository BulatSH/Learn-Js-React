'use strict';

// reduce (уменьшать) - схлопывает (собирает) массив в одно единое целое

// const arr = [4, 5, 1, 3, 2, 6];

// // Когда мы запускаем редьюс у него есть два аргумента, 
// // которые подставляются автоматически
// // Первый сумма всех наших элементов, изначально равно нулю
// // Второй аргумент - каждый элемент
// const result = arr.reduce((sum, current) => sum + current);

// console.log(result);

// const arr = ['apple', 'pear', 'plum'];

// // Есть еще один аргумент, третий, это начальное значение
// const res = arr.reduce((sum, current) => `${sum}, ${current}`, 'Фрукты');

// console.log(res);

const obj = {
	ivan: 'person',
	ann: 'person',
	dog: 'animal',
	cat: 'animal'
};

// Преаращаем объект в матрицу, т.е. в массив массивов
const newArr = Object.entries(obj)
	.filter(item => item[1] === 'person')
	.map(item => item[0]);

console.log(newArr);
