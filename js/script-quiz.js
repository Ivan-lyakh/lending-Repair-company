document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
    QUIZ STATE
  ================================ */
  const quizState = {
    workBase: 0,
    workExtra: 0,
    material: 0
  };

  /* ===============================
    STEPS SWITCHING
  ================================ */
  const steps = document.querySelectorAll('.quiz__step');

  steps.forEach((step, index) => {
    const nextBtn = step.querySelector('.quiz__next');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        steps[index].classList.remove('quiz__step--active');
        steps[index + 1]?.classList.add('quiz__step--active');
        updatePrices();
      });
    }
  });

  /* ===============================
    STEP 1 — TYPE OF FURNITURE
  ================================ */
  document.querySelectorAll('.quiz__step')[0]
    .querySelectorAll('.quiz__option')
    .forEach(option => {
      option.addEventListener('click', () => {
        document.querySelectorAll('.quiz__option')
          .forEach(o => o.classList.remove('quiz__option--active'));

        option.classList.add('quiz__option--active');

        quizState.workBase = Number(option.dataset.price);

        option.closest('.quiz__step')
          .querySelector('.quiz__next').disabled = false;

        updatePrices();
      });
    });

  /* ===============================
    STEP 2 — PARAMETERS
  ================================ */
  const sizePrices = { small: 0, medium: 500, large: 1000 };
  const softPrices = { no: 0, medium: 300, high: 600 };
  const fillPrices = { no: 0, partial: 500, full: 1000 };

  let step2Selections = { size: 0, soft: 0, fill: 0 };

  document.querySelectorAll('.quiz__step')[1]
    .querySelectorAll('.quiz__radio')
    .forEach(radio => {
      radio.addEventListener('click', () => {
        const group = radio.closest('.quiz__group');

        group.querySelectorAll('.quiz__radio')
          .forEach(r => r.classList.remove('quiz__radio--active'));

        radio.classList.add('quiz__radio--active');

        if (radio.dataset.size) step2Selections.size = sizePrices[radio.dataset.size];
        if (radio.dataset.soft) step2Selections.soft = softPrices[radio.dataset.soft];
        if (radio.dataset.fill) step2Selections.fill = fillPrices[radio.dataset.fill];

        quizState.workExtra =
          step2Selections.size +
          step2Selections.soft +
          step2Selections.fill;

        radio.closest('.quiz__step')
          .querySelector('.quiz__next').disabled = false;

        updatePrices();
      });
    });

  /* ===============================
    STEP 3 — MATERIAL
  ================================ */
  document.querySelectorAll('.quiz__step')[2]
    .querySelectorAll('.quiz__radio')
    .forEach(radio => {
      radio.addEventListener('click', () => {
        const group = radio.closest('.quiz__group');

        group.querySelectorAll('.quiz__radio')
          .forEach(r => r.classList.remove('quiz__radio--active'));

        radio.classList.add('quiz__radio--active');

        quizState.material = Number(radio.dataset.price);

        radio.closest('.quiz__step')
          .querySelector('.quiz__next').disabled = false;

        updatePrices();
      });
    });

  /* ===============================
    CUSTOM SELECT
  ================================ */
  const select = document.querySelector('.quiz__select');

  if (select) {
    const btn = select.querySelector('.quiz__select-btn');
    const value = select.querySelector('.quiz__select-value');
    const items = select.querySelectorAll('.quiz__select-item');

    btn.addEventListener('click', () => {
      select.classList.toggle('open');
    });

    items.forEach(item => {
      item.addEventListener('click', () => {
        value.textContent = item.textContent;
        select.classList.remove('open');
      });
    });
  }

  /* ===============================
    STEP 4 — TOTAL
  ================================ */
  function updatePrices() {
    const work = quizState.workBase + quizState.workExtra;
    const material = quizState.material;
    const total = work + material;

    const workEl = document.getElementById('workPrice');
    const materialEl = document.getElementById('materialPrice');
    const totalEl = document.getElementById('quizTotal');

    if (workEl) workEl.textContent = work + ' грн';
    if (materialEl) materialEl.textContent = material + ' грн';
    if (totalEl) totalEl.textContent = total + ' грн';
  }

  /* ===============================
    FORM VALIDATION
  ================================ */
  const inputs = document.querySelectorAll('.quiz__input');
  const submitBtn = document.querySelector('.quiz__submit');

  if (submitBtn) {
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        submitBtn.disabled = ![...inputs].every(i => i.value.trim() !== '');
      });
    });
  }

});