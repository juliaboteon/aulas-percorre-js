
let lista = document.getElementsByClassName('item')


for (let i = 0; i < lista.length; i++) {
    if (i % 2) lista[i].style.backgroundColor = 'white';
    else lista[i].style.backgroundColor = 'red';
    }

let paragrafo = document.getElementsByTagName('p')

paragrafo[1].style.color='greenyellow'

let teste = document.getElementsByName('teste')