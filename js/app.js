function alterarStatus(id) {
  const jogo = document.getElementById("game-" + id);

  if (!jogo) return;

  const imagem = jogo.querySelector(".dashboard__item__img");
  const botao = jogo.querySelector(".dashboard__item__button");

  const alugado = imagem.classList.contains("dashboard__item__img--rented");

  imagem.classList.toggle("dashboard__item__img--rented");
  botao.classList.toggle("dashboard__item__button--return");

  botao.textContent = alugado ? "Alugar" : "Devolver";
}