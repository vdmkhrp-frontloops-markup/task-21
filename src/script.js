document.addEventListener("DOMContentLoaded", function () {
  const dotBtns = document.querySelectorAll(".card__dot");
  const sizeBtns = document.querySelectorAll(".card__size-btn");
  const counterValue = document.querySelector(".card__value");
  const counterBtnL = document.querySelector(".card__counter-btn--left");
  const counterBtnR = document.querySelector(".card__counter-btn--right");
  let value = 2;

  const handleButtonClick = (buttons, activeClass) => {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((button) => button.classList.remove(activeClass));
        btn.classList.add(activeClass);
      });
    });
  };

  handleButtonClick(dotBtns, "card__dot--active");
  handleButtonClick(sizeBtns, "card__size-btn--active");

  function updateValue() {
    counterValue.textContent = value;

    if (value === 11) {
      counterBtnR.classList.add("max-value");
    } else {
      counterBtnR.classList.remove("max-value");
    }
  }

  counterBtnL.addEventListener("click", () => {
    if (value > 1) {
      value--;
    }
    updateValue();
  });

  counterBtnR.addEventListener("click", () => {
    if (value < 11) {
      value++;
    }
    updateValue();
  });

  updateValue();
});
