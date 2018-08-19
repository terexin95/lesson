
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
	discount: false,
	chooseGoods: function chooseGoods(){
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
	},
	workTime: function workTime(time) {
		if (time < 0 ) {
			console.log('Такого не может быть');
		} else if (time > 8 && time < 21 ) {
			console.log("Время работать");
			mainList.open = true;
		}else if (time < 24) {
			console.log("Уже слишком поздно");
		} else if ( time > 24 ) {
			console.log(" Такого просто не может быть");
		}
	},

	time: 12,

	employersJob: function employersJob()  {
			for(let i = 1; i < 5; i++){
				let a = prompt("Имя сотрудника","John");

				if ((typeof(a)) === 'string' && (typeof(a)) != null && a != "" && a.length < 50 ) {
					mainList.employers[i] = a
				} else {
					i = i -1;
				}
			}
		},

	discountAnswer: function discountAnswer() {
		let answerDiscount = confirm("У вас есть скидка?");
			if (answerDiscount == true) {
				price = (price / 100)*80 ;
				console.log('Товар со скидкой ' + "" + price)
			} else{
				console.log('У вас нет скидки');
			}
		},

	/*chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечислите ваши товары через запятую', '');
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Может что - то еще? ", '')) ;
		mainList.shopItems.sort();
	}*/

}

/*mainList.employers = {
	1: prompt("Имя сотрудника","John"),
	2: prompt("Имя сотрудника","Bob"),
	3: prompt("Имя сотрудника","Oleg"),
	4: prompt("Имя сотрудника","Lola")
}*/




function chooseShopItems() {
	
	for(let i = 1; i < 2; i++){
				let items = prompt("Перечислите ваши товары через запятую","John,bob");

				if ((typeof(items)) === 'string' && (typeof(items)) != null && items != "" && items.length < 50 ) {
					mainList.shopItems = items.split(",");
					mainList.shopItems.push(prompt("Может что - то еще? ", 'qwq')) ;
					mainList.shopItems.sort();
				} else {
					i = i - 1;
				}
			}

}

chooseShopItems();


mainList.shopItems.forEach(function(item, i, shopItems) {
	
  console.log( ++i + ": " + item + " (массив:" + mainList.shopItems + ")" );

});




alert("Бюджет на 1 день"+" "+Math.round(mainList.buget / 30));

console.log(mainList);