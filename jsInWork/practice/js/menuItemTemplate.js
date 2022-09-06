'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // const menuCont = document.querySelector('.menu__field .container');

    class MenuItemTemplate {
        constructor (imgName, title, description, cost, parentSelector, ...classes) {
            this.imgName = imgName;
            this.title = title;
            this.description = description;
            this.cost = cost;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); // Можно так
        }

        changeToUAH () {
            this.cost = this.cost * this.transfer;
        }

        createMenuItemTemplate () {
            const element = document.createElement('div');
            
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src="img/tabs/${this.imgName}.jpg" alt="${this.imgName}">
                <h3 class="menu__item-subtitle">${this.title}</h3>  
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
                </div>
            `;

            this.parent.append(element);
        }
    }

    new MenuItemTemplate(
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).createMenuItemTemplate(); // можно так, когда нам что-то нужно сделать на месте, объект создастся, отработает, потом удалится, т.к. никаких ссылок на нее не останется

    new MenuItemTemplate(
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        22,
        '.menu .container',
        'menu__item',
        'big'
    ).createMenuItemTemplate();

    new MenuItemTemplate(
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        17,
        '.menu .container',
        'menu__item',
        'big'
    ).createMenuItemTemplate();

    // const vegy = new MenuItemTemplate('vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);
    // const elite = new MenuItemTemplate('elite', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 550);
    // const post = new MenuItemTemplate('post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 430);

    // menuCont.innerHTML += vegy.createMenuItemTemplate();
    // menuCont.innerHTML += elite.createMenuItemTemplate();
    // menuCont.innerHTML += post.createMenuItemTemplate();
});
