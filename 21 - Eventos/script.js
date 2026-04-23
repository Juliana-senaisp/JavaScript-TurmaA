//Script
let texto = document.getElementById("texto")
function mudar() {
    texto.innerText = "Trocou o texto"
}

// --------------------------------------------
let texto2 = document.getElementById("texto2")
let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    texto2.innerText = "Mudou com evento"
})
// ---------------------------------------------
let input = document.getElementById("input")
let mensagem = document.getElementById("mensagem")

input.addEventListener("input", function() {
    mensagem.innerText = input.value
    //.value pode ficar em qualquer lugar
})
// -------------------------------------------
let clique = document.getElementById("clique")
let total = document.getElementById("total")
let contador = 0
clique.addEventListener("click", function() {
    contador++ //++ = +1
    total.innerText = contador
}) 
// -------------------------------------------
let texto3 = document.getElementById("texto3")
texto3.addEventListener("mouseover", function() {
    if(texto3.innerText == "Você achou o texto secreto") {
        texto3.innerText = "Texto Inicial"
    } else {
        texto3.innerText = "Você achou o texto secreto"
    }
})
// ---------------------------------------------
let imagem = document.getElementById("imagem")
// Ativa quando passa o mouse
imagem.addEventListener("mouseover", function() {
    imagem.src = "caixa-aberta.jpg"
})
// Ativa quando sai o mouse
imagem.addEventListener("mouseout", function() {
    imagem.src = "caixa-fechada.jpg"
})

/* Crie um texto que muda a cor de fundo para vermelho e a cor do texto para amarelo quando passa o mouse, quando o mouse sai, desfaz */
let troca = document.getElementById("troca")
troca.addEventListener("mouseover", function() {
    troca.style.color = "yellow"
    troca.style.backgroundColor = "red"
})
troca.addEventListener("mouseout", function() {
    troca.style.color = "black"
    troca.style.backgroundColor = "white"
})








