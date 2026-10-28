// && -> Lógica “and” ou “e”, que retorna verdadeiro se todos os operandos forem verdadeiros.
// || -> Lógica “or” ou “ou”, que retorna verdadeiro se pelo menos um operando for verdadeiro
// ! -> Lógica “not” ou “não”, que inverte o valor lógico se é verdadeiro, retorna falso e se é falso retorna verdadeiro

let dinheiros = 2500
let sol = true
// let praia = dinheiros >= 2000 && sol == true

let praia = dinheiros >= 2000 || sol == true

console.log(`Vamos para a praia? ${!praia}`);


