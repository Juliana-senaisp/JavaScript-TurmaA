/*
IMPORTAR O EXPRESS
Express ajuda a criar servidores facilmente
*/

const express = require("express");


/*
CRIAR O SERVIDOR
*/

const app = express();


/*
PERMITE RECEBER JSON NO POST
Sem isso o req.body não funciona
*/

app.use(express.json());


/*
PERMITE MOSTRAR A PASTA PUBLIC
HTML + CSS + JS no navegador
*/

app.use(express.static("public"));


/*
ARRAY QUE GUARDA AS TAREFAS
Por enquanto fica apenas em memória
*/

let tarefas = [];


/*
ROTA GET
Quando acessar /tarefas
ele devolve todas as tarefas
*/

app.get("/tarefas", function (req, res) {

    // Envia o array em formato JSON
    res.json(tarefas);
});


/*
ROTA POST
Quando enviar nova tarefa
ela será adicionada no array
*/

app.post("/tarefas", function (req, res) {

    /*
    req.body recebe:

    {
        nome: "Estudar Node"
    }
    */

    tarefas.push(req.body);

    // Resposta de confirmação
    res.json({
        mensagem: "Tarefa adicionada com sucesso"
    });
});


/*
LIGAR O SERVIDOR
Porta 3000
*/

app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000");
});