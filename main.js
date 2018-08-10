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

let money = prompt("Ваш бюджет","19000");

let name = prompt("Ваш магазин","Магнит");

let time = 20;

let mainList = {
	buget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false

}

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


if (time < 0 ) {
	console.log('Такого не может быть');
} else if (time > 8 && time < 21 ) {
	console.log("Время работать");
}else if (time < 24) {
	console.log("Уже слишком поздно");
} else if ( time > 24 ) {
	console.log(" Такого просто не может быть");
}

alert("Бюджет на 1 день"+" "+Math.round(mainList.buget / 30));

console.log(mainList);