document.querySelector("button.btn-outline-light").addEventListener("mouseover", function () {
  document.querySelector(".fa-arrow-right").classList.add("i-hover");
});

document.querySelector("button.btn-outline-light").addEventListener("mouseout", function () {
  document.querySelector(".fa-arrow-right").classList.remove("i-hover");
});

window.onscroll = function () {
  if (window.scrollY <= 800) {
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[0].classList.add("active");
  }
  else if (window.scrollY > 800 && window.scrollY < 2280) {
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[1].classList.add("active");
  }
  else if (window.scrollY >= 2280 && window.scrollY < 4860) {
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[2].classList.add("active");
  }
  else if (window.scrollY >= 4860) {
    document.querySelector(".active").classList.remove("active");
    document.querySelectorAll(".nav-link")[3].classList.add("active");
  }
}
