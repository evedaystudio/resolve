/*
  protecao-imagens.js — Resolve landing page

  Dificulta o download/cópia casual das imagens do site (screenshots
  do app e foto de divulgação): bloqueia clique direito, arraste e
  seleção sobre as imagens, e evita abrir a imagem em nova aba a
  partir do menu de contexto do navegador.

  IMPORTANTE: isso reduz bastante a facilidade de salvar a imagem
  pelo caminho comum (botão direito → Salvar imagem), mas nenhuma
  proteção feita só com HTML/CSS/JS é 100% infalível — qualquer
  pessoa com conhecimento técnico (print da tela, ferramentas de
  desenvolvedor do navegador, etc.) ainda consegue capturar a
  imagem. Isso é uma limitação de qualquer site, não só deste.
*/

document.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll('img');

  imagens.forEach((img) => {
    img.setAttribute('draggable', 'false');

    img.addEventListener('contextmenu', (evento) => {
      evento.preventDefault();
    });

    img.addEventListener('dragstart', (evento) => {
      evento.preventDefault();
    });
  });
});
