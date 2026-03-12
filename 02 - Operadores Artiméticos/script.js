//Operadores Aritméticos
let numero1 = 5
let numero2 = 7
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2
let modulo = numero1 % numero2 //resto da divisão

console.log("A soma é: " + soma)
console.log("A subtração é: " + subtracao)
console.log("A multiplicação é: " + multiplicacao)
console.log("A divisão é: ", divisao)
console.log(`O resto da divisão é ${modulo}`)

//incremento e decremento
let contador = 10
contador++ //+1
console.log(contador) //11
contador-- //-1
console.log(contador) //10
contador += 5 //15
contador -= 2 //13
//-------------------------------

let salario = Number(prompt("Qual seu salário? "))
let total = salario + 100
console.log(total)

/*Um grupo de amigos foi a um restaurante, no final eles decidiram dividir a conta. Faça um programa que peça a quantidade de amigos e o valor da conta e mostre quanto cada um deve pagar*/
let amigos = Number(prompt("Quantos amigos são:"))
let conta = Number(prompt("Qual o valor da conta?"))
let valor = conta / amigos
console.log("Cada amigo vai pagar: " + valor)

/* Um grupo de três amigos quer juntos comprar uma pizza, cada um irá contribuir com uma quantia de valor. Faça um programa que receba quanto cada amigo irá contribuir e mostre quanto eles tem juntos*/
let amigo1 = Number(prompt("Quanto vai contribuir?"))
let amigo2 = Number(prompt("Quanto vai contribuir?"))
let amigo3 = Number(prompt("Quanto vai contribuir?"))
let juntos = amigo1 + amigo2 + amigo3
console.log("Eles juntos tem: "+ juntos)

/* Uma loja de doces vende produtos em grande quantidade. Faça um programa que peça a quantidade do produto comprado, o valor unitário e mostre quanto o cliente vai pagar. */
let valorUnitario = Number(prompt("Qual o valor?"))
let quantidade = Number(prompt("Qual a quantidade?"))
let pagar = valorUnitario * quantidade
console.log("Deve pagar: " + pagar)
