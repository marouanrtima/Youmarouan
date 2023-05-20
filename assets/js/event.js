const toggleMenu = document.getElementsByClassName("toggle-menu")[0];

const wrapperContainer = document.getElementById("wrapper_side_bar");
const xMark = document.getElementById("xmark");

toggleMenu.addEventListener("click", (eo) => {
  eo.preventDefault();
  wrapperContainer.classList.toggle("side-bar");
});

xMark.addEventListener("click", (eo) => {
  eo.preventDefault();
  wrapperContainer.classList.remove("side-bar");
});

const randomShow = document.getElementById("random-questions");

const innerQuestion = document.querySelectorAll(".inner-question");

const contentShow = document.querySelectorAll(".content");

Array.from(innerQuestion);

Array.from(contentShow);
console.log(innerQuestion);

innerQuestion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show-content");
  });
});

const headerContainer = document.querySelector(".header-container");

document.addEventListener("scroll", (eo) => {});

window.addEventListener("scroll", (eo) => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop === 0) {
    headerContainer.classList.remove("scroll")
  } else if (scrollTop >= 0) {
    headerContainer.classList.add("scroll")
  }
});
