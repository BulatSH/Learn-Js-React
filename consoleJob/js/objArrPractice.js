'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function calcRoomArea (width, length) {
    return width * length;
}

function calcTotalArea (data) {
    let totalArea = 0;

    data.shops.forEach((item) => {
        totalArea += calcRoomArea(item.width, item.length);
    });

    return totalArea;
}

function calcTotalVolume (data) {
    return calcTotalArea(data) * data.height;
}

function heatingCost (data) {
    return calcTotalVolume(data) * data.moneyPer1m3;
}

function isBudgetEnough(data) {
    if (heatingCost(data) <= data.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);

//

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const newArr = [];
    let str = '';

    (arr.length > 9) ? str = 'Оставшиеся студенты: ' : str = 'Оставшиеся студенты: -';

    console.log(arr);

    for (let i = 0; i < 3; i++) {
        newArr[i] = [arr[3 * i], arr[3 * i + 1], arr[3 * i + 2]];
    }

    for (let i = 9; i < arr.length; i++) {
        if (arr.length - 1 === i) {
            str += `${arr[i]}`;
        } else {
            str += `${arr[i]}, `;
        }
    }

    newArr.push(str);

    return newArr;
}

sortStudentsByGroups(students);
