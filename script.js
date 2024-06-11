const mainButton = document.querySelector(".btn");
const popup = document.querySelector(".overlay");
const closePopupBtn = document.querySelector(".close-btn span");

mainButton.addEventListener("click", () => {
  popup.classList.toggle("active");
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
});
