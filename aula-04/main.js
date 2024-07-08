let linguagens = ["java", "python", "javascript", "c#", "ruby", "kotlin"];
linguagens.push("GoLang");

preencherTextArea();


function adicionarLinguagem() {
    //let language = prompt('Informe uma nova linguagem');
    linguagens.push(document.getElementById("input-language").value);
    preencherTextArea();
}

function preencherTextArea() {
    let elemento = document.getElementById("input-text-area");
    elemento.innerHTML = linguagens;
    limparInput();
}

function limparInput() {
    document.getElementById("input-language").value = "";
    
}