// Async, defer, динамические скрипты

'use strict';

const p = document.querySelectorAll('p');

console.log(p);

const script = document.createElement('script');
script.src = 'test.js';

document.body.append(script); // Загружается после выполнения этой строчки
// Динамически загружаемые скрипты ведут себя как async
// script.async = 'false'; - если так прописаться, то будет вести себя как обычный скрипт
