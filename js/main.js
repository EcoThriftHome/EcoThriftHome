/* ============================================================
   EcoThrift Home — Main JavaScript
   ============================================================ */

/* ===== NAV TOGGLE ===== */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    this.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ===== SAVINGS CALCULATOR ===== */
function calculateSavings() {
  const billInput = document.getElementById('monthly-bill');
  const monthly   = parseFloat(billInput ? billInput.value : 0) || 120;
  const annual    = monthly * 12;

  // Percentages based on EIA/ENERGY STAR data
  const led     = Math.round(annual * 0.15 * 0.75);   // 15% lighting × 75% LED saving
  const therm   = Math.round(annual * 0.43 * 0.12);   // 43% HVAC × 12% thermostat saving
  const vampire = Math.round(annual * 0.10 * 0.85);   // 10% phantom × 85% elimination
  const water   = Math.round(annual * 0.14 * 0.10);   // 14% water heating × 10% habit saving
  const total   = led + therm + vampire + water;

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = '$' + val.toLocaleString();
  };

  set('r-led',     led);
  set('r-therm',   therm);
  set('r-vampire', vampire);
  set('r-water',   water);
  set('r-total',   total);

  const results = document.getElementById('calc-results');
  if (results) {
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* Auto-calculate on input change */
(function () {
  const input = document.getElementById('monthly-bill');
  if (!input) return;
  input.addEventListener('input', function () {
    const results = document.getElementById('calc-results');
    if (results && results.style.display !== 'none') {
      calculateSavings();
    }
  });
})();

/* ===== FAQ ACCORDION ===== */
document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const answerId = this.getAttribute('aria-controls');
      const answer   = document.getElementById(answerId);

      // Close all others
      questions.forEach(function (other) {
        const otherId = other.getAttribute('aria-controls');
        const otherAnswer = document.getElementById(otherId);
        other.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.style.display = 'none';
      });

      // Toggle this one
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.display = 'block';
      }
    });
  });
});

/* ===== NEWSLETTER SIGNUP ===== */
function handleNewsletterSignup(e) {
  e.preventDefault();
  const form    = document.querySelector('.newsletter-form');
  const success = document.getElementById('newsletter-success');
  const input   = document.getElementById('email-signup');
  const btn     = form ? form.querySelector('button[type="submit"]') : null;

  if (!input || !input.value || !input.value.includes('@')) {
    input && input.focus();
    return;
  }

  if (btn)     btn.style.display = 'none';
  if (input)   input.style.display = 'none';
  if (success) success.style.display = 'flex';
}

/* ===== SMOOTH ANCHOR SCROLLING (offset for sticky header) ===== */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const headerH = (document.querySelector('.site-header') || {offsetHeight: 70}).offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 16;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  });
})();

/* ===== CURRENT YEAR ===== */
(function () {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ===== LAZY OBSERVER (for future images) ===== */
if ('IntersectionObserver' in window) {
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  const obs  = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) img.src = img.dataset.src;
        obs.unobserve(img);
      }
    });
  });
  imgs.forEach(function (img) { obs.observe(img); });
}
