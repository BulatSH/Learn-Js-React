const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

const newArr = [];

function showGoodFilms(arr) {
	return arr.filter(item => item.rating >= 8);
};

function showListOfFilms(arr) {
	return arr
		.map(film => film.name)
		.reduce((sum, current) => `${sum}, ${current}`);
}

function setFilmsIds(arr) {
	return arr.map((item, i) => {
		item.id = i;
		return item;
	});
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every(item => Object.hasOwn(item, 'id'));
}

const funds = [
	{
		amount: -1400
	},
	{
		amount: 2400
	},
	{
		amount: -1000
	},
	{
		amount: 500
	},
	{
		amount: 10400
	},
	{
		amount: -11400
	}
];

// возвращает сумму только положительных значений из каждого объекта
const getPositiveIncomeAmount = (data) => {
	return data
		.filter(item => item.amount > 0)
		.map(item => item.amount)
		.reduce((sum, current) => sum + current);
};



// Если хотя бы один из объектов содержит отрицательное значение поля amount, 
// то функция возвращает сумму всех значений. (число) Если таких значений нет - 
// запускается функция getPositiveIncomeAmount с тем же массивом данных.
const getTotalIncomeAmount = (data) => {
	if (data.some(item => item.amount < 0)) {
		return data
			.map(item => item.amount)
			.reduce((sum, current) => sum + current);
	} else {
		getPositiveIncomeAmount(data);
	}
};

console.log(getTotalIncomeAmount(funds));
