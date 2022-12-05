'use strict';

// Макрозадача
setTimeout(() => console.log('timeout')); // Async

// Макрозадача
Promise.resolve()
	// Микрозадача
	.then(() => console.log('promise')); // Async

// Возможность самому запускать микрозадачи, после макро задач, но до рендеринга страницы
queueMicrotask(() => console.log('wow'));
// code
// promise
// wow
// promise_2
// timeout

// Макрозадача
Promise.resolve()
	// Микрозадача
	.then(() => console.log('promise_2')); // Async

// Макрозадача
console.log('code');

// code
// promise
// promise_2
// timeout

// Сначала идут макрозадачи, потом микрозадачи, потом опять макрозадачи
// () => {} // Макрозадача
// microtasks: then, catch, finally, await
// render
// () => {} - поэтому timeout в данном случае последний
// microtasks
// render
// () => {}
