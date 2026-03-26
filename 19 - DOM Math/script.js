// Math 

let numero = 4.2

// Arredondar um número
console.log(Math.round(numero))
// round -> arredonda para o mais próximo
console.log(Math.ceil(numero)) 
// ceil -> arredonda para cima 
console.log(Math.floor(numero))
// floor -> arredonda para baixo

console.log("-------------------------------")
//Raiz quadrada
console.log(Math.sqrt(25)) //5
console.log(Math.sqrt(81)) //9
console.log(Math.sqrt(100)) //10
//SQRT -> Raiz quadrada

console.log("-------------------------------")
// Máximo e Mínimo
console.log(Math.max(10, 5, 3, 8, 12)) //12
console.log(Math.min(10, 5, 3, 8, 12)) //3 

console.log("-------------------------------")
//Potência
//2³
console.log(Math.pow(2,3)) //2³ -> 8
console.log(Math.pow(57, 6)) // 57^6

console.log("-------------------------------")
//Número Aleatorio
console.log(Math.random()) // 0 e 1
console.log(Math.random() * 10)
console.log(Math.round(Math.random() * 50))
