'use strict';

// События на мобильных устройствах

// touchstart // Касание по экрану
// touchmove // Зажимание и ведение по экрану
// touchend // Тап и отрыв от экрана
// touchenter // Скользим по экрану и наскакиваем на элемент, на которое повешено это событие
// touchleave // Зажатие по элементу и ушли за пределы этого элемента
// touchcancel // Точка соприкосновения больше не регистрируется браузером

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault(); // На мобилках рекомендуется всегда писать preventDefault

        console.log('Move');
        console.log(event.touches);
        console.log(event.targetTouches);
        console.log(event.changedTouches);
        console.log(event.targetTouches[0].pageX);
    });
});

// touches // список пальцев, которые касаются экрана
// targetTouches // все пальцы, которые касаются этого элемента
// changedTouches // список пальцев, которые участвуют в текущем событии
