const navBar = document.getElementById("nav-bar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
