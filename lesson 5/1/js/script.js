let newli = document.createElement('li');

newli.classList.add('menu-item');

newli.innerHTML = 'Пятый элемент';

let list = document.getElementById('list');

list.insertBefore(newli, list.children[4]);

let body = document.querySelector('body');

body.style.background = 'url(img/apple_true.jpg) ';

let title = document.querySelector('.title');

title.innerHTML = ('Подлинную технику Apple');

let add = document.querySelector('.adv');

let col = document.querySelectorAll('.column')

/*col.removeChild(add);*/
add.remove();

let apple = prompt('Ваше отношение к технике Apple', "Отличное");

let pr = document.querySelector('.prompt');

pr.innerHTML = apple;

/*
console.log(newli);
console.log(title);
console.log(add);
console.log(col[1]);
*/

