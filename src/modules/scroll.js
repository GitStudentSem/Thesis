"use strict";
const scroll = (scrollLink) => {
  const id = scrollLink.getAttribute("href");
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default scroll;
