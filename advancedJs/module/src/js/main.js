const app = '123'; // в браузере Uncaught SyntaxError: redeclaration of const app
// т.к. переменная app уже объявлена в другом js файле

// Рассмотрим 2 способа создания модулей

// 1. Анонимная самовызывающаяся функция

const number = 1; // Записываем в глобальную область видимости

// Анонимная самовызывающаяся функция
// Без скобок-обертки, это будет функция dexlaration - она не может быть анонимной
// Поэтому таким образом мы ее делаем функцией expression
// Создаем локальную область видимости
(function () {
	let number = 2;
	console.log(number); // 2

	console.log(number + 3); // 5
}());

console.log(number); // 1

// 2. Использование объектного интерфейса
// Модуль записывам в переменную и в нее возвращаем методы доступные снаружи
const user = (function () {
	const private = function () {
		console.log('I am private');
	};

	return {
		// Экспортируем только те методы, которые нам будут нужны снаружи
		sayHello: private
	};
}());

user.sayHello();

// Синтаксис command js
function myModule() {
	this.hello = function () {
		console.log('hello');
	};

	this.goodbye = function () {
		console.log('bye');
	}
}

module.exports = myModule;
