// ========= Setup geral: ano no rodapé, menu mobile, animação dos cards =========
document.addEventListener('DOMContentLoaded', () => {
  // Preenche o ano automaticamente no rodapé
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu mobile (hambúrguer)
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => menu.classList.remove('open'))
    );
  }

  // Cards aparecem com um pequeno atraso (stagger) ao entrar na tela
  const cards = document.querySelectorAll('.card');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 150);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => cardObserver.observe(card));

  initHero();
  initTesteNivel();
});

// ========= Hero interativo: "Diga olá em..." =========
function initHero() {
  const wordEl = document.getElementById('heroWord');
  const factEl = document.getElementById('heroFact');
  const chips = Array.from(document.querySelectorAll('.lang-chip'));
  if (!wordEl || chips.length === 0) return;

  const langs = chips.map(chip => ({
    el: chip,
    word: chip.dataset.word,
    fact: chip.dataset.fact
  }));

  // Respeita quem prefere menos animação na tela
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let index = 0;
  let locked = false; // trava no idioma escolhido quando o usuário clica

  function setActiveChip(i) {
    chips.forEach(chip => chip.classList.remove('is-active'));
    langs[i].el.classList.add('is-active');
  }

  function typeWord(word, onDone) {
    if (reduceMotion) {
      wordEl.textContent = word;
      if (onDone) onDone();
      return;
    }
    wordEl.textContent = '';
    let i = 0;
    (function typeNextLetter() {
      if (i <= word.length) {
        wordEl.textContent = word.slice(0, i);
        i++;
        setTimeout(typeNextLetter, 80);
      } else if (onDone) {
        setTimeout(onDone, 1400);
      }
    })();
  }

  function eraseWord(onDone) {
    if (reduceMotion) {
      if (onDone) onDone();
      return;
    }
    (function eraseNextLetter() {
      const text = wordEl.textContent;
      if (text.length > 0) {
        wordEl.textContent = text.slice(0, -1);
        setTimeout(eraseNextLetter, 40);
      } else if (onDone) {
        onDone();
      }
    })();
  }

  // Ciclo automático passando pelos idiomas, até o usuário escolher um
  function autoCycle() {
    if (locked) return;
    setActiveChip(index);
    typeWord(langs[index].word, () => {
      if (locked) return;
      eraseWord(() => {
        if (locked) return;
        index = (index + 1) % langs.length;
        autoCycle();
      });
    });
  }

  // Clique num idioma: trava nele, mostra a curiosidade
  chips.forEach((chip, i) => {
    chip.addEventListener('click', () => {
      locked = true;
      index = i;
      setActiveChip(i);
      typeWord(langs[i].word);
      factEl.textContent = langs[i].fact;
      factEl.classList.add('is-shown');
    });
  });

  autoCycle();
}

// ========= Validação simples do formulário de contato =========
const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // impede o envio padrão
    const feedback = document.getElementById('feedback');
    if (feedback) feedback.style.display = 'block';

    // Pega valores dos campos
    const nome = form.querySelector('#nome')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const mensagem = form.querySelector('#mensagem')?.value.trim();

    // Regex básico para validar e-mail
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');

    if (!feedback) return;

    if (!nome || !emailOk || !mensagem) {
      feedback.classList.add('erro');
      feedback.textContent = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    feedback.classList.remove('erro');
    feedback.textContent = `Obrigado, ${nome}! Recebemos sua mensagem e retornaremos em breve.`;
    form.reset();
  });
}

// ========= Seleção de plano =========
function escolherPlano(nome) {
  alert(`Você escolheu o plano ${nome}! Em breve nossa equipe entrará em contato.`);
}

