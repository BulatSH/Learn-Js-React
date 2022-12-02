/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {

const app = '123'; // в браузере Uncaught SyntaxError: redeclaration of const app
// т.к. переменная app уже объявлена в другом js файле

// Рассмотрим 2 способа создания модулей

// 1. Анонимная самовызывающаяся функция

const number = 1; // Записываем в глобальную область видимости

// Анонимная самовызывающаяся функция
// Без скобок-обертки, это будет функция dexlaration - она не может быть анонимной
// Поэтому таким образом мы ее делаем функцией expression
// Создаем локальную область видимости
(function () {
	let number = 2;
	console.log(number); // 2

	console.log(number + 3); // 5
}());

console.log(number); // 1

// 2. Использование объектного интерфейса
// Модуль записывам в переменную и в нее возвращаем методы доступные снаружи
const user = (function () {
	const private = function () {
		console.log('I am private');
	};

	return {
		// Экспортируем только те методы, которые нам будут нужны снаружи
		sayHello: private
	};
}());

user.sayHello();

// Синтаксис command js
function myModule() {
	this.hello = function () {
		console.log('hello');
	};

	this.goodbye = function () {
		console.log('bye');
	}
}

module.exports = myModule;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js"); // Для работы нужен сборщик, например webpack
// Разница между webpack и gulp
// Галп - планировщик задач
// Webpack - сборщик модулей

const app = 'data';

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

// Подключим webpack
// у него есть 2 режима работы
// 1. Использование стандартных заводских настроек
// Главное условие, чтобы webpack сработал без конфига -
// это то, что главный файл, который принимает в себя все импорты
// должен называться index.js, и он должен находиться в папке src
// 2. Наши настройки, когда мы сами прописываем свой config файл

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map