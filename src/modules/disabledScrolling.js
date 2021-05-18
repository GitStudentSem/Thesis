const disableScrolling = () => {
  let x = window.scrollX;
  let y = window.scrollY;
  window.onscroll = () => {
    window.scrollTo(x, y);
  };
};
// Для разблокировки прописать эту команду
//   window.onscroll = () => {};

export default disableScrolling;
