/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateThesis"]("main",{

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar slider = function slider() {\n  // Родительский блок слайдера\n  var slider = document.querySelector(\".top-slider\"); // Получаю отдельные слайды\n\n  var slide = document.querySelectorAll(\".item\"); // Счетчик слайдов. Первый слайд нулевой\n\n  var currentSlide = 0; //Функция для автоматического перелистывания слайдов\n\n  var autoPlaySlide = function autoPlaySlide() {\n    // Удаляю класс активного слайда\n    slide[currentSlide].classList.remove(\"item-active\"); // Увеличиваю счетчик слайдов\n\n    currentSlide++; // Если счетчик больше количества слайдов, то возвращаемся к 1 слайду\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    } // Добавляю класс активного слайда\n\n\n    slide[currentSlide].classList.add(\"item-active\");\n  }; // Запуск слайдера\n\n\n  var startSlide = function startSlide() {\n    setInterval(autoPlaySlide, 3000);\n  };\n\n  startSlide(); // Остановка слайдера\n\n  var stopSlide = function stopSlide() {};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://Thesis/./src/modules/slider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5db47f872e216184a5a6")
/******/ })();
/******/ 
/******/ }
);