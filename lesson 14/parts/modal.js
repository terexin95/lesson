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