//Estrutura Condicional

let nota = 7
if(nota >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
console.log("---------------------------")
let idade = Number(prompt("Qual sua idade?"))
if (idade >= 18) {
    console.log("Pode tirar a habilitação")
} else {
    console.log("Idade insuficiente")
}
console.log("---------------------------")
let salario = Number(prompt("Qual seu salário?"))
let anos = Number(prompt("Você trabalha na empresa a quantos anos?"))

if(salario <= 3000 && anos >= 2) { 
//&& e = tudo tem que ser verdade
    console.log("Você terá um aumento")
} else {
    console.log("Ainda não")
}
console.log("---------------------------")
let chuva = true 
if (chuva) {
    console.log("Leva guarda-chuva")
} else {
    console.log("não precisa levar guarda-chuva")
}
console.log("---------------------------")
/* Peça dois números para o usuário e veja se o primeiro é menor que o segundo, se sim, mostre "o primeiro é menor", senão, mostre "o segundo é menor ou eles são iguais" */
let n1 = Number(prompt("Informe um número"))
let n2 = Number(prompt("Informe outro número"))
if(n1 < n2) {
    console.log("o primeiro é menor")
} else {
    console.log("o segundo é menor ou eles são iguais")
}
console.log("---------------------------")
/* Peça um número para o usuário e diga se o número é impar ou par */
let numero = Number(prompt("Diga um número"))
let aux = numero % 2
if (aux == 0) { //  (numero % 2) == 0
    console.log("é par")
} else {
    console.log("é impar")
}
console.log("---------------------------")
/* Uma loja da descontos para clientes com base no valor da compra, peça o valor da compra, se ele for maior ou igual a R$250, de  R$50 de desconto, e mostre o novo valor que será pago, senão, mostre apenas "sem desconto"*/
let valor = Number(prompt("Qual o valor da compra?"))
if (valor >= 250) {
    let valorNovo = valor - 50
    console.log("Você deverá pagar: ",valorNovo)
} else {
    console.log("Sem desconto")
}