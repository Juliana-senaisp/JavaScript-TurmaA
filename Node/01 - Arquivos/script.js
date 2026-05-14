const fs = require('fs')
fs.writeFileSync(
    "mensagem.txt",
    "Criei um bloco de notas com node.js"
)
console.log("Arquivo criado com sucesso!")
/* Crie um bloco de notas com seu nome, turma, curso e filme favorito */

//JSON
const pessoa = {
    nome: "Juliana",
    idade: 25,
    cidade: "Suzano"
}
fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)
console.log("Json criado com sucesso")
/* Crie um arquivo JSON chamado "informacoes" com seu nome, idade, telefone e email */

//npm install docx -> biblioteca do word

//Importar partes especificas da biblioteca word
const {
    Document, //Criar o word
    Packer,  //transformar o documento em word
    Paragraph, //Cria Parágrafos 
    TextRun //Adicionar textos
} = require("docx")


//Criando um documento do word
const doc = new Document({
    //página -> seção -> parágrafo -> texto
    sections: [
        {
            //configurar da seção (margem, tamanho da página)
            properties: {},
            //filhos da seção - funciona como o body
            //textos, tabelas, imagens etc.
            children: [
                new Paragraph({ //1º Paragráfo
                    children: [ //titulo do word
                        new TextRun("Arquivo Word")
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun("Textos importantes")
                    ]
                })
            ]
        }
    ]
})
Packer.toBuffer(doc)
    .then((buffer) => {
        fs.writeFileSync(
            "relatorio.docx",
            buffer
        )
        console.log("O word foi criado")
    })




