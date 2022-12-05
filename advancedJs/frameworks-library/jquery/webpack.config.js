'use strict';

// Техническая переменная, которая нужна для правильной работы
let path = require('path');

// Объект настроек
module.exports = {
	// Режим, в котором будет работать webpack
	// mode: 'development', // Режим разработки, есть еще production
	mode: 'production',
	entry: './js/script.js', // Главный js файл
	// Вайл, который получится в итоге
	output: {
		filename: 'bundle.js',
		// __dirname - корень папки
		path: __dirname + '/dist'
	},
	watch: true, // Вебпак будет отслеживать проект, и будет применять изменения, когда мы будем сохранять

	devtool: "source-map", // Хранит информацию о исходниках

	// Модули и их настройка, например babel
	module: {

	},
	// Дальше могут идти плагины, но все нужные уже должны быть в самом вебпаке
};
