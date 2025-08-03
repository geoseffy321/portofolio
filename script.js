let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// untuk autoscroll ketika di klik
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// var typingEffect = new Typed(".type",{
//   string : ["Muhammad Fadhil Ayudha"],
//   typeSpeed : 100,
//   backSpeed : 80,
//   backDelay : 1500
// });