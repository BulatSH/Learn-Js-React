'use strict';

// Async/Await

// async - говорим, что внутри функции будет ассинхронный код
const postData = async (url, data) => {
	// await - говорим, что сначала ждем ответ от сервера, 
	// а только потом записываем ответ в переменную
	// Иначе будет ошибка, т.к js код выполняется синхронно, 
	// и в противном случае в переменную запишется пустой фетч
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	});

	// Тоже самое - возвращаем ответ, который может задержаться
	return await res.json();
}
