"use strict";
const accordeon = () => {
  const accordeonItems = document.querySelectorAll(".accordeon-item");
  accordeonItems.forEach((item) => {
    const title = item.children[0];
    const content = item.children[1];

    item.addEventListener("click", (event) => {
      let target = event.target;
      if (target.matches(".accordeon-content-active")) {
        return;
      }
      if (item.classList.contains("active")) {
        // Запускается цикл и при клике идет проверка есть ли класс active. Если он есть то он удаляется
        item.classList.remove("active");
        content.classList.remove("accordeon-content-active");
        title.classList.remove("accordeon-title-active");
      } else {
        // Если класса active нет, то запускается цикл, который удаляет этот класс с другого активного элемента
        accordeonItems.forEach((elem) => {
          const title = elem.children[0];
          const content = elem.children[1];
          elem.classList.remove("active");
          content.classList.remove("accordeon-content-active");
          title.classList.remove("accordeon-title-active");
        });
        // Добавляет класс active  на новый элемент элемент
        item.classList.add("active");
        content.classList.add("accordeon-content-active");
        title.classList.add("accordeon-title-active");
      }
    });
  });
};
export default accordeon;
