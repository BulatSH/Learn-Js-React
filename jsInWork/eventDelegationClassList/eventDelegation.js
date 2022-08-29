'use strict';

// ClassList и делегирование событий

const buttons = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block ');

// console.log(buttons[0].classList.length);
// console.log(buttons[0].classList.item(0)); // первый класс
// console.log(buttons[0].classList.add('red')); // можно передавать несколько классов ('red', 'red2');
// console.log(buttons[0].classList.remove('blue'));
// console.log(buttons[0].classList.toggle('blue'));

// console.log(buttons[1].classList.add('red'));

// if (buttons[1].classList.contains('red')) {
//     console.log('red');
// }

buttons[0].addEventListener('click', () => {
    // if (!buttons[1].classList.contains('red')) {
    //     buttons[1].classList.add('red');
    // } else {
    //     buttons[1].classList.remove('red');
    // }

    buttons[1].classList.toggle('red');
});
// Есть еще метод className - но он устарел и его лучше не использовать


// Делегирование события, нужно работать с родителем
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') { // Во избежание ошибок проверяем на существование event.target, например, у br нет события клик
                                                            // event.target && event.target.classList.contains('class') - тоже сработает
                                                            // Есть еще такой способ: event.target && event.target.matches('button.red') - matches проверка на совпадение
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
