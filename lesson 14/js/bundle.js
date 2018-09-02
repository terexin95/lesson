(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(){

	let tab = require('../parts/tab.js');
	let ajax = require('../parts/ajax.js');	
	let calc = require('../parts/calc.js');	
	let modal = require('../parts/modal.js');	
	let slider = require('../parts/slider.js');	
	let timer = require('../parts/timer.js');

	tab();
	ajax();
	calc();
	modal();
	slider();
	timer();	

});

},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function ajax() {
	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusM = document.createElement('div'),
		contactForm = document.getElementById('form'),
		contactInput = contactForm.getElementsByTagName('input');

		statusM.classList.add('status');

		form.addEventListener('submit', function(e){
			e.preventDefault();
			form.appendChild(statusM);

			let request = new XMLHttpRequest(); //Создаем 

			request.open('POST', 'server.php');

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlensoded');
			//Кодировка тектса

			let formData = new FormData(form);
				request.send(formData)

				request.onreadystatechange = function(){
					if (request.readyState < 4) {
						statusM.innerHTML = 'Загрузка';
					} else if (request.readyState === 4) {
						if (request.readyState == 200 && request.readyState < 300) {
							statusM.innerHTML = 'Все ок';
						} else {
							statusM.innerHTML = 'Все не ок';
						}
					}
				};

				for (let i = 0; i < input.length; i++) {
					input.value = '';
				};
		});

		contactForm.addEventListener('submit', function(e){
			e.preventDefault();
			contactForm.appendChild(statusM);

			let request = new XMLHttpRequest(); //Создаем 

			request.open('POST', 'server.php');

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlensoded');
			//Кодировка тектса

			let contactFormData = new FormData(form);
				request.send(contactFormData)

				request.onreadystatechange = function(){
					if (request.readyState < 4) {
						statusM.innerHTML = 'Загрузка';
					} else if (request.readyState === 4) {
						if (request.readyState == 200 && request.readyState < 300) {
							statusM.innerHTML = 'Все ок';
						} else {
							statusM.innerHTML = 'Все не ок';
						}
					}
				};

				for (let i = 0; i < input.length; i++) {
					input.value = '';
				};
		});
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc(){
		let priceCalc = document.querySelector('#price'),
		inputPrice = priceCalc.querySelectorAll('.counter-block-input'),
		select = document.querySelector('#select'),
		totalCalc = document.querySelector('#total'),
		mumbai = document.querySelector('#mumbai'),
		kerala = document.querySelector('#kerala'),
		varanasi = document.querySelector('#varanasi');

		
		function calcPrice() {
			for (let i = 0; i < inputPrice.length; i++){
				inputPrice[i].addEventListener('change', function(){
					select.addEventListener('change', () => {
						totalCalc.innerHTML = inputPrice[0].value * 12000 * inputPrice[1].value * select.value
					})
				});
			}
		}

		calcPrice();

}

module.exports = calc;
},{}],4:[function(require,module,exports){
function modal(){
	let more = document.querySelector('.more'),
		close = document.querySelector('.popup-close'),
		over = document.querySelector('.overlay');

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
		over.style.display = 'block';
	});

	close.addEventListener('click', function(){
		over.style.display = 'none'
		document.body.style.overflow = '';
		more.classList.remove('more-splash');
	})

	function clickBtnDesc(){
		let btnDescr = document.querySelectorAll('.description-btn');
			for(let i = 0; i < btnDescr.length; i++){
				btnDescr[i].addEventListener('click', function(){
					this.classList.add('more-splash');
					document.body.style.overflow = 'hidden';
					over.style.display = 'block';
				});
			};
	};

	clickBtnDesc();
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider() {
	let slideIndex = 1,
			slides = document.getElementsByClassName('slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.querySelectorAll('.dot');

			console.log(dotsWrap);
		slideShow(slideIndex)

		function slideShow(n) {
			if (n > slides.length) {
				slideIndex = 1; // Возвращаемя к самому первому слайду если n больше чем кол-во слайдов
			}

			if (n < 1 ) {
				slideIndex = slides.length; //Возвращает последний слайд
			}

			for (let i = 0; i < slides.length; i++){
				slides[i].style.display = 'none';
			}

			for (let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');
		};

		function plusSl(n){
			slideShow(slideIndex += n);
		}

		function curSl(n){
			slideShow(slideIndex = n);
		}

		prev.addEventListener('click', function(){
			plusSl(-1);
		});

		next.addEventListener('click', function(){
			plusSl(1);
		});
		dotsWrap.addEventListener('click', function(event){
			for ( let i = 0; i < dots.length+1; i++){
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					curSl(i);
				}
			}
		});
}
module.exports = slider;
},{}],6:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTab(a) {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	hideTab(1);

	function showTab(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTab(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};


	info.addEventListener('click', function(event){
		let target = event.target;
		if (target.className === 'info-header-tab') {
			for(let i = 0; i < tab.length; i++) {
				if (target === tab[i]) {
					showTab(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer(){
	let deadline = '2018-08-26';


	function timeR(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		min = Math.floor((t/1000/60) % 60),
		hours = Math.floor(t/(1000*60*60));
		if (seconds < 10) {
			seconds = '0' + seconds
		}

		if (min < 10) {
			seconds = '0' + seconds
		}

		if (hours < 10) {
			seconds = '0' + seconds
		}
		return {
			total: t,
			hours: hours,
			min: min,
			seconds: seconds
		}

	};

	function clockTime(id, endTime){
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			min = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function timeIntr() {
				let t = timeR(endTime);
				hours.innerHTML = t.hours;
				min.innerHTML = t.min;
				seconds.innerHTML = t.seconds;
				if (t.total <= 0 ) {
					clearInterval(timeIntr);
					hours.innerHTML = '00';
					min.innerHTML = '00';
					seconds.innerHTML = '00';
				}
			};
			timeIntr();

			timeInterval = setInterval(timeIntr, 1000);
	};

	clockTime('timer', deadline);
}
module.exports = timer;
},{}]},{},[1]);
