
const mobileMenu = () => {
  const mobileMenuContent = document.querySelector(".mobile-menu");
  const burger = document.querySelector(".mob-menu-btn");
  //Открыть мобильное меню
  burger.addEventListener("click", () => {
    mobileMenuContent.classList.add("open");
    disabledScrolling();
  });

  // интерактив внутри меню
  mobileMenuContent.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;
    // Закрыть мобильное меню
    if (target.matches(".mobile-menu-close")) {
      mobileMenuContent.classList.remove("open");
      window.onscroll = () => {};
      //Вызов модального окна
    } else if (target.matches("#mobile-open-modal")) {
      mobileMenuContent.classList.remove("open");
      callbackOpenModal();
      window.onscroll = () => {};
      // Переход к секциям сайта
    } else if (target.matches("#mobile-services")) {
      mobileMenuContent.classList.remove("open");
      window.onscroll = () => {};
      scroll(target);
    } else if (target.matches("#mobile-faq")) {
      mobileMenuContent.classList.remove("open");
      window.onscroll = () => {};
      scroll(target);
    } else if (target.matches("#mobile-contacts")) {
      mobileMenuContent.classList.remove("open");
      window.onscroll = () => {};
      scroll(target);
    }
  });
};
import disabledScrolling from "./disabledScrolling";
import scroll from "./scroll";
import callbackOpenModal from "./callbackOpenModal";
export default mobileMenu;
