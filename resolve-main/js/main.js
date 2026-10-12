/*
  main.js — Resolve landing page

  Este arquivo só faz uma coisa: liga todo botão/link "Baixar o Resolve"
  ao link real da Amazon Appstore, assim que ele existir.

  COMO ATIVAR: troque o valor de LINK_AMAZON_APPSTORE abaixo pelo link
  real (algo como "https://www.amazon.com/dp/XXXXXXXXXX"). Enquanto
  estiver vazio, os botões ficam visíveis mas não fazem nada ao clicar —
  de propósito, pra nunca levar a pessoa a um link quebrado.
*/

const LINK_AMAZON_APPSTORE = '';

document.querySelectorAll('[data-amazon-link]').forEach((link) => {
  if (LINK_AMAZON_APPSTORE) {
    link.href = LINK_AMAZON_APPSTORE;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.addEventListener('click', (evento) => {
      evento.preventDefault();
    });
  }
});
