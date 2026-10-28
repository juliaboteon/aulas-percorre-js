let nome = "Nicolas"
let nota1 = 9.0
let nota2 = 6.0
let curso = "Desenvolvimento Web"

let media = (nota1 * 0.6) + (nota2 * 0.4) 

let aprovado = media >=7.0

console.log(`O aluno ${nome}, que teve nota 1 = ${nota1} e nota 2 = ${nota2}, ficou com média ${media.toFixed(1)}`);
console.log(`Com essa nota o aluno foi aprovado? ${aprovado}`);

