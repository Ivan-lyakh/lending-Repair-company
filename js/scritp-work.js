document.querySelectorAll('.divan_check__more').forEach(button => {
  button.addEventListener('click', () => {

    const card = button.closest('.work__card__change');
    const imgs = card.querySelectorAll('.imgnone');

    if (!imgs.length) return;

    const isActive = imgs[0].classList.contains('active');

    imgs.forEach(img => {
      img.classList.toggle('active', !isActive);
    });

    button.textContent = isActive
      ? 'Посмотреть работы'
      : 'Меньше работ';
  });
});



const tabButtons = document.querySelectorAll('.work__card__top button');
const cards = document.querySelectorAll('.work__card__change');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {

    cards.forEach(card => {
      card.classList.remove('activeted');
      card.classList.add('disabled');

      card.querySelectorAll('.imgnone').forEach(img => {
        img.classList.remove('active');
      });

      const moreBtn = card.querySelector('.divan_check__more');
      if (moreBtn) moreBtn.textContent = 'Посмотреть работы';
    });

    tabButtons.forEach(btn => btn.classList.remove('activeted'));

    cards[index].classList.remove('disabled');
    cards[index].classList.add('activeted');
    button.classList.add('activeted');
  });
});

