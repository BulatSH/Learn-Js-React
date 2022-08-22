'use strict';

function calculateVolumeAndArea(cubeWith) {
    if (cubeWith % Math.round(cubeWith) === 0 && !isNaN(cubeWith) && cubeWith >= 0) {
        const cubeVolume = cubeWith * cubeWith * cubeWith;
        const cubeArea = cubeWith * cubeWith * 6;

        return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

calculateVolumeAndArea(10);

function getCoupeNumber (placeNumber) {
    if (placeNumber === 0 || placeNumber > 36) {
        console.log('Таких мест в вагоне не существует');
        return 'Таких мест в вагоне не существует';
    } else if (placeNumber > 0 && placeNumber <= 36 && placeNumber % Math.round(placeNumber) === 0) {
        return Math.ceil(placeNumber / 4);
    } else {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
}

getCoupeNumber(8.5);

function getTimeFromMinutes(allMinutes) {
    let hours = Math.floor(allMinutes / 60);
    let minutes = Math.floor(allMinutes % 60);

    function checkForCompletion (time, isHour) {
        if (time % 10 === 1) {
            return (isHour === 'час') ? 'час' : 'минута';
        } else if (time % 10 === 2 || time % 10 === 3 || time % 10 === 4) {
            return (isHour === 'час') ? 'часа' : 'минуты';
        } else {
            return (isHour === 'час') ? 'часов' : 'минут';
        }
    }

    if (!isNaN(allMinutes) && allMinutes >= 0 && allMinutes % Math.round(allMinutes) === 0 || allMinutes === 0) {
        return `Это ${hours} ${checkForCompletion(hours, 'час')} и 
            ${minutes} ${checkForCompletion(minutes, '')}`;
    } else {
        return 'Ошибка, проверьте данные';
    }
}

getTimeFromMinutes(241);

function findMaxNumber(arg1, arg2, arg3, arg4) {
    if (arguments.length < 4) {
        console.log('Ошибка');
        return 0;
    }

    for (let j = 0; j < arguments.length; j++) {
        if (typeof(arguments[j]) === 'string') {
            return 0;
        }
    }

    let result = arg1;

    for (let i = 0; i < arguments.length; i++) {
        if (result < arguments[i]) {
            result = arguments[i];
        }
    }

    return result;
}

findMaxNumber(56, 6, 105, 50);

function fib (arg) {
    let result = '';

    if (typeof(arg) !== 'number' || arg % Math.round(arg) !== 0) {
        console.log('Ошибка');
        return result;
    }

    let arr = [];

    for (let i = 0; i < arg; i++) {
        if (i <= 1) {
            arr[i] = i;
        } else {
            arr[i] = arr[i - 2] + arr[i - 1];
        }

        if (arg === arr.length) {
            result += arr[i];
        } else {
            result += arr[i] + ' ';
        }
    }

    return result;
}

fib(4);
