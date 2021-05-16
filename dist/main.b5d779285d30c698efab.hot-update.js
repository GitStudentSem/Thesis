/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateThesis"]("main",{

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar accordeon = function accordeon() {\n  var accordeonItems = document.querySelectorAll(\".accordeon-item\");\n  accordeonItems.forEach(function (item) {\n    var title = item.children[0];\n    var content = item.children[1];\n    item.addEventListener(\"click\", function () {\n      // Запускается цикл и при клике идет проверка есть ли класс active. Если он есть то он удаляется\n      if (item.classList.contains(\"active\")) {\n        item.classList.remove(\"active\");\n        content.classList.remove(\"accordeon-content-active\");\n        title.classList.remove(\"accordeon-title-active\");\n      } else {\n        // Если класса active нет, то запускается цикл, который удаляет этот класс с другого активного элемента\n        accordeonItems.forEach(function (elem) {\n          var title = elem.children[0];\n          var content = elem.children[1];\n          elem.classList.remove(\"active\");\n          content.classList.remove(\"accordeon-content-active\");\n          title.classList.remove(\"accordeon-title-active\");\n        }); // Добавляет класс active  на новый элемент элемент\n\n        item.classList.add(\"active\");\n        content.classList.add(\"accordeon-content-active\");\n        title.classList.add(\"accordeon-title-active\");\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://Thesis/./src/modules/accordeon.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b59c239949e02b790c45")
/******/ })();
/******/ 
/******/ }
);