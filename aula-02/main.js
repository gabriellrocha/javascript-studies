function exibirMSG() {
    console.log('Olá, mundo!');
}

function exibirNome(nome) {
    console.log(`Olá, ${nome}`)
}

function dobro(numero) {
    return parseInt(numero * 2);
}

function media(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return media;
}

function maiorNumero(num1, num2){
    if(num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}