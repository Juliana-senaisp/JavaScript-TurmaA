// //Laço de Repetição - While
// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++ //atualizador da condição
// }
// console.log("---------------------")
// let resposta = prompt("Deseja acessas o sistema?")
// while(resposta == "sim") {
//     console.log("Bem vindo ao sistema")
//     resposta = prompt("Deseja acessas o sistema?")
// }
// console.log("---------------------")
// let senha = prompt("Digite sua senha")
// while(senha != "senai2026") {
//     senha = prompt("Senha incorreta. Tente novamente:")
// }
// console.log("Acesso liberado")
// console.log("---------------------")
// //usando && e || 
// let nota = Number(prompt("Digite uma nota de 0 a 10:"))
// while(nota <0 || nota >10) {
//     nota = Number(prompt("Valor inválido. Digite novamente:"))
// }
// console.log("Nota válida: ", nota)
// console.log("---------------------")
// /* Peça para o usuário 3 números, some eles e mostre o resultado da soma */
// let soma = 0
// let aux = 1
// while (aux <= 3) {
//     let numero = Number(prompt("Digite um número"))
//     soma = soma + numero
//     aux++
// }
// console.log("O resultado é: ",soma)
// console.log("---------------------")
/* Peça para o usuário as credenciais de acesso, enquanto as credenciais não forem iguais a login == "TDS2" e a senha == "senai", continue perguntando */
let login = prompt("Qual o login?")
let senha2 = prompt("Qual a senha?")
while (login != "TDS2" || senha2 != "senai") {
    
        login = prompt("Qual o login?")
        senha2 = prompt("Qual a senha?")
    
}
// console.log("Pode acessar")
console.log("--------------------------")
// let x = 1
// while (x <= 10) {
//     console.log(x)
//     x++
// }
console.log("--------------------------")
// let magica = prompt("Qual a palavra mágica?")
// while(magica != "abracadabra") {
//     console.log("Errou")
//     magica = prompt("Errou. Qual a palavra mágica?")
// }
// console.log("Acertou")
///////// CTRL + ;

//Peça três números e mostre a multiplicação deles
let controlador = 1
let mult = 1
let num 
while (controlador <= 3) {
    num = Number(prompt("Informe o "+controlador+ "° numero"))
    mult = mult * num
    // __2__ = 1 * 2
    // __6__ = 2 * 3
    // __18__ = 6 * 3
    console.log(mult)
    controlador++
}
console.log("O resultado é:" ,mult)