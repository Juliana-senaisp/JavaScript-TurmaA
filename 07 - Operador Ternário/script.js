//Operador Ternário
let idade = 18
let situacao
if (idade >= 18) {
    situacao = "Maior de idade"
} else {
    situacao = "Menor de idade"
}
console.log(situacao)
console.log("--------------------")
let idade2 = 15
let situacao2 = idade2 >= 18 ? "Maior de idade" : "Menor de idade"
console.log(situacao2)
console.log("--------------------")

let nota = Number(prompt("Qual sua nota? "))
let resultado = nota >= 7 ? "Aprovado" : "Reprovado"
console.log(resultado)
/* if (nota>=7) {
    resultado = "Aprovado"
} else {
    resultado = "Reprovado"
}*/
console.log("--------------------")
let acesso = prompt("Qual seu acesso?")
let entrada = acesso == "admin" ? "Acesso total" : acesso == "prof" ? "pode lançar notas" : "apenas leitura"
console.log(entrada)
//  if (acesso == "admin") {
//  entrada = "acesso total"
// } else if (acesso == "prof") {
// entrada = "pode lançar notas" 
// } else {
// entrada = "apenas leitura"
// }
console.log("----------------------------")
/* Peça uma temperatura para o usuário, se ela for maior ou igual a 30, mostre "Está Calor", senão, "Não está Calor" */
let temperatura = Number(prompt("Qual a temperatura?"))
let clima = temperatura >= 30 ? "Está Calor" : "Não está calor"
console.log(clima)
console.log("----------------------------")
/* Peça um número para o usuário e diga se ele é positivo, negativo ou se é zero */
let numero = Number(prompt("Diga um número"))
let resultado2 = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Zero"
console.log(resultado2)
console.log("----------------------")
/* Peça uma média para o usuário e classifique:
- Excelente, para média maior ou igual a 9
- Bom,  para média maior ou igual a 7
- Regular, para média maior ou igual a 5
- Reprovado, caso contrário */
let media = Number(prompt("Qual sua média?"))
let condicao = media >= 9 ? "Excelente" : media >= 7 ? "Bom" : media >= 5 ? "Regular" : "Reprovado"
console.log(condicao)