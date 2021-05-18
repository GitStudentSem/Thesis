
const servisesOpenModal = () => {
  const servisesButton = document.querySelectorAll(".services-modal");
  servisesButton.forEach((item) => {
    item.addEventListener("click", () => {
      callbackOpenModal();
    });
  });
};
import callbackOpenModal from "./callbackOpenModal";
export default servisesOpenModal;
