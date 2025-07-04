const menu = document.querySelector('.toggle')
const nav = document.querySelector('.header__navigation')

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
});