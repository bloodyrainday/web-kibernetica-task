const mainButton = document.querySelector(".btn");
const popup = document.querySelector(".overlay");
const closePopupBtn = document.querySelector(".close-btn span");
const overlay = document.querySelector(".overlay");
const signInBtn = document.querySelector(".submit-btn");

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

signInBtn.addEventListener("click", () => {
  console.log(
    document.querySelectorAll("form input").forEach((item) => {
      item.value = "";
    })
  );
});
