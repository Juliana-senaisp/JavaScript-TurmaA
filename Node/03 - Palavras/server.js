//server.js
//importando as bibliotecas
const express = require("express")
const mysql = require("mysql2")
const cors = require("cors") 

//cria o servidor usando o express
const app = express()
//ativar o cors no projeto
app.use(cors()) //CTRL C -> fecha o servidor
//permite que os dados recebam json
// {palavra: "maçã"}
app.use(express.json())

//Procura pelo index.html dentro da pasta public
app.use(express.static("public"))

//Conexão mysql
const conexao = mysql.createConnection({
    host: "localhost", //endereço
    user: "root", //usuário
    password: "senai",  //senha
    database: "palavras" //base de dados
})

//Testar a conexão
conexao.connect((erro) => {
    //se der erro na conexão
    if(erro) {
        console.log("Erro na conexão MySQL")
    } else {
        console.log("Conectado ao MySQL")
    }
})

//Cria um POST  chamada /salvar, ela vai salvar no banco
app.post("/salvar", (req, res) => {
    //Pega a palavra enviada pelo js(front-end)
    //req.body = dados enviados
    //palavra = nome da propriedade
    const palavra = req.body.palavra

    //Comando SQL para inserir dados
    const sql = "INSERT INTO palavra (texto) VALUES (?)"
    // A ? vai ser trocada pela palavra digitada

    //Executar o comando
    conexao.query(sql, [palavra], (erro) => {
        if(erro) {
            res.send("Erro no insert")
        } else {
            res.send("Palavra salva")
        }
    })
})
app.listen(3000, () => {
    console.log("Servidor funcionando")
})
//node server.js -> para executar o projeto

