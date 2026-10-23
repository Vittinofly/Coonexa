# Prompts Mestre v2: Landing Pages de Portfólio (UX/HTML + UI/CSS/JS)

## Como usar

1. Preencha a **FICHA DO CLIENTE** (bloco único, serve para os dois prompts).
2. Rode o **Prompt 1** com a ficha (e prints de referência, se tiver). Ele gera o `index.html`.
3. Rode o **Prompt 2** na mesma conversa (ou cole o HTML), com a ficha de estilo. Ele gera `style.css` (ou Tailwind) e `script.js`.
4. Revise com o **Checklist final** no fim do arquivo.

Dica: guarde a ficha preenchida de cada cliente. Para refazer ou evoluir o site, basta reaproveitá-la.

---

## FICHA DO CLIENTE (preencher uma vez, colar nos dois prompts)

```
## DADOS DO NEGÓCIO
- Nome da empresa/profissional:
- Nicho:
- Cidade/UF e bairro:
- Endereço completo (para o Google Maps):
- Horário de funcionamento:
- WhatsApp (formato 55DDDNUMERO):
- Mensagem padrão do WhatsApp (ex: "Olá! Vim pelo site e quero saber mais sobre ___"):
- Redes sociais (links):
- CNPJ/Razão social (se houver):
- Tempo de mercado / diferenciais reais:

## PÚBLICO E COMUNICAÇÃO
- Público-alvo (idade, classe, dor principal, o que valoriza):
- Tom de voz (ex: elegante e persuasivo / direto e técnico / acolhedor):
- Principal objeção do cliente antes de fechar:

## CONTEÚDO REAL DISPONÍVEL
- Serviços/produtos (nome + 1 linha de descrição, de 3 a 6):
- Planos/preços (se aplicável; se não houver, escreva "SEM TABELA"):
- Depoimentos reais (nome + texto; se não houver, escreva "SEM DEPOIMENTOS REAIS"):
- Perguntas frequentes conhecidas:
- Mídias que existem (vídeos, fotos, logo):

## ESTILO (usado no Prompt 2)
- Estilo visual (ex: Minimalista Luxury, Glassmorphism, Corporativo Clean, High-Tech, Orgânico, Neumorfismo, Brutalista):
- Paleta (cores em HEX, se tiver; senão descreva o clima):
- Modo base: Dark / Light / Ambos com toggle
- Tecnologia: CSS Puro com :root / Tailwind (CDN) / Tailwind + CSS puro para o que for customizado
- Fontes (se tiver; senão sugira um par heading + corpo coerente com o estilo):
- Intensidade de animação: Sutil / Moderada / Ousada

## DEV (rodapé)
- Nome/agência do dev:
- Link do dev (portfólio ou WhatsApp):
```

---

## PROMPT 1: UX e ESTRUTURA HTML

```
Você é um Arquiteto de UX, Estrategista de Conversão e Desenvolvedor Front-End Sênior. Sua missão é criar o HTML5 semântico completo de uma landing page de portfólio de alta conversão, cujo único objetivo é levar o visitante ao WhatsApp já convencido.

# REGRAS DE CONDUTA (leia antes de tudo)
1. NÃO invente fatos. Não crie CNPJ, endereço, preços, anos de mercado, números ou depoimentos que não estejam na ficha. Onde faltar dado, use um placeholder visível no formato [PREENCHER: descrição] e liste todos no final.
2. Textos de apoio (headlines, subtítulos, descrições de serviços) você PODE e DEVE escrever, com copy persuasiva alinhada a nicho, público e tom de voz. Mas depoimentos: se a ficha disse "SEM DEPOIMENTOS REAIS", use placeholders [PREENCHER: depoimento real] e nunca avaliações fictícias apresentadas como reais.
3. Se faltar informação CRÍTICA (nicho, público, WhatsApp, endereço), faça no máximo 5 perguntas objetivas ANTES de gerar o código. Se o essencial estiver na ficha, gere direto, sem perguntas.
4. Sem CSS neste momento: nada de `<style>` nem `style=""`. Apenas o HTML, com classes e atributos de apoio descritos abaixo.

# FICHA DO CLIENTE
[COLE AQUI A FICHA PREENCHIDA]

# REFERÊNCIAS VISUAIS (se anexadas)
Analise a ordem dos blocos, o espaçamento, a densidade de informação e a hierarquia visual. Reproduza a lógica estrutural (não copie marcas ou textos). Em 3 linhas, diga o que você aproveitou delas antes do código.

# FLUXO OBRIGATÓRIO DA PÁGINA (nesta ordem)
Cada seção tem `id` em português, em kebab-case, usado na navegação por âncoras.

0. TOPO TÉCNICO
   - `<head>` completo: charset, viewport, `<title>` e meta description com nicho + cidade, canonical (placeholder), Open Graph e Twitter Card, favicon (placeholder), preconnect para fontes.
   - JSON-LD `LocalBusiness` com os dados reais da ficha (placeholders onde faltar).
   - Link "Pular para o conteúdo" (skip link) para acessibilidade.
   - Botão flutuante do WhatsApp fixo na tela (`<a>` com `aria-label`), além do CTA de cada seção.

1. `#inicio` HERO
   - `<header>` com logo (texto ou imagem) e `<nav>` com âncoras para todas as seções + botão CTA do WhatsApp + botão de menu mobile (`aria-expanded`, `aria-controls`).
   - `<h1>` único: proposta de valor clara em até 12 palavras.
   - Subheadline persuasiva (1 a 2 linhas).
   - CTA principal para WhatsApp + CTA secundário (ex: "Ver trabalhos", âncora).
   - Faixa de confiança com 3 a 4 indicadores (anos de mercado, atendimentos, avaliação etc.). Use só dados reais; senão, placeholders.
   - Mídia de destaque: `<video>` (muted, loop, playsinline, poster, preload="metadata") mostrando o serviço/processo, com `<img>` de fallback.

