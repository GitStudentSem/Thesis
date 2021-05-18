
const headerOpenModal = () => {
  const headerOpenButton = document.getElementById("header-open-modal");
  headerOpenButton.addEventListener("click", () => {
    callbackOpenModal();
  });
};
import callbackOpenModal from "./callbackOpenModal";
export default headerOpenModal;
