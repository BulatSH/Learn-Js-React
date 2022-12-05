'use strict';

// Web Animations API, пока experimental
// Документация - https://developer.mozilla.org/ru/docs/Web/API/Animation

// Рассмотрим простой способ
const btnPhone = document.querySelector('#iphone'),
	btnMacbook = document.querySelector('#macbook'),
	images = document.querySelectorAll('img');

// animate() - способ создния анимации
// const phoneAnimation = images[0].animate([
// 	{
// 		transform: 'translateY(0)'
// 	},
// 	{
// 		transform: 'translateY(000px)'
// 	},
// 	{
// 		transform: 'translateY(-100px)'
// 	},
// 	{
// 		transform: 'translateY(0)'
// 	}
// ], {
// 	duration: 3000,
// 	iterations: Infinity
// });

let phoneAnimation;

btnPhone.addEventListener('click', () => {
	if (!phoneAnimation) {
		phoneAnimation = images[0].animate([
			{
				transform: 'translateY(0) rotate(0deg)',
				filter: 'opacity(100%)'
			},
			{
				transform: 'translateY(000px) rotate(180deg)',
				filter: 'opacity(50%)'
			},
			{
				transform: 'translateY(-100px) rotate(270deg)',
				filter: 'opacity(75%)'
			},
			{
				transform: 'translateY(0) rotate(0deg)',
				filter: 'opacity(100%)'
			}
		], {
			duration: 3000,
			iterations: Infinity
		});
	} else if (phoneAnimation.playState === 'paused') {
		phoneAnimation.play();
	} else {
		phoneAnimation.pause();
	}
});
