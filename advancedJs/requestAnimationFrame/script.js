'use strict';
// css3 анимации хороши, но у них есть некоторые ограничения
// 1. Они не умеют нормально анимировать canvas элементы
// 2. Если мы хотим написать какую-то рваную или нестандартную анимацию, то это тоже не получится сделать

// requestAnimationFrame - документация, https://learn.javascript.ru/js-animation#funktsii-raschyota-vremeni
// Подстраивается под частоту кадров монитора, производительность компьютера, браузер


const btn = document.querySelector('.btn'),
	elem = document.querySelector('.box');
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
	pos++;
	elem.style.top = pos + "px";
	elem.style.left = pos + 'px';

	if (pos < 300) {
		// Принимает в себя функцию анимации, циклит ее
		requestAnimationFrame(myAnimation);
	}
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// Уникальный идентфиикатор анимации
let id = requestAnimationFrame(myAnimation);
// Отменяем анимацию
cancelAnimationFrame(id);