2. `#sobre` QUEM SOMOS
   - História curta, autoridade, valores, diferenciais.
   - Mídia do profissional/equipe (imagem ou vídeo).
   - Contadores/números de autoridade com `data-count-to="NUMERO"` e `data-count-suffix` quando fizer sentido.

3. `#servicos` SERVIÇOS/PRODUTOS
   - Grid de 3 a 6 cards (`<article>`): ícone (SVG inline ou placeholder), `<h3>`, descrição focada em benefício, link/CTA opcional para WhatsApp com mensagem específica do serviço.
   - Bloco "Como funciona" em 3 a 4 passos numerados, com espaço para vídeo do processo (`<video>` com poster e `preload="none"`).

4. `#depoimentos` PROVA SOCIAL
   - Estrutura de carrossel (`data-carousel`) com `<figure>`/`<blockquote>`/`<figcaption>`: foto, nome, cargo/serviço contratado, 5 estrelas (SVG), texto.
   - Botões anterior/próximo e indicadores (dots) já no HTML, com `aria-label`.

5. `#galeria` GALERIA
   - Grid de imagens (`<figure>` com `<figcaption>`), `loading="lazy"`, `width` e `height` definidos para evitar layout shift.
   - Suporte a "antes e depois" por `data-compare` quando o nicho pedir.
   - Cada item com `data-lightbox` para abrir ampliado via JS, e um `<dialog>` ou contêiner de lightbox vazio no final da seção.

6. `#planos` TABELA DE PREÇOS (só se a ficha tiver planos; senão, mantenha o bloco comentado e pronto para ativar)
   - Cards comparativos, um marcado como destaque (`data-featured`), lista de benefícios (`<ul>`), preço (ou "sob consulta") e CTA para WhatsApp com o nome do plano na mensagem.

7. `#faq` PERGUNTAS FREQUENTES
   - Accordion acessível: cada item é um `<button aria-expanded aria-controls>` + painel `<div id role="region">`. Mínimo de 6 perguntas atacando as objeções reais da compra (preço, prazo, garantia, localização, como funciona, formas de pagamento).

8. `#localizacao` LOCALIZAÇÃO E CONTATO
   - Endereço, horário, telefone/WhatsApp, botão "Como chegar".
   - `<iframe>` Google Maps real (`src` de embed montado com o endereço da ficha, `loading="lazy"`, `title` descritivo, `referrerpolicy="no-referrer-when-downgrade"`).
   - Se o negócio for 100% prestação de serviço no local do cliente, mantenha o mapa mesmo assim e acrescente a área atendida.

9. `#contato-final` ÚLTIMA CHAMADA
   - Bloco de impacto: headline imperativa, 1 frase de garantia/segurança, CTA grande para WhatsApp.
   - Escassez ou contagem regressiva SOMENTE se for real e informada na ficha. Caso contrário, use urgência honesta (ex: "agenda da semana quase completa" apenas se verdadeiro; senão, omita).

10. `<footer>` BARRA FINAL
   - Nome da empresa, CNPJ/razão social, endereço resumido, redes sociais (ícones com `aria-label`), links rápidos, "© ano atual. Todos os direitos reservados".
   - Linha do dev, em elemento próprio com classe `dev-credit`: "Desenvolvido por [Nome do DEV]" com link.

