console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function handlepic(evt) {
	evt.preventDefault();
	alert('You are awesome! Be confident!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let pic = document.querySelector('img');
pic.addEventListener('mouseover',handlepic);