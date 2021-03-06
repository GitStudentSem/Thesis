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
// Мобильное меню
import mobileMenu from "./modules/mobileMenu";
mobileMenu();
// Валидация данных в форме
import validateForm from "./modules/validateForm";
validateForm();
// Валидация данных в форме
import carousel from "./modules/carousel";
carousel();
// Отправка данных на сервер
import sendForm from "./modules/sendForm";
sendForm();
