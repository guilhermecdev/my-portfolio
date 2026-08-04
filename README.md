# Portfólio — Guilherme Cardozo (HTML, CSS e JavaScript)

Site estático, sem build e sem dependências.

## Como abrir
Abra o arquivo `index.html` no navegador (duplo clique).
Ou rode um servidor local:

    python -m http.server 5500

e acesse http://localhost:5500

## Estrutura
- `index.html` — estrutura e SEO (title, meta description, Open Graph)
- `styles.css` — design system (variáveis CSS), layout responsivo
- `script.js` — dados dos projetos/experiência, render, menu mobile, animações
- `assets/` — imagens (foto e capas dos projetos)

## Como editar o conteúdo
Todo o conteúdo dinâmico está no topo do `script.js`:
`projects`, `skills`, `experience`, `education`, `certifications`, `languages`.
Para trocar um projeto, edite o objeto correspondente e a imagem em `assets/`.

## Publicar de graça
Suba a pasta no GitHub Pages, Netlify ou Vercel (arraste a pasta).
