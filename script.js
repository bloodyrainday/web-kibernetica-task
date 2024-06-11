const mainButton = document.querySelector(".btn");
const popup = document.querySelector(".overlay");
const closePopupBtn = document.querySelector(".close-btn span");
const overlay = document.querySelector(".overlay");

mainButton.addEventListener("click", () => {
  popup.classList.toggle("active");
});

closePopupBtn.addEventListener("click", (e) => {
  console.log(e.target);
  popup.classList.toggle("active");
});

overlay.addEventListener("click", (e) => {
  console.log(e.target.classList.remove("active"));
});
