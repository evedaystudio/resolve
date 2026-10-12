# Site do Resolve — landing page de aquisição

Site estático (HTML/CSS/JS puro, sem build, sem dependências) pensado
para o fluxo **Instagram → site → Amazon Appstore → instalação**.

## Estrutura

```
index.html          → página principal
privacidade.html     → política de privacidade (do site)
termos.html          → termos de uso (do site)
css/styles.css       → todo o estilo, com a mesma cor de marca do app
js/main.js           → só liga os botões "Baixar o Resolve" ao link da Amazon
assets/og-image.png  → imagem que aparece quando o link é compartilhado
assets/favicon.svg   → ícone da aba do navegador
assets/screenshots/  → pasta vazia, pronta para receber capturas reais
```

## O que falta você preencher

1. **Link da Amazon Appstore** — abra `js/main.js` e cole o link na
   linha `const LINK_AMAZON_APPSTORE = '';`. Enquanto estiver vazio, os
   botões aparecem normalmente mas não fazem nada ao clicar (de
   propósito, para nunca levar a um link quebrado).

2. **Capturas de tela reais** — quando tiver, troque as 4 "molduras de
   celular" com o texto "Captura de tela em breve" (uma no topo, três
   na seção "Veja o Resolve por dentro") por `<img>` de verdade. Exemplo,
   dentro de `.moldura-fone-tela`:
   ```html
   <div class="moldura-fone-tela">
     <img src="assets/screenshots/tela-inicio.png" alt="Tela inicial do Resolve" />
   </div>
   ```

3. **Imagem de compartilhamento (Open Graph)** — `assets/og-image.png`
   é um placeholder já com a marca; pode trocar por uma versão sua
   quando quiser, mantendo o tamanho 1200x630.

## Como publicar (GitHub + Cloudflare Pages)

1. Crie um repositório novo no GitHub e suba todos esses arquivos
   (mantendo a estrutura de pastas).
2. No Cloudflare Pages: "Create a project" → "Connect to Git" → escolha
   o repositório → **não precisa configurar nenhum comando de build**
   (é HTML puro) → Deploy.
3. Depois, em "Custom domains", conecte seu domínio (se tiver um).

## Decisões de conteúdo (por que o texto é assim)

- Nunca chama o app de "IA" e nunca promete resolver automaticamente —
  sempre "orienta", "mostra o canal certo", "ajuda a acompanhar".
- Nenhum número, avaliação, empresa parceira ou depoimento foi
  inventado — só o que já é verdade sobre o app hoje.
- A seção de privacidade evita prometer segurança absoluta ("nenhum
  sistema é infalível").
- O site não explica a estrutura interna do app (telas, tópicos,
  arquitetura) — isso é assunto de dentro do app, não da landing page.
