"use strict";

const carousel = () => {
  let widthWind = document.querySelector("body").offsetWidth;
  let slidesToShow;
  if (widthWind <= 766) {
    slidesToShow = 1;
  } else if (widthWind <= 1240) {
    slidesToShow = 2;
  } else {
    slidesToShow = 3;
  }
  //////////////
  let position = 0;
  const slidesToScroll = 1;
  const container = document.querySelector(".slider-container");
  const track = document.querySelector(".slider-track");
  const btnPrev = document.querySelector(".arrow-left");
  const btnNext = document.querySelector(".arrow-right");
  const items = document.querySelectorAll(".slider-item");
  const itemsCount = items.length;
  // +2 что бы убрать торчащие по краям полоски соседних слайдов
  const itemWidth = container.clientWidth / slidesToShow + 2;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener("click", () => {
    const itemsLeft =
      itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener("click", () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    if (position === 0) {
      btnPrev.style.opacity = "0.5";
    } else {
      btnPrev.style.opacity = "1";
    }

    if (position <= -(itemsCount - slidesToShow) * itemWidth) {
      btnNext.style.opacity = "0.5";
    } else {
      btnNext.style.opacity = "1";
    }
  };
  checkBtns();
};
window.addEventListener("resize", carousel);
export default carousel;
