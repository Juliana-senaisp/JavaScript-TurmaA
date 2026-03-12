//Funções com Parâmetro

//Declarativa sem parametro e retorno
function saudacao() {
    let nome = prompt("Qual seu nome?")
    console.log("Bom dia",nome)
}
//saudacao() //chamando a função

//Declarativa com parâmetro
function saudacao2(nome2) {
    console.log("Bom dia", nome2)
}
// let nome2 = prompt("Qual seu nome?")
// saudacao2(nome2)

//Somar dois números
function soma(num1, num2) {
    let soma = num1 + num2
    console.log("A soma é:",soma)
}
// let num1 = Number(prompt("Informe um número"))
// let num2 = Number(prompt("Informe outro número"))
// soma(num1,num2)
//CTRL ;

function maioridade(idade) {
    if(idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}
maioridade(20)
maioridade(10)
maioridade(16)
console.log("-----------------------")
/* Peça um número para o usuário, crie um função que calcule o dobro e mostre o resultado */
function dobro(numero) {
    let aux = numero * 2 //numero + numero
    console.log("O dobro é", aux)
}
let numero = Number(prompt("Digite um número"))
dobro(numero)

/* Uma empresa solicitou um sistema de aumento para os funcionários, crie uma função que recebe um salário, se ele for menor que 2500, dê 500 reais de aumento e mostre o novo salário, senão, apenas mostre, "sem aumento" */
function aumento(salario) {
    if (salario < 2500) {
        let novoSalario = salario + 500
        console.log("Novo salário é: ",novoSalario)
    } else {
        console.log("Sem aumento")
    }
}
// let salario = Number(prompt("Qual o salário?"))
// aumento(salario)

/* Crie um função para controle de alunos, a função deve mostrar o nome, a idade, e o curso que faz no Senai */
function dados(nome2, idade2, curso) {
    console.log(nome2,"tem",idade2,"anos e cursa", curso)
}
let nome2 = prompt("Qual seu nome?")
let idade2 = Number(prompt("qual sua idade"))
let curso = prompt("Qual seu curso?")
dados(nome2, idade2, curso)