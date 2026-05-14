let perguntas = [
    {
        pergunta: "Qual o nome da nossa Escola?",
        respostas: ["Luis Eulalio de Bueno Vidigal Filho", "Nami Jafet", "Senai Osasco", "Senai São Caetano"],
        correta: 0 //Luis Eulalio de Bueno Vidigal Filho
    },
    {
        pergunta: "Qual o nome do diretor da escola? ",
        respostas: ["Santos", "Moraes", "Sanches", "Willian"],
        correta: 3 //Willian
    },
    {
        pergunta: "Em que ano começou o primeiro técnico em Desenvolvimento de Sistemas?",
        respostas: ["2020", "2021", "2022", "2023"],
        correta: 3 //2023
        // 2020 -> 0     2022 -> 2
        // 2021 -> 1     2023 -> 3
    }
]
// Variáveis de controle
let perguntaAtual = 0
//Qual pergunta ta sendo exibida
//Começa na posição 0 //Primeira pergunta
let pontuacao = 0 //Quantas respostas certas

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    //Pega a pergunta atual dentro do array

    document.getElementById("pergunta").innerText = pergunta.pergunta

    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""
    //Limpa a div antes de adicionar novas respostas
    pergunta.respostas.forEach(function(resposta, index) {
        respostasDiv.innerHTML += `<button onclick="verificarResposta(${index})">${resposta}</button>`
    })
}
function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual]
    let resultado = document.getElementById("resultado")
    if(index == pergunta.correta) {
        resultado.innerText = "Acertou"
        pontuacao++
    } else {
        resultado.innerText = "Errou"
    }
}
function proximaPergunta() {
    perguntaAtual++
    //vai para a próxima pergunta
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta()
        document.getElementById("resultado").innerText = ""
    } else {
        mostrarResultadoFinal()
    }
}
function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
    <h2>Quiz Finalizado!</h2>
    <p>Sua pontuação foi: ${pontuacao}</p>
    <button onclick="location.reload()">Jogar novamente</button>
    ` //acento agudo ao lado do p
    //location.reload() = recarrega a página
}
mostrarPergunta()
