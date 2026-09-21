// =========================================================
// Sportlabel - Loja de Roupas (projeto de estudo/portfólio)
// Arquivo ÚNICO de JavaScript.
//
// Seções:
//   1. DADOS  (categorias e produtos - é aqui que você edita)
//   2. Menu mobile e rodapé
//   3. Formulário de contato
//   4. Ícones e imagens
//   5. Estado e elementos
//   6. Sidebar e catálogo
//   7. Carrinho
//   8. Inicialização
// =========================================================

// =========================================================
// 1. DADOS DA LOJA
//
// Campos do produto:
//   imagens: ["frente.jpg", "costas.jpg"] -> 2 fotos (troca ao passar o mouse/tocar)
//   imagem : "foto.jpg"                   -> 1 foto só
//   (sem foto)                            -> aparece o ícone SVG da categoria
// =========================================================
window.CATEGORIAS = [
  { chave: "camisetas",  rotulo: "Camisetas" },
  { chave: "calcas",     rotulo: "Calças/Shorts" },
  { chave: "moletons",   rotulo: "Moletons/Jaquetas" },
  { chave: "tenis",      rotulo: "Tênis/Chinelos" },
  { chave: "bones",      rotulo: "Bonés" },
  { chave: "acessorios", rotulo: "Acessórios" }
];

