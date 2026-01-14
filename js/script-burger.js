const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__body');

burgerBtn.addEventListener('click', () => {
  const isOpen = burgerMenu.classList.toggle('open');
  burgerBtn.classList.toggle('active');

  burgerBtn.setAttribute('aria-expanded', isOpen);
  document.body.classList.toggle('lock');
});