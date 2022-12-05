'use strict';

// Event loop - событийный цикл

console.log(1);

setTimeout(() => {
	console.log('timeout');
}, 4000); // Выполнится первой

setTimeout(() => {
	console.log('timeout_4000');
}, 4000);

console.log(2);

// 1
// 2
// timeout
// timeout_4000

// Ассинхронными являются функции setTimeout, setTimeout, запросы,
// а также callback функции тоже

// Как это работает
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// Все операции, которые выполняются в браузере выполняются по очереди

const arr = [1, 4, 5, 6, 8, 3];

arr.forEach(item => console.log(item));

let k = 0;

// Функуция, которая нагружает браузер
function count() {
	for (let i = 0; i < 1 < 9; i++) {
		k++;
	}
}

// Следующие задачи попадут в Call Stack, пока count() полностью не закончит свои действия

setTimeout(() => {
	console.log(1);
}, 0);

console.log(2);
// Сначала выполнится 2, потом setTimeout
// Сначала всегда выполнится синхронный код, только потом асинхронный
// Ну и минимальное значение времени фукнции setTimeout 4 мс
// Сделано это для совместимости между разными браузерами

for (let i = 1; i <= 10; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000);
}
