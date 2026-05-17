/* ══════════════════════════════════════
   TUKBLI — script.js
   Kopi, Coklat & Dodol Mangga Indramayu
   ══════════════════════════════════════ */

// ── NAV: tambah class saat scroll ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER MENU ──
function toggleMenu() {
  navbar.classList.toggle('menu-open');
}

function closeMenu() {
  navbar.classList.remove('menu-open');
}

// Tutup menu kalau klik di luar nav
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    closeMenu();
  }
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));