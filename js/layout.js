/* ONSET — shared header & footer */

function getPageId() {
  const page = document.body.dataset.page;
  if (page) return page;
  const path = window.location.pathname.split("/").pop() || "index.html";
  if (path === "" || path === "index.html") return "home";
  return path.replace(".html", "");
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;

  const current = getPageId();
  const links = NAV.map((item) => {
    const active = item.id === current ? ' class="active"' : "";
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join("");

  const mobileLinks = NAV.map((item) => {
    const active = item.id === current ? ' class="active"' : "";
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join("");

  el.innerHTML = `
    <header class="navbar" id="navbar">
      <nav class="navbar-inner">
        <a href="index.html" class="logo">
          ${SITE.name}
          <span class="logo-dot"></span>
        </a>
        <div class="nav-links">${links}<a href="contact.html" class="btn btn-primary btn-sm">Book a Call</a></div>
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-inner">
          ${mobileLinks}
          <a href="contact.html" class="btn btn-primary" style="margin-top:1rem;text-align:center;">Book a Call</a>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;

  el.innerHTML = `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="index.html" class="footer-logo">
            <span class="name">${SITE.name}</span>
            <span class="logo-dot"></span>
          </a>
          <p class="footer-desc">${SITE.tagline}. We help professionals build LinkedIn presences that create real opportunities.</p>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="work.html">Work</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <a href="services.html#positioning">LinkedIn Positioning</a>
          <a href="services.html#strategy">Content Strategy</a>
          <a href="services.html#ghostwriting">Ghostwriting</a>
          <a href="services.html#visual">Visual Design</a>
          <a href="services.html#leads">Lead Generation</a>
        </div>
        <div class="footer-col">
          <h4>Get in Touch</h4>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
          <a href="contact.html">Book a Discovery Call</a>
          <a href="contact.html">Free LinkedIn Audit</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; <span id="year"></span> ${SITE.name}. All rights reserved.</p>
        <p class="footer-tagline">You don't have a content problem. You have a positioning problem.</p>
      </div>
    </footer>
    <button class="back-to-top" id="back-to-top" aria-label="Back to top">↑</button>
  `;
}

function renderMarquee() {
  const el = document.getElementById("marquee");
  if (!el) return;

  const items = [...MARQUEE, ...MARQUEE]
    .map(
      (text) =>
        `<span class="marquee-item"><span class="diamond">◆</span> ${text}</span>`
    )
    .join("");

  el.innerHTML = `
    <div class="marquee-fade-l"></div>
    <div class="marquee-fade-r"></div>
    <div class="marquee-track">${items}</div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderMarquee();
});