window.PRODUTOS = [
  // ----- CAMISETAS -----
  { id: 1,  nome: "CAMISETA NIKE JORDAN BREAK ESSENTIALS MASCULINA - PRETA", desc: "Streetwear", preco: 129.90, categoria: "camisetas", icone: "camiseta", imagens: ["imagens/jordan-frente.webp", "imagens/jordan-costas.jpg"], tamanhos: ["P","M","G","GG"], estoque: 5 },
  { id: 5,  nome: "CAMISETA PUMA TEAMRISE MASCULINA - AZUL ROYAL", desc: "Tecido respirável", preco: 89.90, categoria: "camisetas", icone: "camiseta", imagens: ["imagens/puma-frente.webp", "imagens/puma-costas.jpg"], tamanhos: ["P","M","G","GG"], estoque: 5 },
  { id: 7,  nome: "CAMISETA NIKE DRI-FIT SPORT MASCULINA - BRANCA", desc: "Tecido respirável", preco: 155.00, precoOriginal: 179.90, categoria: "camisetas", icone: "camiseta", imagens: ["imagens/nike-frente.jpg", "imagens/nike-costas.jpg"], tamanhos: ["P","M","G","GG"], estoque: 3 },
  { id: 14, nome: "CAMISETA POLO LACOSTE MONOGRAMA MASCULINA - VERDE", desc: "CASUAL", preco: 679.90, categoria: "camisetas", icone: "camiseta", imagens: ["imagens/lacoste-frente.jpg", "imagens/lacoste-costas.jpg"], tamanhos: ["P","M","G","GG"], estoque: 5 },
  { id: 17, nome: "CAMISETA ADIDAS BIG LOGO MASCULINA- BRANCA", desc: "Streetwear", preco: 159.90, categoria: "camisetas", icone: "camiseta", imagens: ["imagens/adidas-frente.jpg", "imagens/adidas-costas.jpg"], tamanhos: ["P","M","G","GG"], estoque: 5 },

  // ----- CALÇAS / SHORTS -----
  { id: 3,  nome: "CALÇA NIKE CLUB KNIT MASCULINA - CINZA", desc: "Standard Fit, Algodão", preco: 329.90, categoria: "calcas", icone: "calca", imagens: ["imagens/calca-cinza-frente.jpg", "imagens/calca-cinza-costas.jpg"], tamanhos: ["P","M","G","GG"], estoque: 4 },
  { id: 4,  nome: "CALÇA NIKE CLUB KNIT MASCULINA - PRETA", desc: "Standard Fit, Algodão", preco: 329.90, categoria: "calcas", icone: "calca", imagens: ["imagens/calca-preta-frente.jpg", "imagens/calca-preta-costas.webp"], tamanhos: ["P","M","G","GG"], estoque: 4 },
  { id: 8,  nome: "BERMUDA JORDAN DIAMOND MASCULINO - PRETO", desc: "Tecido leve para o dia a dia", preco: 219.99, precoOriginal: 290.00, categoria: "calcas", icone: "calca", imagens: ["imagens/bermuda-jordan-frente.jpg", "imagens/bermuda-jordan-costas.jpg"], tamanhos: ["P","M","G"], estoque: 2 },
  { id: 15, nome: "SHORTS NIKE CLUB MASCULINO - PRETO", desc: "Streetwear", preco: 149.99, precoOriginal: 170.00, categoria: "calcas", icone: "calca", imagens: ["imagens/shorts-nike-preto-frente.jpg", "imagens/shorts-nike-preto-costas.jpg"], tamanhos: ["P","M","G"], estoque: 3 },
  { id: 16, nome: "SHORTS NIKE CLUB MASCULINO - CINZA", desc: "Streetwear", preco: 179.99, precoOriginal: 220.00, categoria: "calcas", icone: "calca", imagens: ["imagens/shorts-nike-cinza-frente.jpg", "imagens/shorts-nike-cinza-costas.jpg"], tamanhos: ["P","M","G"], estoque: 3 },
  { id: 18, nome: "SHORTS ADIDAS BIG LOGO MASCULINO - PRETO", desc: "Moletinho", preco: 79.99, precoOriginal: 109.99, categoria: "calcas", icone: "calca", imagens: ["imagens/shorts-adidas-frente.jpg", "imagens/shorts-adidas-costas.jpg"], tamanhos: ["P","M","G"], estoque: 3 },
  { id: 19, nome: "BERMUDA LACOSTE MONOGRAMA MASCULINO - VERDE", desc: "Calção de Praia", preco: 329.99, precoOriginal: 409.99, categoria: "calcas", icone: "calca", imagens: ["imagens/bermuda-lacoste-frente.jpg", "imagens/bermuda-lacoste-costas.jpg"], tamanhos: ["P","M","G"], estoque: 3 },

  // ----- MOLETONS / JAQUETAS -----
  { id: 2,  nome: "BLUSÃO NIKE JORDAN BROOKLYN FLEECE PULLOVER MASCULINO - PRETO", desc: "Tecido de frio", preco: 419.90, categoria: "moletons", icone: "jaqueta", imagem: "", tamanhos: ["P","M","G"], estoque: 2 },
  { id: 20, nome: "MOLETOM NIKE CLUB MASCULINO - CINZA", desc: "Forro macio", preco: 399.99, categoria: "moletons", icone: "jaqueta", imagem: "", tamanhos: ["M","G"], estoque: 5 },
  { id: 21, nome: "MOLETOM LACOSTE COM CAPUZ MASCULINO - PRETO", desc: "Casual", preco: 719.99, categoria: "moletons", icone: "jaqueta", imagem: "", tamanhos: ["P","M","G"], estoque: 4 },
  { id: 22, nome: "MOLETOM PUMA POWER CAT MASCULINO - PRETO", desc: "Esportivo/Autêntico", preco: 279.99, categoria: "moletons", icone: "jaqueta", imagem: "", tamanhos: ["P","M","G"], estoque: 3 },
  { id: 9,  nome: "MOLETOM ADIDAS BIG LOGO MASCULINO - CINZA", desc: "Esportivo/Autêntico", preco: 229.99, categoria: "moletons", icone: "jaqueta", imagem: "", tamanhos: ["P","M","G"], estoque: 4 },

  // ----- TÊNIS / CHINELOS -----
  { id: 23, nome: "TENIS AIR JORDAN 1 LOW - BLACK SILVER", desc: "Confortavel e Estiloso", preco: 1044.90, categoria: "tenis", icone: "tenis", imagem: "", tamanhos: ["38","39","40","41","42"], estoque: 6 },
  { id: 24, nome: "TENIS LACOSTE EUROPA PRO - BRANCO", desc: "Confortavel e Estiloso", preco: 320.90, categoria: "tenis", icone: "tenis", imagem: "", tamanhos: ["38","39","40","41","42"], estoque: 4 },
  { id: 25, nome: "TENIS ADIDAS GRAND COURT 3.0 - PRETO", desc: "Confortavel e Estiloso", preco: 279.90, categoria: "tenis", icone: "tenis", imagem: "", tamanhos: ["38","39","40","41","42"], estoque: 2 },
  { id: 26, nome: "TENIS PUMA CAVEN 2.0 BDP - PRETO", desc: "Confortavel e Estiloso", preco: 279.99, categoria: "tenis", icone: "tenis", imagem: "", tamanhos: ["38","39","40","41","42"], estoque: 5 },
  { id: 27, nome: "TENIS NIKE COURT VISION - BRANCO", desc: "Confortavel e Estiloso", preco: 329.99, categoria: "tenis", icone: "tenis", imagem: "", tamanhos: ["38","39","40","41","42"], estoque: 8 },
  { id: 28, nome: "CHINELO NIKE VICTORY ONE SLIDE - PRETO", desc: "Confortável e leve", preco: 129.90, categoria: "tenis", icone: "tenis", imagem: "", tamanhos: ["38","39","40","41","42"], estoque: 2 },
  { id: 33, nome: "CHINELO LACOSTE 2.0 - OFF WHITE", desc: "Confortável e leve", preco: 229.90, categoria: "tenis", icone: "tenis", imagem: "", tamanhos: ["38","39","40","41","42"], estoque: 3 },

  // ----- BONÉS -----
  { id: 34, nome: "BONÉ NIKE COURT AEROBILL RAFA NADAL - AZUL MARINHO", desc: "Modelo Heritage86 Poliéster", preco: 249.90, categoria: "bones", icone: "bone", imagem: "", tamanhos: [], estoque: 1 },
  { id: 30, nome: "BONÉ NIKE AIR JORDAN - PRETO", desc: "Aba curva ajustável", preco: 129.99, precoOriginal: 180.00, categoria: "bones", icone: "bone", imagem: "", tamanhos: [], estoque: 2 },
  { id: 29, nome: "BONÉ LACOSTE SPORT - BRANCO", desc: "Aba curva ajustável", preco: 279.99, precoOriginal: 329.99, categoria: "bones", icone: "bone", imagem: "", tamanhos: [], estoque: 5 },
  { id: 31, nome: "BONÉ ADIDAS DAILY - PRETO", desc: "Aba curva ajustável", preco: 105.00, precoOriginal: 159.90, categoria: "bones", icone: "bone", imagem: "", tamanhos: [], estoque: 3 },
  { id: 32, nome: "BONÉ PUMA BMW MOTORSPORT - AZUL", desc: "Aba curva ajustável", preco: 225.00, precoOriginal: 390.99, categoria: "bones", icone: "bone", imagem: "", tamanhos: [], estoque: 3 },

  // ----- ACESSÓRIOS -----
  { id: 6,  nome: "MOCHILA NIKE ESSENTIALS HBR", desc: "", preco: 314.90, categoria: "acessorios", icone: "mochila", imagem: "", tamanhos: [], estoque: 2 },
  { id: 13, nome: "MEIA NIKE EVERYDAY - KIT 3 PARES", desc: "Cano médio, branca", preco: 49.90, categoria: "acessorios", icone: "padrao", imagem: "", tamanhos: [], estoque: 8 }
];
window.MOEDA = "R$";
window.CTA = "Comprar";

