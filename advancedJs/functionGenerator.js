'use strict';

// Функции генераторы, выдают результат последовательно

// Можно так, но такой способ не приветствуется
// function *generator() {

// }

function* generator() {
	yield 'S';
	yield 'c';
	yield 'r';
	yield 'i';
	yield 'p';
	yield 't';
}

const str = generator();

// Чтобы вызвать следующий шаг нашего генератора нужно использовать встроенный метод next
console.log(str.next()); // { value: 'S', done: false } // value - значение, done - выполнился наш генератор полностью или нет
// console.log(str.next().value); // Так можно получить значение
console.log(str.next()); // { value: 'c', done: false }
console.log(str.next()); // { value: 'r', done: false }
console.log(str.next());
console.log(str.next());
console.log(str.next()); // { value: 't', done: false }
console.log(str.next()); // { value: undefined, done: true }

function* count(n) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

const counter = count(7);

console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2

for (let k of count(7)) {
	console.log(k);
	// 0
	// 1
	// 2
	// 3
	// 4
	// 5
	// 6
};
