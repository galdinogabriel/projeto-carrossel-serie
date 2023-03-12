const botoes = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

botoes.forEach((botao, indexBotao) => {
  botao.addEventListener("click", () => {
    desativarBotaoAnterior();

    selecionaBotao(botao);

    ocultaImagemAnterior();

    mostraImagem(indexBotao);
  });
});

function selecionaBotao(botao) {
  botao.classList.add("botaoAtivado");
}

function mostraImagem(indexBotao) {
  imagens[indexBotao].classList.add("active");
}

function ocultaImagemAnterior() {
  const imagemAtiva = document.querySelector(".active");
  imagemAtiva.classList.remove("active");
}

function desativarBotaoAnterior() {
  const botaoAtivo = document.querySelector(".botaoAtivado");
  botaoAtivo.classList.remove("botaoAtivado");
}
