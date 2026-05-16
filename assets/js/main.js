/* 2B OR NOT 2B AI Systems · Vanilla JS interactions */

(function () {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.page-progress span');
  const nav = document.querySelector('.site-nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = [...document.querySelectorAll('.site-nav a')];
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateHeader() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    header?.classList.toggle('is-scrolled', scrollY > 18);

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  }

  function setActiveNav() {
    if (!sections.length) return;
    const offset = window.innerHeight * 0.28;
    let active = sections[0];

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) active = section;
    }

    navLinks.forEach(link => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${active.id}`);
    });
  }

  updateHeader();
  setActiveNav();

  window.addEventListener('scroll', () => {
    updateHeader();
    setActiveNav();
  }, { passive: true });

  navToggle?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', event => {
    if (!nav || !navToggle || !nav.classList.contains('is-open')) return;
    const target = event.target;
    if (!nav.contains(target) && !navToggle.contains(target)) {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Reveal on scroll
  const revealItems = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
      observer.observe(item);
    });
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Card glow follows pointer
  const glowCards = document.querySelectorAll('.service-card, .problem-card, .proof-card');
  glowCards.forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });

  // AI tabs
  const tabs = [...document.querySelectorAll('.ai-tab')];
  const panels = [...document.querySelectorAll('.ai-panel')];

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetId);

      tabs.forEach(item => {
        item.classList.toggle('is-active', item === tab);
        item.setAttribute('aria-selected', String(item === tab));
      });

      panels.forEach(panel => {
        const active = panel === targetPanel;
        panel.classList.toggle('is-active', active);
        panel.hidden = !active;
      });
    });
  });

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Subtle canvas network
  const canvas = document.querySelector('.tech-canvas');
  if (!canvas || reducedMotion) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];
  let rafId = null;
  let lastTime = 0;

  function particleCount() {
    if (window.innerWidth < 640) return 24;
    if (window.innerWidth < 980) return 38;
    return 58;
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width || window.innerWidth;
    height = rect.height || window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    particles = Array.from({ length: particleCount() }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.7 + 0.55,
      phase: Math.random() * Math.PI * 2,
      gold: i % 7 === 0
    }));
  }

  function drawCircuitLine(x, y, length, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = 'rgba(53, 163, 229, .38)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length * 0.42, y);
    ctx.lineTo(x + length * 0.52, y + 13);
    ctx.lineTo(x + length, y + 13);
    ctx.stroke();
    ctx.restore();
  }

  function animate(time) {
    if (time - lastTime < 1000 / 45) {
      rafId = requestAnimationFrame(animate);
      return;
    }
    lastTime = time;

    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(width * 0.56, height * 0.24, 0, width * 0.56, height * 0.24, Math.max(width, height) * .72);
    gradient.addColorStop(0, 'rgba(53, 163, 229, .10)');
    gradient.addColorStop(.42, 'rgba(0, 103, 214, .035)');
    gradient.addColorStop(1, 'rgba(0, 7, 18, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    drawCircuitLine(width * 0.08, height * 0.26, width * 0.22, .34);
    drawCircuitLine(width * 0.68, height * 0.44, width * 0.20, .26);
    drawCircuitLine(width * 0.14, height * 0.72, width * 0.16, .18);

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.phase += 0.018;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      for (let j = i + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = window.innerWidth < 760 ? 98 : 132;

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.22;
          ctx.strokeStyle = `rgba(53, 163, 229, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      const pulse = Math.sin(p.phase) * 0.35 + 0.65;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2);
      ctx.fillStyle = p.gold ? 'rgba(233, 202, 132, .62)' : 'rgba(53, 163, 229, .65)';
      ctx.fill();
    }

    rafId = requestAnimationFrame(animate);
  }

  const resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(canvas);
  resizeCanvas();
  animate(0);

  window.addEventListener('beforeunload', () => {
    if (rafId) cancelAnimationFrame(rafId);
  });
})();
