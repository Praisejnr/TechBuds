const navBar = document.getElementById("nav-bar");
const hamburger = document.querySelector(".hamburger");
const frontImg = document.getElementById("front-img");
const front = document.querySelector(".front");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

const images = ["/images/img5.png", "/images/img2.png", "/images/img3.png"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  frontImg.src = images[index];
}, 5000);

