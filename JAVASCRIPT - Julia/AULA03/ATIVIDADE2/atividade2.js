const idade_dirigir = 18
let idade = parseInt(prompt(`Digite sua idade: `))

console.log(`Idade para poder dirigir: ${idade_dirigir}`);
console.log(`Sua idade é: ${idade}`)

if(idade>=idade_dirigir){
    console.log(`Você já dirigir!`)
}
else{
    console.log(`Você não dirigir!`)
}