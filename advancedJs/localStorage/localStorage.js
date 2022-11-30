'use strict';

// localStorage
// window.localStorage

// localStorage - свойство глобального объекта window
// Этот объект существует только внутри одного домена
// В него помещается около 5мб информации

// // Устанавливаем новый ключ
// localStorage.setItem('number', '5'); // Если уже есть такой ключ, то значение просто перезапишется

// // Получаем данные из localStorage
// console.log(localStorage.getItem('number'));

// // Удаляем ключ
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number')); // Получим null, т.к. наш объект будет пустым, в данном случае

// // Полностью очищаем локальное хранилище
// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
	form = document.querySelector('form'),
	change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
	checkbox.checked = true;
};

if (localStorage.getItem('bg') === 'changed') {
	form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
	if (localStorage.getItem('bg') === 'changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor = '#fff';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'red';
	}
});

const persone = {
	name: 'Alex',
	age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));
