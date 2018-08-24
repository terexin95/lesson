let link = document.querySelector('.link');
let linkA = document.getElementsByTagName('a');

if(link.innerHTML == ""){
	link.style.display = 'none';
}else {
	link.style.borderWidth = '10px';
}

console.log(link);
console.log(linkA);