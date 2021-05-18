
const sendForm = () => {
  const errorMessage = "Что-то пошло не так...";
  const loadMessage = "Загрузка...";
  const successMessage = "Спасибо! Мы с вами свяжемся!";
  const statusMessage = document.querySelector(".form-status");
  const form = document.querySelector(".callback-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusMessage.textContent = loadMessage;

    const clearMessage = () => {
      statusMessage.textContent = "";
      // Закрытие модального окна
      const modalBody = document.getElementById("modal-body");
      const modalOverlay = document.querySelector(".modal-overlay");
      modalBody.style.display = "none";
      modalOverlay.style.display = "none";
      window.onscroll = () => {};
    };

    const formData = new FormData(form);
    let body = {};

    for (let val of formData.entries()) {
      body[val[0]] = val[1];
    }

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("status network not 200");
        }
        statusMessage.textContent = successMessage;
        form.reset();
        setTimeout(clearMessage, 3000);
      })

      .catch((error) => {
        statusMessage.textContent = errorMessage;
        form.reset();
        setTimeout(clearMessage, 3000);
      });
  });
  const postData = (body) => {
    return fetch("./server.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };
};
export default sendForm;
