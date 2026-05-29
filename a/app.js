// Importa a biblioteca nativa "fs"
// fs significa File System (Sistema de Arquivos)
// Ela serve para criar, ler, editar e apagar arquivos

const fs = require("fs");


// Aqui estamos importando partes específicas da biblioteca "docx"

const {
    Document,   // cria o documento Word
    Packer,     // transforma o documento em arquivo real
    Paragraph,  // cria parágrafos
    TextRun     // adiciona textos dentro do parágrafo
} = require("docx");



/*
Aqui estamos criando o documento Word
*/

const doc = new Document({
    /*
    sections = o Word é dividido em seções
    Pense como:
    página → seção → parágrafos → texto
    */
    sections: [
        {
            /*
            properties = configurações da seção
            Como margem, tamanho da página etc.
            Como não queremos nada especial agora,
            deixamos vazio
            */
            properties: {},

            /*
            children = filhos da seção

            Aqui colocamos tudo que vai aparecer:
            textos, tabelas, imagens, etc.
            */

            children: [

                /*
                Primeiro parágrafo
                */

                new Paragraph({

                    /*
                    children = conteúdo dentro do parágrafo
                    */

                    children: [

                        /*
                        TextRun adiciona um texto

                        Aqui será o título
                        */

                        new TextRun("Relatório de Aluno")
                    ]
                }),


                /*
                Segundo parágrafo
                */

                new Paragraph({

                    children: [

                        /*
                        Outro texto
                        */

                        new TextRun("Nome: Juliana")
                    ]
                })

            ]
        }

    ]
});



/*
Agora precisamos transformar esse documento
em um arquivo Word de verdade
*/

Packer.toBuffer(doc)

    /*
    .then() espera essa conversão terminar

    Porque essa operação pode demorar um pouco
    */

    .then((buffer) => {

        /*
        buffer = arquivo pronto em memória

        Agora vamos salvar no computador
        */

        fs.writeFileSync(

            /*
            Nome do arquivo que será criado
            */

            "relatorio.docx",

            /*
            Conteúdo do arquivo
            */

            buffer
        );


        /*
        Mensagem no terminal avisando que deu certo
        */

        console.log("Word criado com sucesso!");
    });