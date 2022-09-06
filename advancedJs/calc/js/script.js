'use strict';

// AJAX - это asinchronius JS and XML

// Пока будет реализовывать самый первый вариант AJAX, при помощи объекта XMLHTTPRequest

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('change', func); // Событие change возникает, когда наш input уходит из фокуса

// отслеживает изменения при введении значения в инпут
inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // request запрос, new XMLHttpRequest() - конструктор, который создает новый объект

    request.open('GET', 'js/current.json'); // собирает настройки, которые помогут в будущем сделать запрос
    // принимает пять аргументов
    // 1) method - get, post (получение или отправка)
    // 2) url путь к серверу
    // 3) asinc - отвечает за асинхронность, по умолчанию true
    // Вспомним, что синхронный код выполняется по порядку
    // Асинхронный выполняется параллельно, не блокирует остальной код
    // 4) Логин // Некоторые запросы мы можем делать только по логину и паролю
    // 5) Пароль // Некоторые запросы мы можем делать только по логину и паролю
    // Последние три аргумента необязательны

    // Когда мы отправляем наш запрос, нам нужено сообщить, что именно мы отправляем, какая это информация, в чем она закодирована
    // Для всего этого существуют http заголовки - https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8_HTTP
    //                        Тип контента        Какой тип       Кодировка
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(); // Отправляем // Запрашиваем информацию
    // Если бы у нас был метод post, то есть отправка данных, то send принял бы в себя аргумент с данными, которые мы отправляем

    // Свойства объекта XMLHttpRequest
    // 1) status - статус нашего запроса, например, 404 - не найдено
    // https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
    // 2) statusText - текстовое описание ответа от сервера
    // 3) response - ответ от сервера
    // 4) readyState - текущее состояние нашего запроса https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState

    // События объекта XMLHttpRequest
    // readystatechange - отслеживает статус готовности нашего запроса в данный текущий момент
    // request.addEventListener('readystatechange', () => { // используют редко, лучше load
    //     if (request.readyState === 4 && request.status === 200) { // 4 - done, 200 - запрос успешно завершился
            // 0 	UNSENT 	Объект был создан. Метод open() ещё не вызывался.
            // 1 	OPENED 	Метод open() был вызван.
            // 2 	HEADERS_RECEIVED 	Метод send() был вызван, доступны заголовки (headers) и статус.
            // 3 	LOADING 	Загрузка; responseText содержит частичные данные.
            // 4 	DONE 	Операция полностью завершена.
    request.addEventListener('load', () => {
        if (request.status === 200) { 
            console.log(request.response);

            const data = JSON.parse(request.response); // превращаем JSON ответ в объект
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // toFixed(2) - два знака после точки
        } else { // Если с сервером что-то не так
            inputUsd.value = 'Что-то пошло не так';
        }
    });
    // load - срабатывает, когда наш запрос полностью загрузился и мы получили какой-то результат
});
