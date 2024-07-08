function calcularMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

function verificarAprovacao(media) {

    return media >=5 ? "aprovado" : "reprovado";

}

function calcularIMC() {
    let peso = document.getElementById('input-1').value;
    let altura = document.getElementById('input-2').value;
    altura = altura / 100;

    let imc = peso / (altura * altura);
    alert(`IMC ${imc.toFixed(2)}`);
}

function tabuada() {
    let numero = parseInt(document.getElementById('input-number').value);
    console.log(numero);
    alert('Verifique o console')
    for (let i = 1; i <=10; i++) {
        console.log(i * numero);
    }
}