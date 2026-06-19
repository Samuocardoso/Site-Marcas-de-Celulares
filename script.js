function showSection(id, theme) {
  const sections = document.querySelectorAll('.section');

  sections.forEach(sec => sec.style.display = 'none');

  document.getElementById(id).style.display = 'block';

  // troca TUDO (inclusive barra superior)
  document.body.className = theme + "-theme";

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// abre Apple automaticamente
window.onload = () => {
  showSection('apple', 'apple');
};