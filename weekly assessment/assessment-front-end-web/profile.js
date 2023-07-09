function favcolor(evt) {
	evt.preventDefault();
	
	alert('My favorite color is Green.');
}
function favplace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is Home.');
}
function favritual(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual is reading a good book in a warm bath.');
}

let favcolorBtn = document.querySelector('#color');

let favplaceBtn = document.querySelector('#place');

let favritualBtn = document.querySelector('#ritual');

favcolorBtn.addEventListener('click', favcolor);
favplaceBtn.addEventListener('click', favplace);
favritualBtn.addEventListener('click', favritual);
