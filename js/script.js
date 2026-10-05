/* =========================================================
   Yanisdey Ramirez | Contabilidad y Finanzas
   JS mínimo: menú móvil + año del footer.
   ========================================================= */
(function () {
  'use strict';

  // Año dinámico en el footer
  var yearNodes = document.querySelectorAll('.year, #y');
  var currentYear = new Date().getFullYear();
  yearNodes.forEach(function (n) { n.textContent = currentYear; });

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  }

  function openMenu() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (nav.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  // Cerrar al pulsar un enlace interno
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    closeMenu();
  });

  // Cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Cerrar al redimensionar a desktop
  var mq = window.matchMedia('(min-width: 960px)');
  mq.addEventListener('change', function (e) { if (e.matches) closeMenu(); });
})();