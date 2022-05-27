const hyperlink = document.querySelectorAll(".hyperlink a");

hyperlink.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});
