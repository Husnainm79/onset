/* ONSET — interactions */

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!navbar || !toggle) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  toggle.addEventListener("click", () => {
    const open = toggle.classList.toggle("open");
    mobileMenu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      mobileMenu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initServices() {
  const tabsEl = document.getElementById("service-tabs");
  const panelEl = document.getElementById("service-panel");
  if (!tabsEl || !panelEl) return;

  let active = 0;

  function render() {
    tabsEl.innerHTML = SERVICES.map(
      (s, i) =>
        `<button class="service-tab${i === active ? " active" : ""}" data-index="${i}" type="button">${s.title}</button>`
    ).join("");

    const s = SERVICES[active];
    panelEl.className = `service-panel glow-purple ${s.gradient}`;
    panelEl.innerHTML = `
      <h3>${s.title}</h3>
      <p class="tagline">${s.tagline}</p>
      <p class="service-desc">${s.description}</p>
      <p class="includes-label">Includes</p>
      <ul class="service-includes">${s.includes.map((item) => `<li>${item}</li>`).join("")}</ul>
      <a href="#contact" class="text-link" style="margin-top:1.5rem;display:inline-block;">Get started with ${s.title} →</a>
    `;

    tabsEl.querySelectorAll(".service-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        active = Number(btn.dataset.index);
        render();
      });
    });
  }

  render();
}

function initServiceCards() {
  const grid = document.getElementById("service-cards");
  if (!grid) return;

  grid.innerHTML = SERVICES.map(
    (s) => `
    <article class="service-card bg-gradient-card reveal" id="${s.id}">
      <div class="service-card-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p class="service-card-tagline">${s.tagline}</p>
      <p class="service-card-desc">${s.description}</p>
      <ul class="service-card-list">${s.includes.map((i) => `<li>${i}</li>`).join("")}</ul>
      <a href="contact.html" class="text-link">Get started →</a>
    </article>
  `
  ).join("");
}

function initPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  const filtersEl = document.getElementById("portfolio-filters");
  let filter = "all";

  function renderFilters() {
    if (!filtersEl) return;
    const cats = [
      { id: "all", label: "All Work" },
      { id: "positioning", label: "Positioning" },
      { id: "strategy", label: "Strategy" },
      { id: "visual", label: "Visual" },
      { id: "ghostwriting", label: "Ghostwriting" },
      { id: "leads", label: "Lead Gen" },
    ];
    filtersEl.innerHTML = cats
      .map(
        (c) =>
          `<button class="filter-btn${filter === c.id ? " active" : ""}" data-filter="${c.id}" type="button">${c.label}</button>`
      )
      .join("");

    filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        filter = btn.dataset.filter;
        renderFilters();
        renderGrid();
      });
    });
  }

  function renderGrid() {
    const items =
      filter === "all" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

    grid.innerHTML = items
      .map(
        (item) => `
      <div class="portfolio-card reveal">
        <div class="portfolio-bg ${item.gradient}"></div>
        <div class="portfolio-overlay"></div>
        <div class="portfolio-info">
          <span class="category">${item.label}</span>
          <h3>${item.title}</h3>
          <p class="portfolio-result">${item.result}</p>
        </div>
        <div class="portfolio-hover"><span>View Case Study</span></div>
      </div>
    `
      )
      .join("");

    initReveal();
  }

  renderFilters();
  renderGrid();
}

function initHomePortfolio() {
  const grid = document.getElementById("home-portfolio");
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.slice(0, 3)
    .map(
      (item) => `
    <div class="portfolio-card reveal">
      <div class="portfolio-bg ${item.gradient}"></div>
      <div class="portfolio-overlay"></div>
      <div class="portfolio-info">
        <span class="category">${item.label}</span>
        <h3>${item.title}</h3>
      </div>
      <div class="portfolio-hover"><span>View Case Study</span></div>
    </div>
  `
    )
    .join("");
}

function initTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map(
    (t) => `
    <div class="testimonial-card bg-gradient-card reveal">
      <div class="quote-mark">&ldquo;</div>
      <blockquote>${t.quote}</blockquote>
      <div class="testimonial-author">
        <strong>${t.author}</strong>
        <span>${t.role}</span>
      </div>
    </div>
  `
  ).join("");
}

function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("open");
        el.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function initFAQFromData() {
  const list = document.getElementById("faq-list");
  if (!list) return;

  list.innerHTML = FAQS.map(
    (faq, i) => `
    <div class="faq-item${i === 0 ? " open" : ""} reveal">
      <button class="faq-question" aria-expanded="${i === 0}">
        <span>${faq.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner"><p>${faq.a}</p></div>
      </div>
    </div>
  `
  ).join("");

  initFAQ();
}

function initStats() {
  const el = document.getElementById("stats-bar");
  if (!el) return;

  el.innerHTML = STATS.map(
    (s) => `
    <div class="stat-item reveal">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `
  ).join("");
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "-50px" }
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));

  document.querySelectorAll(".sign-item").forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(item);
  });
}

function initHero() {
  document.querySelectorAll(".hero-title .slide-line").forEach((line, i) => {
    line.style.animationDelay = `${0.2 + i * 0.15}s`;
  });
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 600);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initContactPhone() {
  const phoneEl = document.getElementById("cta-phone");
  if (!phoneEl || !SITE.phone) return;

  phoneEl.textContent = SITE.phone;
  phoneEl.href = `tel:${SITE.phone.replace(/\s/g, "")}`;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Discovery Call — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  });
}

function initFooter() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initServices();
  initServiceCards();
  initPortfolio();
  initHomePortfolio();
  initTestimonials();
  initFAQ();
  initFAQFromData();
  initStats();
  initReveal();
  initHero();
  initBackToTop();
  initContactPhone();
  initContactForm();
  initFooter();
});
