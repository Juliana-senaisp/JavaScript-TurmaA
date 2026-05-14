/*
FUNÇÃO PARA BUSCAR AS TAREFAS NO SERVIDR
Essa função pega as tarefas que estão no Node.js
e mostra na tela
*/

function carregarTarefas() {

    // fetch busca informações do servidor
    fetch("/tarefas")

        // Quando a resposta chegar
        .then(function (resposta) {

            // Transforma em JSON
            return resposta.json();
        })

        // Depois que virar JSON
        .then(function (dados) {

            /*
            dados = lista de tarefas
            Exemplo:
            [
                { nome: "Estudar JS" },
                { nome: "Fazer atividade" }
            ]
            */

            // Pega a UL da página
            let lista = document.getElementById("lista");

            // Limpa a lista antes de mostrar novamente
            lista.innerHTML = "";

            // Percorre cada tarefa
            dados.forEach(function (tarefa) {

                // Adiciona cada tarefa na tela
                lista.innerHTML += `
                    <li>${tarefa.nome}</li>
                `;
            });
        });
}


/*
FUNÇÃO PARA ADICIONAR NOVA TAREFA
Essa função pega o texto digitado
e envia para o servidor
*/

function adicionarTarefa() {

    // Pega o valor digitado no input
    let texto = document.getElementById("tarefa").value;

    // Verificação simples
    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    /*
    Envia para o servidor usando POST
    */

    fetch("/tarefas", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        // Converte objeto para JSON
        body: JSON.stringify({
            nome: texto
        })
    })

    // Quando terminar
    .then(function () {

        // Limpa o input
        document.getElementById("tarefa").value = "";

        // Atualiza a lista
        carregarTarefas();
    });
}


/*
INICIA A LISTA AUTOMATICAMENTE
Assim que a página abrir
*/

carregarTarefas();