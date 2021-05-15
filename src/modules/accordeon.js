"use strict";
const accordeon = () => {
  const accordeonItems = document.querySelectorAll(".accordeon-item");
  accordeonItems.forEach((item) => {
    const title = item.children[0];
    const content = item.children[1];
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        content.classList.remove("accordeon-content-active");
        title.classList.remove("accordeon-title-active");
      } else {
        item.classList.add("active");
        content.classList.add("accordeon-content-active");
        title.classList.add("accordeon-title-active");
      }
    });
  });
};
export default accordeon;
