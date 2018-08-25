let date = new Date();

function hour() {
	
	if(date.getHours() > 9 ) {
		document.write(date.getHours() + " ");
	} else {
		document.write('0'+ date.getHours() + " ");
	}
}

function seconds(){
	if(date.getSeconds() > 9 ) {
		document.write(date.getSeconds()  + " ");
	} else {
		document.write('0'+ date.getSeconds()  + " ");
	}
}

function min() {
	if(date.getMinutes() > 9 ) {
		document.write(date.getMinutes() + " ")
	} else {
		document.write('0'+ date.getMinutes()  + " ");
	}
}

hour();

min();

seconds();
