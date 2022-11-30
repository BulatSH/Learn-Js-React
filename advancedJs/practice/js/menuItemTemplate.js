'use strict';

window.addEventListener('DOMContentLoaded', () => {
	// const menuCont = document.querySelector('.menu__field .container');

	class MenuItemTemplate {
		constructor(imgName, title, description, cost, parentSelector, ...classes) {
			this.imgName = imgName;
			this.title = title;
			this.description = description;
			this.cost = cost;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH(); // Можно так
		}

		changeToUAH() {
			this.cost = this.cost * this.transfer;
		}

		createMenuItemTemplate() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
                <img src="img/tabs/${this.imgName}.jpg" alt="${this.imgName}">
                <h3 class="menu__item-subtitle">${this.title}</h3>  
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
                </div>
            `;

			this.parent.append(element);
		}
	}

	const getResource = async (url) => {
		const res = await fetch(url);

		// Обработаем в ручную, 
		// Т.к. если внутри фетча промис попадает на ошибку, 
		// которая связана с нттп протоколом, он не выкинет реджект
		// У промиса, котрый возвращается из фетч есть два свойста
		// .ok - все просто, окей, или не окей)
		// .status - код ошибки, который вернул сервер
		if (!res.ok) {
			// Выкидываем новую ошибку
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getResource('http://localhost:3000/menu')
		.then(data => {
			// Как это работает внутри
			// data.forEach(obj => {
			// 	new MenuItemTemplate(
			// 		obj.altimg,
			// 		obj.title,
			// 		obj.descr,
			// 		obj.price
			// 	).createMenuItemTemplate();
			// })

			// Лучше использовать деструктуризацию
			data.forEach(({ altimg, title, descr, price }) => {
				new MenuItemTemplate(
					altimg, title, descr, price, '.menu .container'
				).createMenuItemTemplate();
			})
		});

	// Другая реализация
	// getResource('http://localhost:3000/menu')
	// 	.then(data => createCard(data));

	// Способ без шаблонизации
	// function createCard(data) {
	// 	data.forEach(({ altimg, title, descr, price }) => {
	// 		const element = document.createElement('div');

	// 		element.classList.add('menu__item')

	// 		element.innerHTML = `
	// 			<img src="img/tabs/${altimg}.jpg" alt="${altimg}">
	//             <h3 class="menu__item-subtitle">${title}</h3>  
	//             <div class="menu__item-descr">${descr}</div>
	//             <div class="menu__item-divider"></div>
	//             <div class="menu__item-price">
	//                 <div class="menu__item-cost">Цена:</div>
	//                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
	//             </div>
	// 		`;

	// 		document.querySelector('.menu .container').append(element);
	// 	});
	// };

	// С помощью axios
	// Получаем более подробный ответ и data мы уже получаем в виде объекта
	// axios.get('http://localhost:3000/menu')
	// 	.then(data => {
	// 		// Обращаемся к данным, которые получили, поэтому data.data
	// 		data.data.forEach(({ altimg, title, descr, price }) => {
	// 			new MenuItemTemplate(
	// 				altimg, title, descr, price, '.menu .container'
	// 			).createMenuItemTemplate();
	// 		})
	// 	});

	// new MenuItemTemplate(
	// 	'vegy',
	// 	'Меню "Фитнес"',
	// 	'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	// 	9,
	// 	'.menu .container'
	// ).createMenuItemTemplate(); // можно так, когда нам что-то нужно сделать на месте, объект создастся, отработает, потом удалится, т.к. никаких ссылок на нее не останется

	// new MenuItemTemplate(
	// 	'elite',
	// 	'Меню “Премиум”',
	// 	'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	// 	22,
	// 	'.menu .container',
	// 	'menu__item',
	// 	'big'
	// ).createMenuItemTemplate();

	// new MenuItemTemplate(
	// 	'post',
	// 	'Меню "Постное"',
	// 	'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
	// 	17,
	// 	'.menu .container',
	// 	'menu__item',
	// 	'big'
	// ).createMenuItemTemplate();

	fetch('http://localhost:3000/menu')
		.then(data => data.json())
		.then(res => console.log(res));
});
