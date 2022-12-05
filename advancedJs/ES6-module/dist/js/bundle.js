/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sayHi),
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "two": () => (/* binding */ two)
/* harmony export */ });
// Модули появились и в ES6 стандарте и она более гибкая

// Можно так
let one = 1;

// И так, так называемый именованый синтаксис
let two = 2;



// default - экспорт по умолчанию
function sayHi() {
	console.log('Hello');
}
// Самое главное в экспорте - это, чтобы у каждой сущности было имя


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");
// Деструктуризация
// import { one, two } from "./main";

// console.log(`${one} and ${two}`);
// К сожалению, браузер не умеет собирать все это в один рабочий скрип, и нам все равно нужно воспользоваться сборщиком

// Мы также можем сразу переименовать то, что импортируем
// import { one as first } from "./main";

// console.log(first);

// Можем испортировать все
// import * as data from './main';

// console.log(`${data.one} and ${data.two}`);

// data.sayHi();

// Импорт default
// import sayHi from './main';
// Выглядит так - import {default as sayHi} from './main';

// sayHi();

// Есть еще одна фича, это атрибут type module, который работает практически также, как и атрибут def, то есть подключаться будет по очереди
// Нужно подключать все скрипты по порядку, вначале те, в которых есть экспорт, потом те, в которых есть импорт
// Это не значит, что браузер соберет все в один файл, он этого не умеет делать,
// он просто последовательно будет подключать эти файлы использую import и export
// Также мы должны правильно прописывать пути к нашему файлу


(0,_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Hello в браузере

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map