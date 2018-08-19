let open = document.querySelector('#open-btn');
let nameValue = document.querySelector('.name-value');
let budgetValue = document.querySelector('.budget-value');
let goodsValue = document.querySelector('.goods-value');
let itemsValue = document.querySelector('.items-value');
let employersValue = document.querySelector('.employers-value');
let discountValue = document.querySelector('.discount-value');
let isopenValue = document.querySelector('.isopen-value');

let goodsItem = document.querySelectorAll('.goods-item');

let goods_item_btn = document.getElementsByTagName('button')[1];
let count_budget_btn = document.getElementsByTagName('button')[2];
let hire_employers_btn = document.getElementsByTagName('button')[3];

let itemsI = document.querySelector('#items');

let timeWork = document.querySelector('#time');

let budgetIn = document.querySelector('#budget');

let hireEmployersItem = document.querySelectorAll('.hire-employers-item');

//let chooseItem = document.querySelector('.choose-item');

alert('Откройте магазин и установите время');

let money,
	price

open.addEventListener('click', () => {

	money = prompt("Ваш бюджет","19000");

	while (isNaN(money) || money == null || money == "" ) {
		money = prompt("Ваш бюджет","19000");
	}

	budgetValue.textContent = money;

	name = prompt("Ваш магазин","Магнит").toUpperCase();

	nameValue.textContent = name;
});


budget.setAttribute('disabled', 'disabled');


goods_item_btn.addEventListener('click', (event) => {
	if (mainList.open == false && money != "") {
		event.preventDefault();
	} else {
			for(let i = 0; i < goodsItem.length; i++){
			let a = goodsItem[i].value;

			if ((typeof(a)) ==='string' && (typeof(a)) != null && a.length < 50 ){
				console.log("Все верно");
				mainList.shopGoods[i] = a
				goodsValue.textContent = mainList.shopGoods;
				// statement
			} else {
				i = i -1;
			}
		}
	}

});

itemsI.addEventListener('change', () => {
	let items = itemsI.value;
if (mainList.open == false && money != "") {
		event.preventDefault();
	} else {
		if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(', ');
			mainList.shopItems.sort();
			itemsValue.textContent = items;
		}	
	}
	
});

timeWork.addEventListener('change', () => {
	let time = timeWork.value; 

	if (time < 0 ) {
			console.log('Такого не может быть');
			mainList.open = false;
		} else if (time > 8 && time < 21 ) {
			console.log("Время работать");
			mainList.open = true;
		}else if (time < 24) {
			console.log("Уже слишком поздно");
			mainList.open = false;
		} else if ( time > 24 ) {
			console.log(" Такого просто не может быть");
			mainList.open = false;
		};
	if (mainList.open == true) {
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}
});

discountValue.textContent = "";

discountValue.style.cssColor = 'white';
discountValue.style.fontSize = '12px';




let btnDisc = document.createElement('button');

btnDisc.textContent = 'Нажмите чтобы узнать скидку';

discountValue.appendChild(btnDisc);

btnDisc.style.cssText = " color: #fff; \
	background-color: #9e0b0b; \
	border: 2px solid #871414;\
	border-radius: 15px;\
	padding: 7px 10px;\
	outline: 0;\
	cursor: pointer;\
 ";

btnDisc.addEventListener('click', (event) => {
	if (mainList.open == false && money != "") {
		event.preventDefault();
	} else {
		btnDisc.textContent = '29%';
		btnDisc.style.cssText = "background-color: green; border-color: blue; color: #fff; width: 100%; font-size: 24px; border-radius: 15px; outline: 0;"
	}
	
});
console.log(btnDisc);






count_budget_btn.addEventListener('click', (event) => {
	if (mainList.open == false && money != "") {
		event.preventDefault();
	} else {
		budget.value = money / 30;
	}
	
});

hire_employers_btn.addEventListener('click', (event) => {

	if (mainList.open == false && money != "") {
		event.preventDefault();
	} else {
		for(let i = 0; i < hireEmployersItem.length; i++){
		let a = hireEmployersItem[i].value;
		mainList.employers[i] = a;

		employersValue.textContent += mainList.employers[i] + ', '
	}
	}

	

});

console.log(money);

let mainList = {
	buget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	discountAnswer: function discountAnswer() {
		let answerDiscount = confirm("У вас есть скидка?");
			if (answerDiscount == true) {
				price = (price / 100)*80 ;
				console.log('Товар со скидкой ' + "" + price)
			} else{
				console.log('У вас нет скидки');
			}
		},
	}

console.log(mainList);