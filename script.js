const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid
});

h1.innerHTML = 'Patito <br/> Feo';
h1.innerText = 'Patito <br/>Feo';

console.log(h1.getAttribute('pantalla'));
h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = 'David';

const img = document.createElement('img');
img.setAttribute('src', 'https://play-lh.googleusercontent.com/xGWtxUYbGvI5NjlJdtAwBENJBYM9rf1n0KCQZgJoKavOW_ZP0sI-C7oXWD1H_1PVI5k');

pid.append(img);