'use strict';

// Создаем модальное окно

window.addEventListener('DOMContentLoaded', () => {
    const modalTriggers = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
    
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }    

    modalTriggers.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');

        document.body.style.overflow = ''; // '' по умолчанию
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    // https://www.toptal.com/developers/keycode/for/ - коды клавиш

    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >=   document.documentElement.scrollHeight - 1) { // -1 если не отрабатывает, в некоторых браузерах может не отрабатывает, это решает ошибку
            openModal();

            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
    // {
    //     once: true // не сработает, т.к. scroll происходит каждый раз, когда немного пролистываем
    // }
});
