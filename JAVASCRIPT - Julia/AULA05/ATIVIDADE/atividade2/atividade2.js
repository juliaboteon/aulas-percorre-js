let numero
let soma = 0

do {
    let entrada = prompt(`Informe outro número(0 - Encerra o programa)`)
    numero = parseInt(entrada)
    soma  += numero
} while (numero !== 0 );

console.log(`A soma foi de ${soma}`);