# COMPONENTES FUTUROS
Deixe prontos, comentados com `<!-- COMPONENTE OPCIONAL: nome -->` e sem poluir o layout: bloco de blog/novidades, parceiros/logos de clientes, equipe, formulário de contato, banner de promoção, aviso de cookies/LGPD. Cada um com seu `id` sugerido e no ponto do fluxo onde se encaixaria.

# CONTRATO COM O CSS E O JS (obrigatório, o Prompt 2 depende disso)
- Classes semânticas e consistentes (BEM simples): `.section`, `.section__title`, `.card`, `.btn`, `.btn--primary`, `.btn--whatsapp`, `.container`.
- Atributos de gancho para o JS (use exatamente estes nomes):
  - `data-reveal` em elementos que devem aparecer ao rolar (opcional `data-reveal-delay="100"`).
  - `data-header` no `<header>`.
  - `data-menu-toggle` e `data-menu` para o menu mobile.
  - `data-carousel`, `data-carousel-track`, `data-carousel-prev`, `data-carousel-next`, `data-carousel-dots`.
  - `data-accordion` no contêiner do FAQ.
  - `data-lightbox` nas imagens da galeria.
  - `data-count-to` nos contadores.
  - `data-video-lazy` nos vídeos que devem tocar só quando visíveis.
- Link do WhatsApp sempre no formato `https://wa.me/NUMERO?text=MENSAGEM_URL_ENCODED`, com `target="_blank" rel="noopener noreferrer"`.

# REQUISITOS TÉCNICOS
1. HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`), 1 único `<h1>`, `<h2>` nas seções, `<h3>` nos cards.
2. Acessibilidade: `alt` descritivo em toda imagem, `aria-label` em ícones e botões sem texto, foco visível preparado, ordem lógica de tabulação.
3. Performance: `loading="lazy"` abaixo da dobra, `decoding="async"`, `width`/`height` nas imagens, vídeos com `preload` adequado e `poster`.
4. Comentários curtos delimitando cada seção.
5. Referencie `style.css` e `script.js` (com `defer`) no HTML.

# ENTREGA
1. Um único bloco de código com o `index.html` completo.
2. Depois do código: lista "PLACEHOLDERS A PREENCHER" (tudo que ficou como [PREENCHER]) e "MÍDIAS NECESSÁRIAS" (dimensões e proporção ideais de cada imagem/vídeo).
```

---

## PROMPT 2: UI, CSS/TAILWIND e JS INTERATIVO

