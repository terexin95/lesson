window.addEventListener('DOMContentLoaded', function(){
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
});



