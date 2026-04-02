/* ================================================
   LUXE ESTATES — main.js
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── PAGE NAVIGATION ──────────────────────────────
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-page]');

  function showPage(id) {
    pages.forEach(p => p.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update active nav link
    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.page === id);
    });
  }

  // Attach click handlers to all data-page triggers
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showPage(el.dataset.page);
    });
  });

  // ── STICKY NAV ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── FILTER BUTTONS ───────────────────────────────
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ── BUTTON HOVER EFFECTS ─────────────────────────
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseover', () => btn.style.background = '#E8C97A');
    btn.addEventListener('mouseout',  () => btn.style.background = '#C9A84C');
  });

  // ── PROPERTY CARD HOVER ──────────────────────────
  document.querySelectorAll('.prop-card-v2').forEach(card => {
    card.addEventListener('mouseover', () => card.style.transform = 'translateY(-8px)');
    card.addEventListener('mouseout',  () => card.style.transform = 'translateY(0)');
  });

  // ── CONTACT FORM SUBMIT ──────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = '✦ Message Sent!';
      btn.style.background = '#4CAF50';
      setTimeout(() => {
        btn.textContent = 'Request Private Consultation ✦';
        btn.style.background = '#C9A84C';
        form.reset();
      }, 3000);
    });
  }

  // ── INIT ─────────────────────────────────────────
  showPage('home');
});
