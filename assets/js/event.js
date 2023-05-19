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

//  first solution her perfermanc not good

// randomShow.addEventListener("click", (eo) => {
//   if (eo.target.classList == "inner-question") {
//     eo.target
//       .getElementsByClassName("content")[0]
//       .classList.toggle("show-content");
//   }
// });

// best solution today

innerQuestion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show-content");
  });
});
