"use strict";
const mobileMenu = () => {
  const mobileMenuContent = document.querySelector(".mobile-menu");
  const burger = document.querySelector(".mob-menu-btn");
  //Открыть мобильное меню
  burger.addEventListener("click", () => {
    mobileMenuContent.classList.add("open");
  });

  // интерактив внутри меню
  mobileMenuContent.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    console.log("target: ", target);
    // Закрыть мобильное меню
    if (target.matches(".mobile-menu-close")) {
      mobileMenuContent.classList.remove("open");
      //Вызов модального окна
    } else if (target.matches("#mobile-open-modal")) {
      mobileMenuContent.classList.remove("open");
      callbackOpenModal();
      // Переход к секциям сайта
    } else if (target.matches("#mobile-services")) {
      mobileMenuContent.classList.remove("open");
      scroll(target);
    } else if (target.matches("#mobile-faq")) {
      mobileMenuContent.classList.remove("open");
      scroll(target);
    } else if (target.matches("#mobile-contacts")) {
      mobileMenuContent.classList.remove("open");
      scroll(target);
    }
  });
};
import scroll from "./scroll";
import callbackOpenModal from "./callbackOpenModal";
export default mobileMenu;
