window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  setTimeout(() => {
    hero.classList.add('animate-bg');
    const logo = document.querySelector('.hero-logo');
    logo.style.opacity = 1;
  }, 200);
});

// Elimina el efecto parallax, solo deja el fade del logo al hacer scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const logo = document.querySelector('.hero-logo');

  // Fade logo: opacidad baja al hacer scroll, vuelve al subir
  let opacity = 1 - scrollY / 400;
  if (opacity < 0.1) opacity = 0.1;
  if (opacity > 1) opacity = 1;
  logo.style.opacity = opacity;
});

// Mejora el hover en pantallas táctiles (opcional)
document.querySelectorAll('.noticia-card-img').forEach(card => {
  card.addEventListener('touchstart', function() {
    card.classList.add('hovered');
  });
  card.addEventListener('touchend', function() {
    card.classList.remove('hovered');
  });
});