// ========= Teste de nível de idioma =========
function initTesteNivel() {
  const quizForm = document.getElementById('formTeste');
  if (!quizForm) return;

  const TOTAL_PERGUNTAS = 10;
  const erroEl = document.getElementById('quizErro');
  const resultadoEl = document.getElementById('quizResultado');
  const nivelTituloEl = document.getElementById('quizNivelTitulo');
  const nivelDescricaoEl = document.getElementById('quizNivelDescricao');
  const linkPlanoEl = document.getElementById('quizLinkPlano');
  const refazerBtn = document.getElementById('quizRefazer');
  const progressoTexto = document.getElementById('quizProgresso');
  const progressoBarra = document.getElementById('quizProgressoFill');

  // Se algum elemento essencial do resultado não existir no HTML, o teste
  // não é iniciado (evita erros do tipo "Cannot read properties of null").
  if (!erroEl || !resultadoEl || !nivelTituloEl || !nivelDescricaoEl || !linkPlanoEl) {
    console.warn('Teste de nível: elementos do resultado não encontrados no HTML.');
    return;
  }

  // Faixas de pontuação (soma de 10 perguntas, cada uma vale de 1 a 4 pontos)
  // Pontuação mínima possível: 10 | máxima: 40
  const NIVEIS = [
    {
      nome: 'Básico',
      min: 10,
      max: 17,
      descricao: 'Você está dando os primeiros passos no idioma. A turma Básica vai construir sua base de vocabulário e gramática com calma e confiança.'
    },
    {
      nome: 'Intermediário',
      min: 18,
      max: 25,
      descricao: 'Você já entende estruturas do dia a dia. A turma Intermediária vai ampliar seu vocabulário e destravar sua fluência em conversas comuns.'
    },
    {
      nome: 'Avançado',
      min: 26,
      max: 33,
      descricao: 'Você já se comunica bem e lida com temas mais complexos. A turma Avançada vai refinar sua escrita, pronúncia e argumentação.'
    },
    {
      nome: 'Fluente',
      min: 34,
      max: 40,
      descricao: 'Você tem excelente domínio do idioma. A turma Fluente vai aprofundar nuances, expressões idiomáticas e comunicação natural de nativo.'
    }
  ];

  function calcularNivel(pontuacao) {
    return NIVEIS.find(n => pontuacao >= n.min && pontuacao <= n.max) || NIVEIS[0];
  }

  // Destaca o card correspondente tanto em "Níveis de ensino" quanto em "Planos"
  function destacarNivelRecomendado(nomeNivel) {
    document.querySelectorAll('#modalidades .card, #planos .card').forEach(card => {
      const alvo = card.dataset.plano || card.dataset.nivel;
      card.classList.toggle('card-recomendado', alvo === nomeNivel);
    });
  }

  // Marca visualmente a opção escolhida e atualiza a barra de progresso
  function atualizarProgresso() {
    let respondidas = 0;
    for (let i = 1; i <= TOTAL_PERGUNTAS; i++) {
      if (quizForm.querySelector(`input[name="q${i}"]:checked`)) respondidas++;
    }
    if (progressoTexto) progressoTexto.textContent = `${respondidas} de ${TOTAL_PERGUNTAS} respondidas`;
    if (progressoBarra) progressoBarra.style.setProperty('--fill', `${(respondidas / TOTAL_PERGUNTAS) * 100}%`);
  }

  quizForm.querySelectorAll('.quiz-question').forEach(pergunta => {
    const labels = pergunta.querySelectorAll('.quiz-opcoes label');
    pergunta.addEventListener('change', () => {
      labels.forEach(label => {
        const input = label.querySelector('input');
        label.classList.toggle('is-selected', input.checked);
      });
      atualizarProgresso();
    });
  });

  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    erroEl.style.display = 'none';

    let pontuacao = 0;
    let todasRespondidas = true;

    for (let i = 1; i <= TOTAL_PERGUNTAS; i++) {
      const selecionada = quizForm.querySelector(`input[name="q${i}"]:checked`);
      if (!selecionada) {
        todasRespondidas = false;
        break;
      }
      pontuacao += Number(selecionada.value);
    }

    if (!todasRespondidas) {
      erroEl.style.display = 'block';
      erroEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const nivel = calcularNivel(pontuacao);

    nivelTituloEl.textContent = `Seu nível: ${nivel.nome}`;
    nivelDescricaoEl.textContent = nivel.descricao;
    linkPlanoEl.textContent = `Ver turma ${nivel.nome}`;

    destacarNivelRecomendado(nivel.nome);

    quizForm.style.display = 'none';
    resultadoEl.style.display = 'block';
    resultadoEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  if (refazerBtn) {
    refazerBtn.addEventListener('click', () => {
      quizForm.reset();
      quizForm.querySelectorAll('.quiz-opcoes label.is-selected').forEach(label =>
        label.classList.remove('is-selected')
      );
      atualizarProgresso();
      quizForm.style.display = 'grid';
      resultadoEl.style.display = 'none';
      document.querySelectorAll('#modalidades .card, #planos .card').forEach(card =>
        card.classList.remove('card-recomendado')
      );
      quizForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}