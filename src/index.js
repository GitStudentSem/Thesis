// Здесь хранятся вызовы и импорты функций из modules
"use strict";
//Модальное окно в шапке
import headerOpenModal from "./modules/headerOpenModal";
headerOpenModal();
// Модальное окно не нашли услугу
import notFoundOpenModal from "./modules/notFoundOpenModal";
notFoundOpenModal();
// Скролл к элементам меню
import menuScroll from "./modules/menuScroll";
menuScroll();
// Слайдер на главном экране
import slider from "./modules/slider";
slider();
// Отслеживаю скролл
import goTop from "./modules/goTop";
goTop();
// Модальное окно с карточками
import servisesOpenModal from "./modules/servisesOpenModal";
servisesOpenModal();
// Аккордеон
import accordeon from "./modules/accordeon";
accordeon();
