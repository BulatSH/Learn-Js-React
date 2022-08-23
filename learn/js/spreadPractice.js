'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs (plan) {
    const {programmingLangs} = plan.skills;
    let result = '';

    for (let key in programmingLangs) {
        if (Object.keys(programmingLangs) === 0) {
            return '';
        }
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    return result;
}

showProgrammingLangs(personalPlanPeter);

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily (arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }

    return `Семья состоит из: ${arr.join(' ')}`;
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings (arr) {
    arr.forEach(function (item) {
        console.log(item.toLowerCase());
    });
}

standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'Ошибка!';
    }

    return str.split('').reverse().join(''); // Строку превращаем в массив, потом пишем в обратном порядке, и из массива делаем строку
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }

    let str = 'Доступные валюты:\n';

    for (let value of arr) {
        if (value === missingCurr) {
            continue;
        }
        
        str += `${value}\n`;
    }

    return str;
}

availableCurr(allCurrencies, 'EUR');
