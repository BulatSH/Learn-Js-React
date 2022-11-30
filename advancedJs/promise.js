'use strict';

// Promise

console.log('Зарпос данных...');

// Resolve - функция выполнилась правильно, reject - что-то пошло не так
const req = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			price: 2000
		};

		resolve(product);
	}, 2000);
});

// Метод then() обрабатывает положительный результат
req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
			// reject() для .catch();
		}, 2000);
		// У промисов есть огромный плюс перед колбэками,
		// мы можем возвращать promise и then по цепочке, по очереди
	}).then(data => {
		data.modify = true;
		return data;
	}).then(data => {
		console.log(data);
	}).catch(() => {
		console.error('Произошла ошибка');
		// Finaly часто забывают, но его лучше тоже писать
		// Что-то делается в конце
	}).finally(() => {
		console.log('Finaly');
	});
});

// All и race - дополнительные методы промисов

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
}

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Команда Promise.all служит для того, 
// чтобы мы точно убедились, что все наши промисы точно выполнились
// Promise.all([test(1000), test(2000)]).then(() => {
// 	// Выполнится, когда все промисы выполнятся
// 	console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
	// Выполнится, когда один промис выполнятся
	console.log('All');
});
