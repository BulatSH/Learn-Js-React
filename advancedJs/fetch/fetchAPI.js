'use strict';

// Fetch API

// Фетч работает на промисах

// Get запрос
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// 	// .json() - метод фетча, превращает json в js объект, что-то типа parse
// 	.then(response => response.json())
// 	.then(json => console.log(json));


// Post запрос - нужны небольшие настройки для фетча
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	// То, что отправляем
	body: JSON.stringify({
		name: 'Alex',
	}),
	// Заголовки
	headers: {
		'Content-type': 'application/json'
	}
})
	// .json() - метод фетча, превращает json в js объект, что-то типа parse
	.then(response => response.json())
	.then(json => console.log(json));
