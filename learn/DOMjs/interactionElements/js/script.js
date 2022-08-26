// Действия с элементами на странице

'use strict';

const box = document.getElementById('box'),
    buttons = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

buttons[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(heart => {
    heart.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я'); // Node (ноды, узлы)

div.classList.add('black'); // https://caniuse.com/ - сайт, который показывает поддерживает браузер свойство или нет

// wrapper.prepend(div); // Вставляет элемент до всех элементов внутри wrapper
// wrapper.appendChild(div); // Вставляет элемент до всех элементов внутри wrapper // Устаревший метод

wrapper.append(div); // Вставляет элемент после всех элементов внутри wrapper


// hearts[0].before(div); // Вставляет элемент до hearts
// hearts[0].after(div); // Вставляет элемент после hearts

// wrapper.insertBefore(div, hearts[1]); // Внутри wrapper вставляет div перед hearts[1] // Устаревший метод


// circles[0].remove(); // Удаляет circles[0] со страницы

// wrapper.removeChild(hearts[1]); // Удаляет hearts[1] // Устаревший метод


// hearts[0].replaceWith(circles[0]); // вставляет circles[0] вместо hearts[0]

// wrapper.replaceChild(circles[0], hearts[0]); // вставляет circles[0] вместо hearts[0]


div.innerHTML = '<h1>Hellow World</h1>'; // Отработает верно
// div.textContent = 'Hello World'; // Работает только с текстом


// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // Вставляет html код перед div
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // Вставляет html код внутри div первым

// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // Вставляет html код внутри div последним
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // Вставляет html код после div
