document.querySelector(".container").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.containerGrid', { delay: 350 });
ScrollReveal().reveal('.footer', { delay: 350 });