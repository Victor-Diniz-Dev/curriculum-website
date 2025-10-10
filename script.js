// MENU RESPONSIVO
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
  });
});

// ANIMAÇÃO DE DIGITAÇÃO NO HERO
const heroText = document.getElementById("hero-text");
const message = "Construindo experiências digitais que unem eficiência e beleza.";
let i = 0;

function typeEffect() {
  if (i < message.length) {
    heroText.textContent += message.charAt(i);
    i++;
    setTimeout(typeEffect, 50); // velocidade da digitação
  }
}

window.addEventListener("load", typeEffect);


// ANIMAÇÃO DE FADE-IN AO ROLAR
const elements = document.querySelectorAll('.fade-in');

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // ativa os que já estão visíveis
