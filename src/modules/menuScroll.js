
const menuScroll = () => {
  const topMenu = document.querySelector(".top-menu");
  topMenu.addEventListener("click", (event) => {
    let target = event.target;

    if (target.matches("#header-services")) {
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
import scroll from "./scroll";
export default menuScroll;
