// ============================================================
// Guilherme Cardozo — Portfólio | script.js
// ============================================================

(function () {

  /* ---------- Tema claro/escuro ---------- */
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('gc-theme');
  if (savedTheme === 'light') root.setAttribute('data-theme', 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      if (isLight) {
        root.removeAttribute('data-theme');
        localStorage.setItem('gc-theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('gc-theme', 'light');
      }
    });
  }

  /* ---------- Certificados ---------- */
  const certificates = [
    { title: 'Residência em TIC-20 de Ciência de Dados', org: 'Capacita Brasil / C-Jovem · UECE', image: 'assets/cert-tic20.jpg' },
    { title: 'SQL Para Análise de Dados', org: 'Infinity Big Data', image: 'assets/cert-sql-infinity.jpg' },
    { title: 'SQL — Dataclub', org: 'DevClub', image: 'assets/cert-sql-dataclub.jpg' },
    { title: 'Formação Microsoft Power BI Profissional', org: 'Udemy', image: 'assets/cert-powerbi-udemy.jpg' },
    { title: 'Power BI', org: 'Santander Open Academy', image: 'assets/cert-powerbi-santander.jpg' },
    { title: 'Competências Digitais e Inteligência Artificial', org: 'Universidade Cruzeiro do Sul', image: 'assets/cert-ia.jpg' },
    { title: 'Copilot na Prática: IA, Prompts e Automação', org: 'Universidade Corporativa', image: 'assets/cert-copilot.jpg' },
    { title: 'Curso de Excel Completo', org: 'Danki Code', image: 'assets/cert-excel.jpg' },
  ];

  const certGrid = document.getElementById('cert-grid');
  const certModalOverlay = document.getElementById('cert-modal-overlay');
  const certModalVisual = document.getElementById('cert-modal-visual');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalMeta = document.getElementById('cert-modal-meta');
  const certModalClose = document.getElementById('cert-modal-close');

  const certPlaceholderIcon = `<span class="cert-thumb-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"></rect><circle cx="12" cy="11" r="3"></circle><path d="M8 21h8M9 18l-1 3M15 18l1 3"></path></svg></span>`;

  function openCertModal(cert) {
    certModalTitle.textContent = cert.title;
    if (cert.image) {
      certModalVisual.innerHTML = `<img src="${cert.image}" alt="${cert.title}">`;
      certModalMeta.textContent = cert.org || '';
    } else {
      certModalVisual.innerHTML = certPlaceholderIcon;
      certModalMeta.textContent = 'Envie a imagem deste certificado para eu exibir aqui.';
    }
    certModalOverlay.classList.add('open');
  }

  function closeCertModal() {
    certModalOverlay.classList.remove('open');
  }

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModalOverlay) {
    certModalOverlay.addEventListener('click', (e) => {
      if (e.target === certModalOverlay) closeCertModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
  });

  if (certGrid) {
    certificates.forEach(cert => {
      const card = document.createElement('button');
      card.className = 'cert-card reveal';
      card.type = 'button';
      card.innerHTML = `
        <span class="cert-thumb">${cert.image ? `<img src="${cert.image}" alt="${cert.title}">` : certPlaceholderIcon}</span>
        <span class="cert-body">
          <h4>${cert.title}</h4>
          <span class="cert-meta">${cert.org || 'Clique para visualizar'}</span>
        </span>
      `;
      card.addEventListener('click', () => openCertModal(cert));
      certGrid.appendChild(card);
    });
  }

  /* ---------- Header: fundo ao rolar ---------- */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    backTop.classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Voltar ao topo ---------- */
  const backTop = document.getElementById('back-top');
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Link ativo na navegação ---------- */
  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = ['sobre', 'projetos', 'certificacoes', 'contato']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(s => navObserver.observe(s));

  /* ---------- Reveal ao rolar ---------- */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));

  /* ---------- Contadores animados ---------- */
  const counters = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

  /* ---------- Fundo animado (partículas sutis) ---------- */
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 28000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.6,
    }));
  }

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(96, 165, 250, 0.45)';
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    if (!prefersReducedMotion) requestAnimationFrame(drawFrame);
  }

  resizeCanvas();
  drawFrame();
  window.addEventListener('resize', resizeCanvas);

  onScroll();

  /* ---------- Timeline de formação: revela a linha ---------- */
  const timeline = document.querySelector('.edu-timeline');
  if (timeline) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    obs.observe(timeline);
  }
})();
