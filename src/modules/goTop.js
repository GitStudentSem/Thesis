"use strict";
const goTop = () => {
  window.addEventListener("scroll", () => {
    // Получаю кнопку
    const goTopButton = document.querySelector(".up");
    // Получаю контрольную секцию
    const servises = document.getElementById("services");
    // Получаю позицию секции
    let servisesPosition = servises.getBoundingClientRect().top;

    // Если скролл дошел до секции, то кнопка появляется
    if (document.documentElement.scrollTop > servisesPosition) {
      goTopButton.style.display = "block";

      // При клике на кнопку происходит планый скролл к верху страницы
      goTopButton.addEventListener("click", () => {
        document.body.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      goTopButton.style.display = "none";
    }
  });
};
export default goTop;
