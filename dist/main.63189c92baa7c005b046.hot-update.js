/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateThesis"]("main",{

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar carousel = function carousel() {\n  var widthWind = document.querySelector(\"body\").offsetWidth;\n  var slidesToShow;\n\n  if (widthWind <= 766) {\n    slidesToShow = 1;\n  } else if (widthWind <= 1240) {\n    slidesToShow = 2;\n  } else {\n    slidesToShow = 3;\n  } //////////////\n\n\n  var position = 0;\n  var slidesToScroll = 1;\n  var container = document.querySelector(\".slider-container\");\n  var track = document.querySelector(\".slider-track\");\n  var btnPrev = document.querySelector(\".arrow-left\");\n  var btnNext = document.querySelector(\".arrow-right\");\n  var items = document.querySelectorAll(\".slider-item\");\n  var itemsCount = items.length; // +2 что бы убрать торчащие по краям полоски соседних слайдов\n\n  var itemWidth = container.clientWidth / slidesToShow + 2;\n  var movePosition = slidesToScroll * itemWidth;\n  items.forEach(function (item) {\n    item.style.minWidth = \"\".concat(itemWidth, \"px\");\n  });\n  btnNext.addEventListener(\"click\", function () {\n    var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;\n    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\n    setPosition();\n    checkBtns();\n  });\n  btnPrev.addEventListener(\"click\", function () {\n    var itemsLeft = Math.abs(position) / itemWidth;\n    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;\n    setPosition();\n    checkBtns();\n  });\n\n  var setPosition = function setPosition() {\n    track.style.transform = \"translateX(\".concat(position, \"px)\");\n  };\n\n  var checkBtns = function checkBtns() {\n    if (position === 0) {\n      btnPrev.style.opacity = \"0.5\";\n    } else {\n      btnPrev.style.opacity = \"1\";\n    }\n\n    if (position <= -(itemsCount - slidesToShow) * itemWidth) {\n      btnNext.style.opacity = \"0.5\";\n    } else {\n      btnNext.style.opacity = \"1\";\n    }\n  };\n\n  checkBtns();\n};\n\nwindow.addEventListener(\"resize\", carousel);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack://Thesis/./src/modules/carousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("735052b2be944a3e5c10")
/******/ })();
/******/ 
/******/ }
);