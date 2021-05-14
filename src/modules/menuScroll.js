"use strict";
const menuScroll = () => {
  const scroll = (scrollLink) => {
    // scrollLink.preventDefault();
    const id = scrollLink.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const topMenu = document.querySelector(".top-menu");
  topMenu.addEventListener("click", (event) => {
    let target = event.target;

    if (target.matches("#header-services")) {
      console.log(target);
      event.preventDefault();
      scroll(target);
    } else if (target.matches("#header-faq")) {
      event.preventDefault();
      scroll(target);
    } else if (target.matches("#header-contacts")) {
      event.preventDefault();
      scroll(target);
    }
  });
};
export default menuScroll;
