//JS
function adicionar() {
    // Pegando o input e a lista do HTML
    let tarefa = document.getElementById("tarefa").value
    let lista = document.getElementById("lista")
    let tarefaInput = document.getElementById("tarefa")

    // Avisar se a tarefa tiver vazia
    if(tarefa == "") {
        alert("Digite uma tarefa")
        return //para cancelar a função
    }
    // Criar o <li>
    let novoItem = document.createElement("li")
    novoItem.innerText = tarefa
    // Adicionando o <li> no site
    lista.appendChild(novoItem)
    // Limpar o Input
    tarefaInput.value = ""
    // Apagar a tarefa
    novoItem.onclick = function() {
        lista.removeChild(novoItem)
    }

}