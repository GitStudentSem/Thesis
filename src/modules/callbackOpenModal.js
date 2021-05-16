"use strict";
const callbackOpenModal = (button) => {
  const modalBody = document.getElementById("modal-body");
  const modalOverlay = document.querySelector(".modal-overlay");

  //Открытие модального окна
  modalBody.style.display = "block";
  modalOverlay.style.display = "block";
  disabledScrolling();
  window.addEventListener("click", (event) => {
    let target = event.target;

    // Отсекаю лишние клики и беру только крестик и оверлей
    if (!target.matches("#modal-close") && !target.matches(".modal-overlay")) {
      return;
    }
    if (target.matches("#modal-close")) {
      modalBody.style.display = "none";
      modalOverlay.style.display = "none";
      window.onscroll = () => {};
    } else if (target.matches(".modal-overlay")) {
      modalBody.style.display = "none";
      modalOverlay.style.display = "none";
      window.onscroll = () => {};
    }
  });
};
import disabledScrolling from "./disabledScrolling";
export default callbackOpenModal;
