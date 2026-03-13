//Declarativas
function soma1(n1, n2) {
    return n1 + n2
}
let n1 = 5
let n2 = 7
console.log(soma1(n1,n2))

//Anônima
let soma2 = function(n3,n4) {
    return n3 + n4
}
let n3 = 5
let n4 = 7
console.log(soma2(n3,n4))

//Saudação
let bomDia = function(nome) {
    return "Bom dia " + nome
}
// let nome = prompt("Qual seu nome?")
// console.log(bomDia(nome))

//Multiplicar três números
let multiplicar = function(num1, num2, num3) {
    return num1 * num2 * num3
}
// let num1 = Number(prompt("Informe um número"))
// let num2 = Number(prompt("Informe um número"))
// let num3 = Number(prompt("Informe um número"))
// console.log(multiplicar(num1,num2,num3))

/* Peça uma temperatura, se tiver acima de 30 diga "calor", se tiver abaixo de 12 diga "frio", senão, diga "ok" */
let previsaoDoTempo = function(temperatura) {
    if(temperatura > 30) {
        return "Calor"
    } else if (temperatura < 12) {
        return "Frio"
    } else {
        return "OK"
    }
}
// let temperatura = Number(prompt("Qual a temperatura?"))
// console.log(previsaoDoTempo(temperatura))

/* Peça um salário, se ele for menor ou igual a 2500 dê 700 reais de aumento, senão se for menor ou igual a 3200, dê 300 reais de aumento, senão, mostre, "sem aumento" */
let aumento = function(salario) {
    if (salario <= 2500) {
        return salario + 700
    } else if (salario <= 3200) {
        return salario + 300
    } else {
        return "sem aumento"
    }
}
let salario = Number(prompt("Qual o salário?"))
console.log(aumento(salario))