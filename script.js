const hyperlink = document.querySelector(".hyperlink a[href^='#']");

hyperlink.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});
