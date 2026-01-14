let inputs = document.querySelectorAll(".input");
let button = document.querySelector(".how-price__button");

button.addEventListener("click", function () {
  let isEmpty = false;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      isEmpty = true;
    }
  });

  if (isEmpty) {
    alert("Поле не должно быть пустым!");
  } else {
    inputs.forEach(function (input) {
      input.value = "";
    });
    alert("Спасибо. Ваше сообщение было успешно отправлено!");
  }
});