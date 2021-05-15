"use strict";
const notFoundOpenModal = () => {
  const notFoundButton = document.getElementById("not-found-open-modal");
  notFoundButton.addEventListener("click", () => {
    callbackOpenModal();
  });
};
import callbackOpenModal from "./callbackOpenModal";
export default notFoundOpenModal;
