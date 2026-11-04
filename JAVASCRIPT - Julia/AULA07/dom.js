let titulo = document.getElementById('titulo');
titulo.style.backgroundColor = '#CCCCC9'; 
titulo.style.margin = '20px';
// conseguimos alterar o css pelo js

let paragrafo = window.document.getElementById('texto')
paragrafo.innerHTML = 'Parágrafo alterado no JS'

// let lista = document.getElementsByClassName('item')

// lista[2].style.color = 'red'
// podemos fazer assim tambem:
let lista = document.getElementsByClassName('item')[1]

lista.style.color = 'red'