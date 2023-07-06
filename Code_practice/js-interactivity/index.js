// console.log('Hello world')
const message = document.querySelector('#message');
function addMovie(evt){
    evt.preventDefault();
    let inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);


    const dltBtn = document.createElement('button');
    dltBtn.textContent = 'x'
    dltBtn.addEventListener('click', deleteMovie);
    movie.appendChild(dltBtn);



    list = document.querySelector('ul');
    list.appendChild(movie);
    inputField.value=''
}
document.querySelector('form').addEventListener('submit', addMovie);
// dltBtn.addEventListener('click', deleteMovie)
function deleteMovie(evt){
    evt.target.parentNode.remove()
    message.textContent = `${evt.target.parentNode.firstChild.textContent} deleted!`
    revealMessage();
}
function crossOffMovie(evt){
    evt.target.classList.toggle('checked');
    if (evt.target.classList.contains('checked')){
        message.textContent = `${evt.target.textContent} watched!`
    } else {
        message.textContent = `${evt.target.textContent} added back!`
    }
    revealMessage();
}
function revealMessage(){
    message.classList.remove('hide');
    setTimeout(()=>{
        message.classList.add('hide')},1000
    )
}