const hyperlink = document.querySelectorAll(".hyperlink a");

hyperlink.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("you clicked me");
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});
