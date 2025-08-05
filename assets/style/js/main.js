const navBar = document.getElementById("nav-bar");
const hamburger = document.querySelector(".hamburger");
const frontImg = document.getElementById("front-img");
const front = document.querySelector(".front");
const modeSwitch = document.querySelector(".switch");
const switchButton = document.getElementById("modeSwitch");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

const images = [
  "assets/images/img5.png",
  "assets/images/img2.png",
  "assets/images/img3.png",
];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  frontImg.src = images[index];
}, 3000);

let isDarkMode = false;
modeSwitch.addEventListener("click", () => {
  if (!isDarkMode) {
    modeSwitch.innerHTML = `Light mode <i class="fa-solid fa-toggle-off"></i
          >`;
    document.body.style.backgroundColor = "#111";
    document.querySelectorAll("p").forEach((tags) => {
      tags.style.color = "#111";
    });
  } else {
    modeSwitch.innerHTML = `Dark mode <i class="fa-solid fa-toggle-on"></i
          >`;
    document.body.style.backgroundColor = "#fff";
    document.querySelectorAll("p").forEach((tags) => {
      tags.style.color = "#fff";
    });
  }
  isDarkMode = !isDarkMode;
  localStorage.setItem("darkMode", isDarkMode);
});
