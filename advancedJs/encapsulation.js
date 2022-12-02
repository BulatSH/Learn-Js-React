'use strict';

// Инкапсуляция - это один из принципов ООП
// Объект хранит свое состояние в приватном порядке
// и только его методы имееют возможно его менять
// 1. Защита от вмешательства пользоваетелем
// 2. Мы всегда без последствий сможем улучшать и дорабатывать программу
// 3. Это удобно

// Рассмотрим на функции конструкторе
// function User(name, age) {
// 	// this.age = age;
// 	let userAge = age; // Мы не можем ни получить, ни поменять, снаружи к нему нет доступа
// 	this.name = name;

// 	this.say = function () {
// 		console.log(`Имя пользователя: ${userAge}, возраст: ${this.name}`);
// 	}

// 	// Тоже, кстати, является геттером
// 	this.getAge = function () {
// 		return userAge;
// 	}

// 	this.setAge = function (age) {
// 		if (typeof age === 'number' && age > 0 & age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log('Недопустимое значение!');
// 		}
// 	}
// }

// const ivan = new User('Ivan', 27);
// // console.log(ivan.userAge);
// console.log(ivan.name);

// console.log(ivan.getAge());

// // Но мы можем не только получать, но и изменить свойство
// // ivan.userAge = 30;
// ivan.setAge(30);
// ivan.setAge(300);
// ivan.name = 'Alex';
// console.log(ivan.getAge() + ' | ' + ivan.name);

// На примере класса
class User {
	constructor(name, age) {
		this.name = name;
		// this.age = age; // нам необходимо сделать так, а не let...
		// С let работать не будет, т.к. создастся только внутри constructor()
		// Но таким образом, мы делаем это свойство публичной

		// Скроем свойство
		this._age = age; // Это не синтаксис языка, а соглашение программистов
		// В официальных стандартах в классах пока такое сделать невозможно
	}

	// Но относительно недавно появилась такая возможность, использовать так называемые поля классов
	// Экспериментальный синтаксис 
	surname = 'test'; // test // свойство без конструктора
	#surname = 'test'; // undefined // приватное свойство

	say() {
		console.log(this._age + ' | ' + this.name);
	}

	// getAge() {
	// 	return userAge;
	// }

	get age() {
		return userAge;
	}

	// setAge(age) {
	// 	if (typeof age === 'number' && age > 0 & age < 110) {
	// 		this._age = age;
	// 	} else {
	// 		console.log('Недопустимое значение!');
	// 	}
	// }

	set age(age) {
		if (typeof age === 'number' && age > 0 & age < 110) {
			this._age = age;
		} else {
			console.log('Недопустимое значение!');
		}
	}
}

const ivan = new User('Ivan', 27);

ivan.age = 99;

ivan.say();  // 99 | Ivan
// При let userAge = age; получим undefined, потому что возраст не задан как свойство
