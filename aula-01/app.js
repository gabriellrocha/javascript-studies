let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarConsole() {
    console.log('O botão foi clicado');
}

function clicarAlert() {
    alert('Eu amo JS');
}

function clicarPrompt() {
    let cidade = prompt('Informe o nome de uma cidade: ')
    alert(`Estive em ${cidade} e lembrei de você!`)
}

function clicarSoma() {
    let numero1 = parseInt(prompt('Informe o primeiro número: '));
    let numero2 = parseInt(prompt('Informe o segundo número: '));
    let result = numero1 + numero2;

    alert(`${numero1} + ${numero2} = ${result}`)
}