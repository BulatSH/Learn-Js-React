// Рекурсия - функция вызывает сама себя

'use strict';

// function pow (x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     console.log(result);
//     return result;
// }                                            // Нюансы
                                                // В данном случае итеративный подход будет лучше, т.к. в рекурсии много действий
                                                // Рекурсия делает функции проще
                                                // У каждого свои предпочтения
// function pow (x, n) { // Рекурсия
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 0); // 1
// pow(2, 1); // 2
// pow(2, 2); // 4
// pow(2, 3); // 8
// pow(2, 4); // 16

// Термины рекурсии
// База рекурсии - шаг, который приводит к завершению рекурсии
// Шаг рекурсии - запуск вложенной функции, но с другим знчением
// Глубина рекурсии - общее количество вложенных вызовов
// Максимальная глубина - на сколько рекурсия может нырнуть сама в себя

let students = {
    js: [
        {
            name: 'John',
            progress: 100
        },
        {
            name: 'Ivan',
            progress: 60
        }
    ],
    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20
            },
            {
                name: 'Ann',
                progress: 18
            }
        ],
        pro: [
            {
                name: 'Sam',
                progress: 10
            }
        ],
        semi: {
            students: [
                {
                    name: 'Test',
                    progress: 100
                }
            ]
        }
    }
};

// Вычисляем средний прогресс
// Полезный метод Object.values(); - значения объекта, получаем масив со значениями первого уровня
function getTotalProgressByIteration (data) {
    let total = 0; // Обищй прогресс
    let students = 0; // Общее количество студентов

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) { // Массив ?
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));


function getTotalProgressByRecursion (data) {
    if (Array.isArray(data)) { // Массив ?
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);

            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);
