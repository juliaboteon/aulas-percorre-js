let altura = prompt(`Qual sua altura em metros?`)
let peso = Number(prompt(`Qual seu peso em metros?`))

let imc = (peso / (altura**2))


console.log(`${imc}`)
if( imc >= 18.5 && imc <= 24.9){
    alert(`Você está saudável`);
}
else{
    alert(`Você não está saudável`);
}