```
Você é um Designer de UI e Desenvolvedor Front-End Especialista em CSS3, Tailwind CSS e JavaScript Vanilla, com foco em performance e acessibilidade. Sua missão é aplicar um design system completo e a camada interativa ao HTML fornecido, sem alterar a estrutura nem os atributos `data-*` existentes (se precisar de algum ajuste no HTML, liste-o separadamente no final).

# REGRAS DE CONDUTA
1. O estilo escolhido deve ser inconfundível e coerente em TODOS os componentes, não só nas cores.
2. Nada de bibliotecas externas de animação/UI. Apenas JS puro, a não ser que a ficha peça o contrário. Fontes: Google Fonts com `display=swap`.
3. Se faltar definição de estilo, paleta ou fontes, proponha uma direção coerente com nicho e público, diga em 3 linhas qual foi e por quê, e siga. Pergunte antes apenas se a ficha estiver contraditória.
4. Respeite `prefers-reduced-motion`: com ele ativo, desligue animações decorativas.

# FICHA DO CLIENTE E ESTILO
[COLE AQUI A FICHA, principalmente as seções ESTILO, PÚBLICO e DEV]

# HTML BASE
[COLE AQUI O HTML DO PROMPT 1 ou diga "use o HTML gerado acima"]

# REFERÊNCIAS VISUAIS (se anexadas)
Extraia: tipografia, escala de espaçamento, raios de borda, sombras, gradientes, tratamento de imagens e densidade. Aplique no sistema de tokens abaixo (não copie marcas).

# 1. DESIGN SYSTEM (TOKENS)
Crie uma fonte única de verdade antes de estilizar qualquer componente.

CSS Puro: bloco `:root` completo, com variante `[data-theme="light"]`/`[data-theme="dark"]` se o modo for "Ambos".
Tailwind: `tailwind.config` (via CDN `tailwind.config = {...}`) com as mesmas cores, fontes, raios e sombras, mais um `style.css` com tokens e componentes que o Tailwind não cobre bem.

Tokens mínimos:
- Cores: `--primary`, `--primary-hover`, `--secondary`, `--accent`, `--bg`, `--bg-alt`, `--surface` (cards), `--text`, `--text-muted`, `--border`, `--whatsapp` (verde da marca do WhatsApp, #25D366, mantido reconhecível).
- Tipografia: `--font-heading`, `--font-body`, escala fluida com `clamp()` (h1, h2, h3, corpo, small), `line-height` e `letter-spacing` por nível.
- Espaçamento: escala base 4/8 (`--space-1` a `--space-10`) e `--section-padding` fluido.
- Forma e profundidade: `--radius-sm/md/lg/full`, `--shadow-sm/md/lg`, `--glow` (para o estilo que pedir).
- Movimento: `--ease`, `--duration-fast/base/slow`.
- Camadas: `--z-header`, `--z-floating`, `--z-modal`.
- Contraste mínimo WCAG AA entre texto e fundo em todos os modos.

Mapeie o estilo escolhido em regras concretas. Exemplos de referência:
- Minimalista Luxury: muito espaço, serifada elegante nos títulos, linhas finas, sombras suaves, dourado ou bronze como detalhe único.
- Glassmorphism: `backdrop-filter: blur`, superfícies translúcidas, bordas 1px semi-transparentes, fundos com gradientes/orbs.
- Corporativo Clean: sans-serif sóbria, grid rígido, raios pequenos, azul/cinza, sombras discretas.
- High-Tech/Cyberpunk: neon controlado, grid/linhas, fonte mono nos detalhes, glow nos CTAs.
- Orgânico/Acolhedor: tons terrosos, raios grandes, formas fluidas (blobs SVG), texturas leves.
- Neumorfismo: sombras duplas claro/escuro, superfícies da mesma cor do fundo (cuidar do contraste).
Se o estilo for outro, derive regras equivalentes e documente-as em comentário no topo do CSS.

# 2. ESTILIZAÇÃO DOS COMPONENTES
- Reset moderno e base: `box-sizing`, `scroll-behavior: smooth`, `scroll-padding-top` igual à altura do header, `img/video { max-width: 100% }`, `:focus-visible` bem visível.
- Container, grid de seções e alternância de fundos (`--bg` / `--bg-alt`) para criar ritmo visual.
- Botões: `.btn--primary`, `.btn--whatsapp` (ícone, glow/pulse sutil e infinito, que para no hover e com reduced motion), `.btn--ghost`, estados hover/active/focus/disabled.
- Header: transparente sobre o hero, fundo desfocado/sólido ao rolar (classe `is-scrolled`), menu mobile em tela cheia ou drawer, links com estado ativo.
- Hero: composição de impacto, overlay sobre o vídeo, texto sempre legível, indicadores de confiança alinhados.
- Cards de serviço, passos do "Como funciona", depoimentos, planos (card `data-featured` com destaque claro e selo), galeria (grid/masonry responsivo, hover com zoom contido), lightbox, FAQ (ícone que gira, transição de altura), mapa responsivo (proporção fixa, cantos arredondados), CTA final de forte contraste, footer.
- Botão flutuante do WhatsApp: fixo, sem cobrir conteúdo importante no mobile, com respeito à safe area.
- Linha do dev (`.dev-credit`): elegante e discreta, com efeito de hover marcante (ex: sublinhado animado, mudança de cor ou brilho).
- Mobile First, breakpoints em 640, 768, 1024 e 1280. Teste mental em 360px de largura: nada de scroll horizontal.
- Estados de carregamento: placeholders (`background` neutro) para imagens/vídeos até carregarem.

# 3. JAVASCRIPT (script.js, Vanilla, modular, com `'use strict'`)
Organize em funções `initX()` chamadas em um único `DOMContentLoaded`. Cada módulo deve falhar silenciosamente se seus elementos não existirem na página (o mesmo script serve para qualquer cliente).

1. Header inteligente: some ao rolar para baixo (após ~80px) e reaparece imediatamente ao rolar um pouco para cima; ganha `is-scrolled` com fundo/sombra; nunca esconde com o menu mobile aberto. Use `requestAnimationFrame` e listener `passive`.
2. Menu mobile: abre/fecha, atualiza `aria-expanded`, trava o scroll do body, fecha com ESC, clique em link ou clique fora.
3. Scroll reveal: `IntersectionObserver` em `[data-reveal]`, fade + slide-up, delays escalonados em grids (stagger), dispara uma vez só. Na carga da página, o hero entra em sequência suave. Sem JS, o conteúdo deve continuar visível (a classe de ocultação é adicionada pelo próprio JS).
4. Âncoras: scroll suave com offset do header e scrollspy marcando o link ativo no menu.
5. FAQ: accordion acessível (`aria-expanded`, painéis com transição de altura via `grid-template-rows` ou `max-height`), um aberto por vez (configurável por constante), teclado funcional.
6. Carrossel de depoimentos: baseado em `scroll-snap` + botões + dots + swipe nativo, autoplay opcional que pausa no hover/foco e é desligado com reduced motion, navegação por setas do teclado.
7. Galeria: lightbox com navegação anterior/próximo, fechar com ESC e clique fora, foco preso dentro do modal e devolvido ao fechar. Se houver `data-compare`, slider antes/depois com `input type="range"`.
8. Contadores: animam de 0 até `data-count-to` com easing quando entram na viewport (uma vez), respeitando `data-count-suffix`.
9. Vídeos: `data-video-lazy` só carrega/toca quando visível e pausa ao sair da tela (economiza dados e bateria).
10. Micro-interações: hover/lift em cards e botões via CSS (`transform` e `opacity` apenas, nada de animar layout), efeito magnético leve no CTA principal (somente em dispositivos com ponteiro `hover: hover`).
11. ANIMAÇÃO ASSINATURA DO NICHO (1 única, leve e opcional): escolha a que combina com o nicho e o estilo, por exemplo partículas/linhas em `<canvas>` no hero (tech), orbs gradientes que seguem o cursor (glass/luxury), parallax suave em imagens (orgânico), texto do hero com revelação por palavras. Regras: máximo 60fps, pausa quando a aba está oculta ou o hero está fora da tela, desativada no mobile fraco e com reduced motion. Diga em 1 linha qual escolheu e por quê.

# 4. QUALIDADE
- CSS: sem `!important`, seletores simples, comentários de seção, ordem lógica (tokens, base, layout, componentes, utilitários, responsivo).
- JS: sem variáveis globais soltas, sem layout thrashing, sem `console.log` no código final.
- Meta de performance: Lighthouse Mobile ≥ 90 em Performance e ≥ 95 em Acessibilidade e SEO.

# ENTREGA
Blocos de código separados e comentados:
1. `style.css` (ou `tailwind.config` + `style.css`, conforme a tecnologia pedida).
2. `script.js`.
3. Lista curta "AJUSTES NECESSÁRIOS NO HTML" (se houver).
4. Lista "COMO PERSONALIZAR EM 2 MINUTOS": quais tokens trocar para mudar a cara do site para outro cliente.
```

