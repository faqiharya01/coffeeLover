// toggle class active testimony
const rightcontent = document.querySelector(".content-right");
document.querySelector("#buttonpencet").onclick = () => {
  rightcontent.classList.toggle("active");
};

//toggle class active hamburger menu
const navbarmenu = document.querySelector(".navbar-menu");
document.querySelector("#hamburger").onclick = () => {
  navbarmenu.classList.toggle("active");
};

//click everywhere to remove toggle navbar
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarmenu.contains(e.target)) {
    navbarmenu.classList.remove("active");
  }
});
