"use strict";
const validateForm = () => {
  const formName = document.getElementById("form-name");
  const formPhone = document.getElementById("form-phone");
  const formSubmit = document.getElementById("form-submit");

  formName.addEventListener("input", () => {
    // [^а-яё\-\s] Обрезает все символы кроме русских букв тире и пробел
    formName.value = formName.value.replace(/[^а-яё\s]/gi, "");
  });
};
export default validateForm;