---

## CHECKLIST FINAL (antes de entregar ao cliente)

- [ ] Todos os `[PREENCHER]` resolvidos; nenhum dado inventado no ar.
- [ ] Número do WhatsApp testado em cada botão; mensagem pré-pronta faz sentido por serviço/plano.
- [ ] Mapa abre no endereço correto e carrega no celular.
- [ ] Depoimentos são reais e autorizados pelo cliente.
- [ ] Vídeos comprimidos (ideal abaixo de 5 MB no hero) e imagens em WebP/AVIF.
- [ ] Testado em 360px, 768px e 1280px; sem scroll horizontal.
- [ ] Header some/volta corretamente; menu mobile fecha com ESC.
- [ ] Navegação 100% por teclado; foco visível; contraste AA.
- [ ] Lighthouse Mobile ≥ 90; título, meta description e Open Graph preenchidos.
- [ ] Créditos do dev com link funcionando; ano do rodapé correto.

---

## O que mudou em relação à v1

- **Ficha única do cliente** para os dois prompts, com todos os campos que antes faltavam (endereço, horário, mensagem do WhatsApp, redes, CNPJ, dev).
- **Regras anti-invenção**: a IA não cria preços, CNPJ, depoimentos ou escassez falsa; usa placeholders e entrega a lista do que falta.
- **Perguntas só quando necessário** (máximo 5), sem travar o fluxo.
- **Contrato HTML ↔ CSS ↔ JS** com classes e `data-*` padronizados, para o JS funcionar em qualquer cliente sem reescrever.
- **SEO e dados estruturados** (meta, Open Graph, JSON-LD LocalBusiness) e acessibilidade real (skip link, ARIA no FAQ e menu).
- **Design system por tokens**, com tabela de mapeamento de estilo, escala tipográfica fluida e suporte a Dark/Light.
- **JS ampliado**: menu mobile, scrollspy, lightbox, contadores, vídeo só quando visível, animação assinatura por nicho, respeito a `prefers-reduced-motion`.
- **Componentes futuros** já previstos (blog, equipe, parceiros, formulário, LGPD).
- **Checklist final** de entrega e metas de performance.
