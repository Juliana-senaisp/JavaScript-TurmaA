const fs = require("fs");

const aluno = {
    nome: "Juliana",
    curso: "DS"
};

fs.writeFileSync(
    "aluno.json",
    JSON.stringify(aluno)
);

console.log("JSON criado!");