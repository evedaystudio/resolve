/*
  main.js — Resolve landing page

  Liga todo botão "Baixar" ao link real da Google Play assim que ele existir.

  COMO ATIVAR: depois de publicar o app, cole abaixo o link da página do
  Resolve na Google Play, por exemplo:
  "https://play.google.com/store/apps/details?id=com.resolveapp.mobile"
  Enquanto estiver vazio, os botões mostram "Em breve na Google Play" e não
  levam a lugar nenhum, de propósito, para nunca levar a pessoa a um link quebrado.
*/

const LINK_GOOGLE_PLAY = '';

document.querySelectorAll('[data-link-loja]').forEach((link) => {
  if (LINK_GOOGLE_PLAY) {
    link.href = LINK_GOOGLE_PLAY;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Baixar na Google Play';
    link.removeAttribute('aria-disabled');
    link.classList.remove('botao-baixar-breve');
  } else {
    link.classList.add('botao-baixar-breve');
    link.addEventListener('click', (evento) => evento.preventDefault());
  }
});
