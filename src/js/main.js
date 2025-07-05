const menuBtn = document.querySelector('.toggle');
const nav = document.querySelector('.header__navigation');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  const target = e.target;

  if (!nav.contains(target) && !menuBtn.contains(target)) {
    nav.classList.remove('active');
  }
});