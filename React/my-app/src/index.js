import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// JS. Тип, классы и строка
// const elem = React.createElement('h2', {className: 'color'}, 'Hello World!');

// JSX
// const elem = <h2>Hello World!</h2>; // -> babel to js

// Многострочный элемент
// Всегда один родитель

const text = 'Hello World!';

// В контрукцию {} мы можем поместить любые переменные, кроме объектов
const elem = (
    <div>
        <h2 className="test">Текст: {text} {2 + 2}</h2>
        <input id="input" type="text" />
        <label htmlFor="input"></label>
        <button tabIndex={0}>Click</button>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);