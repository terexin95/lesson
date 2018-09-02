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