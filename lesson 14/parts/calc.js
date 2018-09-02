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