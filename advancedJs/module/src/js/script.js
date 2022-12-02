const myModule = require('./main'); // Для работы нужен сборщик, например webpack
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
