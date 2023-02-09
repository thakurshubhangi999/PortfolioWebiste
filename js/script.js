document.addEventListener("DOMContentLoaded", function() {

  const menu = document.getElementById("menu");
  const header = document.getElementsByTagName("header")[0];
  const top = document.querySelector(".top");

  menu.addEventListener("click", function() {
    this.classList.toggle("fa-times");
    header.classList.toggle("toggle");
  });

  window.addEventListener("scroll", function() {
    menu.classList.remove("fa-times");
    header.classList.remove("toggle");

    if (window.scrollY > 0) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  });
  window.addEventListener("load", function() {
    menu.classList.remove("fa-times");
    header.classList.remove("toggle");

    if (window.scrollY > 0) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  });
});
