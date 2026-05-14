//SERVER.JS
//npm init -y => INICIA O PROJETO DO NODE
//npm install express

const express = require("express")
const app = express()
//localhost:3000 => Abre o site do servidor
app.get("/", function(req, res) {
    res.send("Servidor Funcionando")
}) //CTRL C => Fecha o servidor
app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000")
})