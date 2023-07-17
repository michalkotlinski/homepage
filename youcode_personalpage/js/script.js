let bodyElement = document.querySelector(".js-body");
let button = document.querySelector(".js-button");
let picture = document.querySelector(".js-picture");
let themeButtonElement = document.querySelector(".js-themeButton");
let headerElement = document.querySelectorAll(".js-header");

button.addEventListener("click", () => {
  picture.hidden = !picture.hidden;
});

themeButtonElement.addEventListener("click", () => {
  bodyElement.classList.toggle("body--grayTheme");
  bodyElement.classList.toggle("body--whiteTheme");

  themeButtonElement.innerText = bodyElement.classList.contains(
    "body--grayTheme"
  )
    ? "Mniej szarości"
    : "Więcej szarości";

  headerElement.forEach((header) => header.classList.toggle("grayTheme"));
});
