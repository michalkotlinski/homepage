{
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

const init = () => {
  const bodyElement = document.querySelector(".js-body");
  const button = document.querySelector(".js-button");
  const picture = document.querySelector(".js-picture");
  const themeButtonElement = document.querySelector(".js-themeButton");
  const headerElement = document.querySelectorAll(".js-header");
};

init();
}

