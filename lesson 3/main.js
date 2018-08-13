/*var money = prompt("Ваш бюджет","19000");

var shop = prompt("Ваш магазин","Магнит");

var shopGoodsOne = prompt("Ваш товар", "Хлеб");

var shopGoodsTwo = prompt("Ваш товар", "Молоко");

var shopGoodsThree = prompt("Ваш товар", "Яйца");

var shopGoods = [];
shopGoods.push(shopGoodsOne, shopGoodsTwo, shopGoodsThree);

document.write(money, shop,  shopGoodsOne, shopGoodsTwo, shopGoodsThree);

var mainList = {};

mainList = {
	money,
	shop,
	shopGoods,
	employers: {},
	open: false
};

var money = money / 30;

alert(Math.round(money));

console.log(Math.round(money));

console.log(mainList);


var num = (33721).toString();

var num = num[0]*num[1]*num[2]*num[3]*num[4];

console.log(num);*/

let money,

	name,

	time,

	price

function start() {
	money = prompt("Ваш бюджет","19000");

	while (isNaN(money) || money == null || money == "" ) {
		money = prompt("Ваш бюджет","19000");
	}

	name = prompt("Ваш магазин","Магнит").toUpperCase();

	time = 32;

	price = 1000;
}

start();

let mainList = {
	buget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false

}

/*mainList.employers = {
	1: prompt("Имя сотрудника","John"),
	2: prompt("Имя сотрудника","Bob"),
	3: prompt("Имя сотрудника","Oleg"),
	4: prompt("Имя сотрудника","Lola")
}*/

for(let i = 1; i < 5; i++){
	let a = prompt("Имя сотрудника","John");

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != "" && a.length < 50 ) {
		mainList.employers[i] = a
	} else {
		i = i -1;
	}
}

if (mainList.discount == true) {
	price = (price / 100)*80 ;
	console.log('Товар со скидкой' + "" +price)
} else{
	console.log('У вас нет скидки');
}



function shopChoose(){
	for(let i = 0; i < 5; i++){
		let a = prompt(" Какой тип товаров будем продовать?","all");

		if ((typeof(a)) ==='string' && (typeof(a)) != null && a != "" && a.length < 50 ){
			console.log("Все верно");
			mainList.shopGoods[i] = a
			// statement
		} else {
			i = i -1;
		}
	}
}

shopChoose();

function workTime() {
	if (time < 0 ) {
		console.log('Такого не может быть');
	} else if (time > 8 && time < 21 ) {
		console.log("Время работать");
	}else if (time < 24) {
		console.log("Уже слишком поздно");
	} else if ( time > 24 ) {
		console.log(" Такого просто не может быть");
	}
}

workTime();

alert("Бюджет на 1 день"+" "+Math.round(mainList.buget / 30));

console.log(mainList);