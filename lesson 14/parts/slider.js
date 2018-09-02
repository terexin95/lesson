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