const ratingContainer = document.querySelector(".how-did-we-do");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const userRating = document.getElementById("user-rating");
const ratingInput = document.querySelectorAll(".number");

submitButton.addEventListener("click", (e) => {
  thanksContainer.classList.toggle("hidden");
  ratingContainer.classList.toggle("hidden");
});

ratingInput.forEach((rating) => {
  rating.addEventListener("click", () => {
    userRating.innerHTML = rating.innerHTML;
  });
});
