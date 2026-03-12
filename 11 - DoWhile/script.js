//Laço de Repetição - DoWhile
//Mostrando números de 1 a 5
let num1 = 6
while (num1 <= 5) {
    console.log("While")
    console.log(num1)
    num1++
}
console.log("-------------------")
let num2 = 6
do {
    console.log("DoWhile")
    console.log(num2)
    num2++
} while (num2 <= 5)
console.log("-------------------")
// let resposta 
// do {
//     resposta = prompt("Deseja continuar?")
// } while (resposta == "sim")
console.log("-------------------")
// let soma = 0
// let num
// let contador = 1
// do {
//     num = Number(prompt("Digite um número: "))
//     soma = soma + num
//     console.log(soma)
//     contador++
// } while (contador <= 3)
// console.log("Resultado final: ",soma)
console.log("-------------------")
// let usuario
// let senha
// do {
//     usuario = prompt("Qual o usuário?")
//     senha = prompt("Qual a senha?")
// } while (usuario != "admin" || senha != "senha")
console.log("-------------------")
/* Mostre os números de 1 a 99 pulando de 2 em 2 */
// let cont = 1
// do {
//     console.log(cont)
//     cont += 2
// } while(cont <= 99) 
console.log("-------------------")
/* Uma pessoa é selecionada em um grupo dependendo da escola que estudou, pergunte para o usuário a escola até que ele responda "Senai" */
let escola
do {
    escola = prompt("Em qual escola você estudou?")
} while (escola != "Senai")
console.log("Você é Senaiano")