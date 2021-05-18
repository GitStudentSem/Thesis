const slider = () => {
  // Родительский блок слайдера
  const slider = document.querySelector(".top-slider");
  // Получаю отдельные слайды
  const slide = document.querySelectorAll(".item");
  // Счетчик слайдов. Первый слайд нулевой
  let currentSlide = 0;
  //Функция для автоматического перелистывания слайдов
  const autoPlaySlide = () => {
    // Удаляю класс активного слайда
    slide[currentSlide].classList.remove("item-active");
    // Увеличиваю счетчик слайдов
    currentSlide++;
    // Если счетчик больше количества слайдов, то возвращаемся к 1 слайду
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    // Добавляю класс активного слайда
    slide[currentSlide].classList.add("item-active");
  };
  // Запуск слайдера
  const startSlide = () => {
    setInterval(autoPlaySlide, 3000);
  };
  startSlide();
};

export default slider;
