// Escopo Global
// Pode ser redeclarada
var nome_aluno01 = "Julia" // Tipo: String
var idade_aluno01 = 22 // Tipo: Number (float ou int)

// Escopo de Bloco
// NÃO pode ser redeclarada
let nome_aluno02 = "Duda"
let idade_aluno02 = 22

// NAO pode ter seu valor redefinido
// NAO pode ser redeclarada
const bebida = 18
const media_percorre = 7

//const bebida = 16

let intervalo30min = true


// Tipos de Dados

// Tipo Boolean - true | false
// Tipo Number  - 2 | 2.0
// Tipo String - "nome" | 'nome' | `nome`
// Declaração de variável

// let - Escopo de bloco (Pode ter seu valor redefinido mas não redeclarada)
// var - Escopo Global (Pode ser redeclarada e redefinida)
// const - Constante (Não pode ser redeclarada e nem redefinida)


let nome = "Julia"
let jogo = "Subway Surfers"
let idade = 22
let joga_na_aula = false

console.log("Olá, Mundo!")
console.log("Olá",nome + ".", "Sua idade é:", idade); // vírgula na separação ele da um espaço
// se usado o + ele não da espaço

console.log(`Olá, ${nome}! Você está jogando na aula? ${joga_na_aula}!`); // interpolação

console.log('Olá, ' + nome + "! você está jogando na aula? " + joga_na_aula + "!"); // concatenação

let nota1 = 10
let nota2 = 9

let media = (nota1+nota2) /2
console.log(`\nA média das notas é ${media}`);

console.log("Até aqui ta ok!");