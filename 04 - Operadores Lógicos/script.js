//04 - Operadores Lógicos
// && - e - tudo tem que ser verdade
// || - ou - apenas uma coisa deve ser verdade
// ! - não - inverte o resultado

let idade = 18
let convite = true
console.log(idade >= 18 && convite == true) //true

console.log("-----------------------")
let dia = "quinta" 
console.log(dia == "sabado" || dia == "domingo") //false

console.log("-----------------------")
let valor = 20
console.log(valor >= 10 && valor <= 99) //true

console.log("-----------------------")
let bloqueado = false
console.log(!bloqueado) //true

console.log("-----------------------")
let numero = Number(prompt("Informe um número"))
console.log(!(numero >= 100))

console.log("-----------------------")
/* Para fazer login em um computador do Senai, o usuário
deve ser "TDS2" e a senha "senai2026". Faça o código que
pergunte as credenciais para o usuário e mostre se ele
consegue ou não acessar */
let usuario = prompt("Qual seu usuário?")
let senha = prompt ("Qual sua senha?")
console.log(usuario == "TDS2" && senha == "senai2026")

/* Para ser aprovado o aluno precisa ter nota maior ou
igual a 50 e ter a frequência maior ou igual a 75. 
Peça as informações para o usuário e veja se ele será 
aprovado */
let nota = Number(prompt("Qual sua nota?"))
let frequencia = Number(prompt("Qual sua frequencia?"))
console.log(nota >= 50 && frequencia >= 75)

/* Para assistir um filme de terror no cinema, é preciso
ter idade maior ou igual a 14 ou estar acompanhado do 
responsável */
let responsavel = prompt("Está acompanhado?")
let idade2 = Number(prompt("Qual sua idade?"))
console.log(idade2 >= 14 || responsavel == "sim")

/* Para fazer academia do Sesi você deve ser aluno do
sesi ou do senai e pagar a mensalidade */
let escola = prompt("De qual escola você é?")
let mensalidade = prompt("Você paga a mensalidade?")
console.log((escola == "sesi" || escola == "senai") &&
    mensalidade == "sim"
)
console.log("--------------------")
/* Pergunte para o usuário se ele tem internet (true/false)
e mostre */
let internet = prompt("Você tem internet?")
console.log(internet == "true")
console.log(internet)