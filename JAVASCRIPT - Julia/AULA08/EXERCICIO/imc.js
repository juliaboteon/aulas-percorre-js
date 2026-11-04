function calcularIMC(){
    let altura = Number(document.querySelector('#altura').value)
    let peso = Number(document.querySelector('#peso').value)
    let calculo = peso / altura**2

    let imc = document.querySelector('h3')
    imc.innerHTML = `Seu IMC é: ${calculo.toFixed(2)}`

}