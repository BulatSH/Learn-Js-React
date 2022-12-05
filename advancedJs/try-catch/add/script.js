'use strict';

// Создание своих ошибок

const data = [
	{
		id: 'box',
		tag: 'div'
	},
	{
		// В коде внизу все будет работать, 
		// но с точки зрения логики здесь идет нарушение, 
		// т.к. уникального идентификатора просто не существует
		// id: '',
		// Добавим id, чтобы обработать как ошибку отсутствие тега
		id: 'nav',
		tag: 'nav'
	},
	{
		id: 'circle',
		// tag: 'span',
		// Создадим более серьезную, критическую ошибку, удалив span
		tag: ''
	}
]

// data.forEach((blockObj, i) => {
// 	const block = document.createElement(blockObj.tag);
// 	// В js есть специальный оператор, который генерирует ошибку - throw
// 	// Но обычно tрrow редко используют, т.к. есть встроенный класс error
// 	// Лучше работать с ним
// 	// if (!blockObj.id) throw 'error'; // Uncaught error
// 	// Более правильный вариант - "выкинуть" объект ошибки
// 	// if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);
// 	//Uncaught Error: В данных под номером 2 нет id

// 	block.setAttribute('id', blockObj.id);
// 	document.body.append(block);
// });

// Также можем обратиться к свойствам объекта
// const err = new Error('test');
// console.log(err.name, err.message, err.stack); // Error test @http://127.0.0.1:5500/advancedJs/try-catch/add/script.js:37:13

// Более специфические ошибки, которые будут отличаться готовым именем
// const err = new SyntaxError('test');
// const err = new ReferenceError('test');
// и т.п. - лучше использоть не просто обшую ошибку, а более конкретную

try {
	data.forEach((blockObj, i) => {
		const block = document.createElement(blockObj.tag);
		// Т.к. выдает ошибку, работа перейдет в блок catch
		if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);

		block.setAttribute('id', blockObj.id);
		document.body.append(block);
	});
} catch (e) {
	// console.log(e.name);
	// console.log(e.message);
	// console.log(e.stack);
	// SyntaxError script.js:55:10
	// В данных под номером 2 нет id script.js:56:10
	// @http://127.0.0.1:5500/advancedJs/try-catch/add/script.js:49:27
	// @http://127.0.0.1:5500/advancedJs/try-catch/add/script.js:47:7

	if (e.name === 'SyntaxError') {
		console.log(e.message);
	} else {
		// Обработка серьезной ошибки
		throw e; // Uncaught DOMException: String contains an invalid character в браузере
		// Код ниже не выполнится, потому что у нас произошла критическая ошибка
	}
}

console.log('test');
