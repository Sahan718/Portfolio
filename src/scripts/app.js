"use strict";


  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".navbar-toggle");
    const menu = document.querySelector(".navbar-list");
    const links = document.querySelectorAll(".navbar-links a");

    toggle.addEventListener("click", function () {
      toggle.classList.toggle("active");
      menu.classList.toggle("active");
    });


    links.forEach(link => {
      link.addEventListener("click", function () {
        toggle.classList.remove("active");
        menu.classList.remove("active");
      });
    });
  });








            
  