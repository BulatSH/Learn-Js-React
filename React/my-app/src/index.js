import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Header} from "./App";

// JS. Тип, классы и строка
// const elem = React.createElement('h2', {className: 'color'}, 'Hello World!');

// JSX
// const elem = <h2>Hello World!</h2>; // -> babel to js

// Многострочный элемент
// Всегда один родитель

// const text = 'Hello World!';

// В контрукцию {} мы можем поместить любые переменные, кроме объектов
// const elem = (
//     <div>
//         <h2 className="test">Текст: {text} {2 + 2}</h2>
//         <input id="input" type="text" />
//         <label htmlFor="input"></label>
//         <button tabIndex={0}>Click</button>
//     </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

// StrictMode нужен для выявления проблем в коде, он существует внутри Реакта
// Помогает обнаруживать устаревшие и не безопасные конструкции
// Работает только в разработке
root.render(
	<StrictMode>
		<App />
	</StrictMode>
	// elem
    // Компоненты всегда должны быть написаны с большой буквы
);
// Компоненты это участки/блоки когда, которые могут быть переиспользованы
// Компоненты это функции, которые внутри себя возвращают JSX элементы, и содержат внутри себя какое-то поведение
// Компоненты пишутся в разных файлах и экспортируются и импортируются в другие файлы