// script.js
//async e await - usamos quando trabalhamos com coisas ou processo que podem demorar 

async function salvar() {
    let palavra = document.getElementById("palavra").value //pegando o valor do input

    //await vai esperar a requisição terminar
    //espera terminar de salvar antes de salvar a próxima
    await fetch("/salvar", {
        //Define o tipo de requisição
        // POST = enviar dados
        method: "POST",
        //Define as informações da requisição
        headers: {
            //Informamos que é do tipo json
            "Content-Type": "application/json"
        },
        //body = dados enviados para o servidor
        //JSON.stringify = transforma em JSON
        body: JSON.stringify({
    //nome da propriedade
            palavra: palavra
                    //valor do input
        })
    })
    alert("palavra salva!")
}
