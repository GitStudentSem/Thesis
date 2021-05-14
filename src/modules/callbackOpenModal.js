"use strict";
const callbackOpenModal = (button) => {
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.querySelector(".modal-close");
  const modalOverlay = document.querySelector(".modal-overlay");

  button.addEventListener("click", () => {
    modalBody.style.display = "block";
    modalOverlay.style.display = "block";
  });
  modalClose.addEventListener("click", () => {
    modalBody.style.display = "none";
    modalOverlay.style.display = "none";
  });
  modalOverlay.addEventListener("click", () => {
    modalBody.style.display = "none";
    modalOverlay.style.display = "none";
  });
};
export default callbackOpenModal;
