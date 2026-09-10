function alterarStatus(id) {
    // 1. Seleciona o jogo correspondente ao id
    const jogo = document.getElementById("game-" + id);

    // 2. A partir do jogo, pega a div da imagem e o botão
    const imagem = jogo.querySelector(".dashboard__item__img");
    const botao = jogo.querySelector(".dashboard__item__button");

    // 3. Verifica o estado atual e alterna
    const estaAlugado = imagem.classList.contains("dashboard__item__img--rented");

    if (estaAlugado) {
        // Estava alugado -> volta para disponível
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    } else {
        // Estava disponível -> fica alugado
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }
}function alterarStatus(id) {
    const jogo = document.getElementById("game-" + id);
    const imagem = jogo.querySelector(".dashboard__item__img");
    const botao = jogo.querySelector(".dashboard__item__button");

    const agoraAlugado = imagem.classList.toggle("dashboard__item__img--rented");
    botao.classList.toggle("dashboard__item__button--return");
    botao.textContent = agoraAlugado ? "Devolver" : "Alugar";
}