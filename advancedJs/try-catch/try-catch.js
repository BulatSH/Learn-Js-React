'use strict';

// конструкция try/catch позволяет обрабатывать ошибки и делать так,
// чтобы наш скрипт не падал

// js берет блок try и выполняет
// try {
// 	console.log('Normal'); // Normal
// 	console.log(a); // error
// 	console.log('Result');

// 	// Если в этом блоке возникла любая ошибка, то дальше выполнится блок catch
// } catch (error) {
// 	console.log(error); // в браузере, ReferenceError: a is not defined
// 	console.log(error.name); // ReferenceError - ошибка ссылочного типа
// 	console.log(error.message); // a is not defined - a не найдена
// 	console.log(error.stack); // try-catch.js, также выводит целую цепочку скриптов,
// 	//которые привели к ошибке, если такие есть
// } finally {
// 	// Код выполнится всегда
// 	// Задача этого блока проста:
// 	// завершить все начатые операции при любом варианте развития событий
// }

// Самый главный плюс конструкции try/catch - это то, что любой код,
// который идет после этой конструкции продолжит свою работу
// Если ошибка возникнет без или вне контрукции, то весь скрипт "ляжет"
// console.log(a); // ошибка и строка нижу уже не выполнится
// console.log('Still normal'); // Still normal

const btn = document.querySelector('.test');

// В данном случае test.html в браузере выдаст ошибку Uncaught TypeError: btn is null, 
// и код дальше не продолжится
// btn.addEventListener('click', () => {
// 	console.log('test');
// });

// Поэтому в таком случае, чтобы код дальше работал, 
// лучше слушатель событий обработать в конструкции try/catch
try {
	btn.addEventListener('click', () => {
		console.log('test');
	});
} catch (error) {
	console.log(error);
} // Можно и без finally, если он не нужен

console.log('Still'); // console.log(error);
