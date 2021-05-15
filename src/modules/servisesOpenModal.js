"use strict";
const servisesOpenModal = () => {
  const servisesButton = document.querySelectorAll(".services-modal");
  servisesButton.forEach((item) => {
    callbackOpenModal(item);
  });
};
import callbackOpenModal from "./callbackOpenModal";
export default servisesOpenModal;
