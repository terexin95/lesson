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