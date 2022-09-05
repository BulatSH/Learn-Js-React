'use strict';

// Классы (ES6)
// это красивая обертка функций конструкторов (синтаксический сахар)

class Rectangle { // Создаем класс, всегда с большой буквы // Концепция, абстракция
    constructor(height, width) { // Конструируем наш класс
        this.height = height;
        this.width = width;
    }

    calcArea () { // синтаксис метода класса
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { // extends - наследуем все свойства и методы класса Rectangle
    constructor (height, width, text, bgColor) {
        super(height, width); // вызывает конструктор родителя и все свойства родителя перейдут сюда
        // super(); - всегда должен быть на первом месте
        // Также в качестве аргументов можем указать только те свойства, которые нужны
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps () {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

// const square = new Rectangle(10, 10); // в square лежит объект // экземпляр
// const long = new Rectangle(20, 100); // экземпляр

// console.log(square.calcArea()); // 100
// console.log(long.calcArea()); // 2000

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');
div.showMyProps(); // Текст: Hello World, цвет: red

console.log(div.calcArea()); // 250

