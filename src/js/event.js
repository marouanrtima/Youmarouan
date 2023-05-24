const dropdownLanguage = document.querySelector(".dropdown-wrapper");

// for dropdown -language
dropdownLanguage.addEventListener("click", (eo) => {
eo.target.classList.toggle("show-dropdown");
});

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

// for scroll bar
const headerContainer = document.querySelector(".header-container");
window.addEventListener("scroll", (eo) => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop === 0) {
    headerContainer.classList.remove("scroll");
    // console.log("close");
  } else if (scrollTop >= 0) {
    headerContainer.classList.add("scroll");
    // console.log("done");
  }
});

// const randomShow = document.getElementById("random-questions");

const innerQuestion = document.querySelectorAll(".inner-question");
Array.from(innerQuestion);
innerQuestion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show-content");
  });
});
