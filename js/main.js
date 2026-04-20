// AOS – Animate on Scroll
AOS.init({ once: true, offset: 60 });

// Navbar: aumenta opacidade ao rolar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 60
    ? 'rgba(13,47,110,0.97)'
    : 'rgba(13,47,110,0.92)';
});
