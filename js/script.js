/*
    PROJETO MODELO
    Arquivo responsável pelas interações da página.
*/

// Seleciona elementos do HTML usando o id
const botaoMensagem = document.getElementById("botaoMensagem");
const botaoAlterarTexto = document.getElementById("botaoAlterarTexto");
const textoMensagem = document.getElementById("textoMensagem");

// Função para mostrar uma mensagem simples
function mostrarMensagemInicial() {
    alert("Olá! Este é um projeto modelo para aprender HTML, CSS e JavaScript.");
}

// Função para alterar o texto exibido na página
function alterarMensagemDaPagina() {
    textoMensagem.textContent = "Muito bem! A mensagem foi alterada com JavaScript.";
}

// Verifica se os elementos existem antes de adicionar os eventos
if (botaoMensagem) {
    botaoMensagem.addEventListener("click", mostrarMensagemInicial);
}

if (botaoAlterarTexto) {
    botaoAlterarTexto.addEventListener("click", alterarMensagemDaPagina);
}