// ========= 2. Menu mobile e rodapé =========
document.addEventListener('DOMContentLoaded', () => {
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => menu.classList.remove('open'))
    );
  }

  const catToggle = document.getElementById('catToggle');
  const sidebar = document.getElementById('sidebar');
  if (catToggle && sidebar) {
    catToggle.addEventListener('click', () => {
      const aberto = sidebar.classList.toggle('aberto');
      catToggle.setAttribute('aria-expanded', aberto);
    });
    sidebar.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => sidebar.classList.remove('aberto'))
    );
  }
});

// ========= 3. Formulário de contato =========
const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';

    const nome = form.querySelector('#nome')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const mensagem = form.querySelector('#mensagem')?.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');

    if (!nome || !emailOk || !mensagem) {
      feedback.classList.add('erro');
      feedback.textContent = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    feedback.classList.remove('erro');
    feedback.textContent = `Obrigado, ${nome}! Pedido finalizado com sucesso, Obrigado pela preferência!`;
    form.reset();
  });
}

// ========= 4. Ícones e imagens =========
// Ícones SVG usados quando o produto não tem foto
const ICONS = {
  camiseta: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10 L8 18 L14 28 L20 24 V54 H44 V24 L50 28 L56 18 L44 10 C44 15 39 18 32 18 C25 18 20 15 20 10 Z"/></svg>`,
  jaqueta: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9 L10 16 L16 27 L22 23 V55 H26 V38 H38 V55 H42 V23 L48 27 L54 16 L42 9 C42 14 38 17 32 17 C26 17 22 14 22 9 Z"/><line x1="32" y1="17" x2="32" y2="55"/></svg>`,
  calca: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8 H46 L48 30 L52 56 H40 L34 30 L30 56 H18 L22 30 Z"/><line x1="19.5" y1="16" x2="44.5" y2="16"/></svg>`,
  bone: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 34 C10 20 20 12 32 12 C44 12 54 20 54 34 Z"/><path d="M10 34 C10 34 4 36 4 40 C4 42 8 42 12 41"/><circle cx="32" cy="18" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  tenis: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 44 C10 40 14 38 18 38 C22 38 22 34 27 32 C33 29 38 22 44 22 C48 22 48 27 52 29 C56 31 58 34 58 40 C58 44 55 46 50 46 H8 C6 46 6 45 6 44 Z"/><line x1="24" y1="34" x2="30" y2="40"/><line x1="30" y1="32" x2="35" y2="38"/><line x1="36" y1="28" x2="41" y2="34"/></svg>`,
  mochila: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 24 C20 16 26 12 32 12 C38 12 44 16 44 24 V52 C44 55 41 57 38 57 H26 C23 57 20 55 20 52 Z"/><path d="M25 24 V16 C25 13 28 11 32 11 C36 11 39 13 39 16 V24"/><rect x="26" y="34" width="12" height="10" rx="2"/></svg>`,
  padrao: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="10" width="44" height="44" rx="4"/><circle cx="24" cy="26" r="4"/><path d="M12 48 L26 34 L34 42 L44 30 L54 44"/></svg>`
};

// Retorna a imagem do produto.
// - Com 2 fotos em "imagens": mostra frente e, ao passar o mouse/tocar, as costas.
// - "soPrimeira" = true usa só a foto da frente (miniatura do carrinho).
function imagemProduto(p, soPrimeira = false) {
  if (p.imagens && p.imagens.length > 0) {
    const frente = `<img class="foto foto-frente" src="${p.imagens[0]}" alt="${p.nome} - frente" loading="lazy" />`;
    if (soPrimeira || p.imagens.length < 2) return frente;
    const costas = `<img class="foto foto-costas" src="${p.imagens[1]}" alt="${p.nome} - costas" loading="lazy" />`;
    return frente + costas;
  }
  if (p.imagem) {
    return `<img src="${p.imagem}" alt="${p.nome}" loading="lazy" />`;
  }
  return ICONS[p.icone] || ICONS.padrao;
}

function moeda(v) {
  return window.MOEDA + ' ' + v.toFixed(2).replace('.', ',');
}

// ========= 5. Estado e elementos =========
// Estado
const estoqueAtual = {};
window.PRODUTOS.forEach(p => { estoqueAtual[p.id] = p.estoque; });

const tamanhosSelecionados = {};
let carrinho = {};

// Elementos
const listaCategoriasEl = document.getElementById('listaCategorias');
const catalogoListaEl = document.getElementById('catalogo-lista');
const drawer = document.getElementById('drawer');
const carrinhoItensEl = document.getElementById('carrinho-itens');
const qtdCarrinhoEl = document.getElementById('qtd-carrinho');
const totalEl = document.getElementById('total');

// ========= 6. Sidebar e catálogo =========
function renderizarSidebar() {
  listaCategoriasEl.innerHTML = window.CATEGORIAS.map(cat => {
    const qtd = window.PRODUTOS.filter(p => p.categoria === cat.chave).length;
    return `<li><a href="#cat-${cat.chave}" data-cat="${cat.chave}">${cat.rotulo}<span class="contagem">${qtd}</span></a></li>`;
  }).join('');
}

function renderizarProdutoCard(p) {
  const estoque = estoqueAtual[p.id];
  const esgotado = estoque <= 0;
  const desconto = p.precoOriginal ? Math.round((1 - p.preco / p.precoOriginal) * 100) : 0;
  const parcela = p.preco / 12;
  const tamanhoSelecionado = tamanhosSelecionados[p.id] || null;
  const precisaTamanho = p.tamanhos && p.tamanhos.length > 0;
  const podeComprar = !esgotado && (!precisaTamanho || tamanhoSelecionado);
  const duasFotos = p.imagens && p.imagens.length >= 2;

  return `
    <article class="produto" data-id="${p.id}">
      <div class="img-wrap ${duasFotos ? 'duas-fotos' : ''}" ${duasFotos ? `onclick="this.classList.toggle('verso')"` : ''}>
        ${desconto > 0 ? `<span class="badge-desconto">-${desconto}% OFF</span>` : ''}
        <span class="badge-frete">FRETE GRÁTIS</span>
        ${imagemProduto(p)}
      </div>
      <div class="produto-corpo">
        <h3>${p.nome}</h3>
        <div class="preco-linha">
          ${p.precoOriginal ? `<span class="preco-original">${moeda(p.precoOriginal)}</span>` : ''}
          <span class="preco-atual">${moeda(p.preco)}</span>
        </div>
        <div class="parcelamento">ou 12x de ${moeda(parcela)}</div>
        ${precisaTamanho ? `
          <div class="tamanhos">
            ${p.tamanhos.map(t => `<button type="button" class="${t === tamanhoSelecionado ? 'selecionado' : ''}" onclick="selecionarTamanho(${p.id}, '${t}')">${t}</button>`).join('')}
          </div>
          <div class="aviso-tamanho" id="aviso-${p.id}"></div>
        ` : ''}
        <div class="estoque-linha">
          <span class="${esgotado ? 'esgotado' : 'disponivel'}">${esgotado ? 'Esgotado' : estoque + ' em estoque'}</span>
        </div>
        <button type="button" class="comprar" ${!podeComprar ? 'disabled' : ''} onclick="adicionar(${p.id})">${esgotado ? 'Esgotado' : window.CTA}</button>
      </div>
    </article>
  `;
}

function renderizarCatalogo() {
  catalogoListaEl.innerHTML = window.CATEGORIAS.map(cat => {
    const produtosCat = window.PRODUTOS.filter(p => p.categoria === cat.chave);
    if (produtosCat.length === 0) return '';
    return `
      <section class="categoria-secao" id="cat-${cat.chave}">
        <div class="categoria-cabecalho">
          <h2>${cat.rotulo}</h2>
          <span class="qtd">${produtosCat.length} produto${produtosCat.length > 1 ? 's' : ''}</span>
        </div>
        <div class="produtos">
          ${produtosCat.map(renderizarProdutoCard).join('')}
        </div>
      </section>
    `;
  }).join('');
}

function selecionarTamanho(id, tamanho) {
  tamanhosSelecionados[id] = tamanho;
  renderizarCatalogo();
}

// ========= 7. Carrinho =========
function adicionar(id) {
  const p = window.PRODUTOS.find(x => x.id === id);
  if (!p) return;
  const precisaTamanho = p.tamanhos && p.tamanhos.length > 0;

  if (precisaTamanho && !tamanhosSelecionados[id]) {
    const aviso = document.getElementById('aviso-' + id);
    if (aviso) aviso.textContent = 'Selecione um tamanho';
    return;
  }
  if (estoqueAtual[id] <= 0) return;

  estoqueAtual[id] -= 1;
  const tamanho = tamanhosSelecionados[id] || null;
  const key = id + '::' + (tamanho || '-');
  if (!carrinho[key]) carrinho[key] = { id, tamanho, qty: 0 };
  carrinho[key].qty += 1;

  renderizarCatalogo();
  atualizarCarrinho();
}

function remover(key) {
  const item = carrinho[key];
  if (!item) return;
  estoqueAtual[item.id] += item.qty;
  delete carrinho[key];
  renderizarCatalogo();
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const chaves = Object.keys(carrinho);
  const qtdTotal = chaves.reduce((s, k) => s + carrinho[k].qty, 0);
  qtdCarrinhoEl.textContent = qtdTotal;

  if (chaves.length === 0) {
    carrinhoItensEl.innerHTML = '<p style="color:#6b7280;text-align:center;padding:20px;">Carrinho vazio</p>';
    totalEl.textContent = moeda(0);
    return;
  }

  let total = 0;
  carrinhoItensEl.innerHTML = chaves.map(k => {
    const item = carrinho[k];
    const p = window.PRODUTOS.find(x => x.id === item.id);
    const sub = p.preco * item.qty;
    total += sub;
    return `
      <div class="item-c">
        <div class="mini-img">${imagemProduto(p, true)}</div>
        <div class="info">
          <strong>${p.nome}</strong>${item.tamanho ? ' — Tam. ' + item.tamanho : ''}<br/>
          <small>${item.qty} × ${moeda(p.preco)} = ${moeda(sub)}</small>
        </div>
        <button class="remover" onclick="remover('${k}')" title="Remover">✕</button>
      </div>
    `;
  }).join('');
  totalEl.textContent = moeda(total);
}

document.getElementById('abrirCarrinho').addEventListener('click', () => drawer.classList.add('aberto'));
function fecharCarrinho() { drawer.classList.remove('aberto'); }

function finalizarPedido() {
  if (Object.keys(carrinho).length === 0) {
    alert('Seu carrinho está vazio.');
    return;
  }
  alert('Pedido Finalizado com sucesso, Obrigado pela preferência!');
  carrinho = {};
  atualizarCarrinho();
  fecharCarrinho();
}

// Destaque da categoria ativa na sidebar ao rolar
function ativarObservadorDeSecoes() {
  const secoes = document.querySelectorAll('.categoria-secao');
  const links = () => listaCategoriasEl.querySelectorAll('a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links().forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  secoes.forEach(sec => observer.observe(sec));
}

// ========= 8. Inicialização =========
renderizarSidebar();
renderizarCatalogo();
atualizarCarrinho();
ativarObservadorDeSecoes();