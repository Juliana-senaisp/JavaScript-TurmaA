// let nome = prompt("Qual seu nome?")
function saudacao(nome) {
    return "Bom dia " + nome
}
// let aux = saudacao(nome)
// console.log(aux)
// console.log(saudacao(nome)) //assim também funciona

//CTRL ;

// let n1 = Number(prompt("Primeiro número"))
// let n2 = Number(prompt("Segundo número"))
function soma(n1, n2) {
    let resultado = n1 + n2
    return resultado
    // return n1 + n2 //assim também funciona
}
// let auxiliar = soma(n1,n2)
// console.log(auxiliar)
// console.log(soma(n1,n2))

// Classificação de temperatura
function previsaoDoTempo(temperatura) {
    if(temperatura > 30) {
        return "Calor"
    } else if (temperatura < 12) {
        return "Frio"
    } else {
        return "Ok"
    }
}
let temperatura = Number(prompt("Qual a temperatura?"))
let previsao = previsaoDoTempo(temperatura)
console.log(previsao)

/* Pergunte um salário para o funcionário, se for menor que 2500 dê 500 reais de aumento e mostre o novo salário, senão, mostre, "sem aumento" */
function classificacao(salario) {
    if (salario < 2500) {
        let aumento = salario + 500
        return aumento 
        //return salario + 500 // também funciona
    } else {
        return "Sem aumento"
    }
}
// let salario = Number(prompt("Qual o salário?"))
// console.log(classificacao(salario))

/* Peça um número para o usuário, e mostre uma porcentagem dele, se o número for menor ou igual a 100, mostre 10% do valor, se for menor ou igual a 1000, mostre 35% do valor, senão, mostre "sem porcentagem" */
function porcentagem(valor) {
    if (valor <= 100) {
        return valor * 0.1
    } else if (valor <= 1000) {
        return valor * 0.35
    } else {
        return "sem porcentagem"
    }
}
let valor = Number(prompt("Qual o valor?"))
console.log(porcentagem(valor))
