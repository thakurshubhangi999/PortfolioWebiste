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

  // const links = document.querySelectorAll('a[href*="#"]');
  // for (const link of links) {
  //   link.addEventListener("click", function(event) {
  //     event.preventDefault();
  //     const target = document.querySelector(this.getAttribute("href"));
  //     window.scrollTo({
  //       top: target.offsetTop,
  //       behavior: "smooth"
  //     });
  //   });
  // }
});
