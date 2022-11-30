'use strict';

// Создаем модальное окно

window.addEventListener('DOMContentLoaded', () => {
	const modalTriggers = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal');

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');

		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	modalTriggers.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');

		document.body.style.overflow = ''; // '' по умолчанию
	}

	modal.addEventListener('click', (event) => {
		if (event.target === modal || event.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});
	// https://www.toptal.com/developers/keycode/for/ - коды клавиш

	const modalTimerId = setTimeout(openModal, 50000);

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) { // -1 если не отрабатывает, в некоторых браузерах может не отрабатывает, это решает ошибку
			openModal();

			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
	// {
	//     once: true // не сработает, т.к. scroll происходит каждый раз, когда немного пролистываем
	// }

	// Forms
	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо, скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	}

	forms.forEach(item => {
		bindPostData(item);
	});

	const postData = async (url, data) => {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: data
		});

		return await res.json();
	}

	function bindPostData(form) {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			// После формы
			form.insertAdjacentElement('afterend', statusMessage);

			const request = new XMLHttpRequest();
			request.open('POST', 'server.php');

			// request.setRequestHeader('Content-type', 'multipart/form-data');
			request.setRequestHeader('Content-type', 'application/json');
			const formData = new FormData(form);

			// FormData нельзя превратить в Json
			// const object = {};
			// formData.forEach(function (value, key) {
			// 	object[key] = value;
			// });

			// Более современный и элегантный способ преобразования 
			// FormData в Json
			// formData превращаем в массив массивов, 
			// массив превращаем в объект, 
			// объект в Json
			const json = JSON.stringify
				(Object.fromEntries(formData.entries()));

			// Пример
			// const obj = { a: 23, b: 50 };
			// console.log(Object.entries(obj));

			// Превращает обычный объект в Json
			// const json = JSON.stringify(object);

			// Можно отправлять FormData
			// request.send(formData);

			// request.send(json);

			// Важно! Промис, который запускается при помощи фетча
			// не перейдет в состояние отклонено, то есть rejected
			// из-за ответа http, который считается ошибкой
			// например, 404, 500 и т.д - он все равно выполнится нормально
			// единственное, что у него поменяется это свойство status, 
			// которое перейдет в состояние false
			// простыми словами, если внутри фетча промис попадает на ошибку, 
			// которая связана с нттп протоколом, он не выкинет реджект, 
			// это для него не считается ошибкой, он нормально выполнит при этом резолв
			// Самое главное для фетч, что он смог сделать этот запрос
			// Реджект будет возникать только при сбое сети или 
			// что-то там еще помешало выволнить запрос
			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				})
				.catch(() => {
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});

			// request.addEventListener('load', () => {
			// 	if (request.status === 200) {
			// 		console.log(request.response);
			// 		showThanksModal(message.success);
			// 		form.reset();
			// 		statusMessage.remove();
			// 	} else {
			// 		showThanksModal(message.failure);
			// 	}
			// });
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
		<div class="modal__content">
			<div class="modal__close" data-close>
				&times;
			</div>
			<div class="modal__title">
				${message}
			</div>
		</div>
	`

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}

});
