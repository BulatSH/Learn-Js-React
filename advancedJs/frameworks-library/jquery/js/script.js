// Так не сработает, этот синтаксис не гарантирует правильного подключения
// import 'jquery';

import $ from 'jquery';

const btn = $('#btn');

console.log(btn);

$(document).ready(function () {
	$('.list-item:first').hover(function () {
		$(this).toggleClass('active');
	});

	// Аналог addEventListener
	$('.list-item:eq(2)').on('click', function () {
		$('.image:even').fadeToggle('slow');
	});

	$('.list-item:eq(4)').on('click', function () {
		$('.image:odd').animate({
			opacity: 'toggle',
			height: 'toggle'
		}, 2000);
	});
});
