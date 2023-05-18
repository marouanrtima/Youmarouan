const toggleMenu = document.getElementsByClassName("toggle-menu")[0];

const wrapperContainer = document.getElementById("wrapper_side_bar");
const xmark = document.getElementById("xmark");

toggleMenu.addEventListener("click", (eo) => {
  eo.preventDefault();
  wrapperContainer.classList.toggle("side-bar");
});

xmark.addEventListener("click", (eo) => {
  eo.preventDefault();
  wrapperContainer.classList.remove("side-bar");
});

const randomQuestions = document.getElementById("random-questions");
console.log("xoxo");

const innerQuestion = document.querySelector(".inner-question");

randomQuestions.style.border = "5px solid red";


randomQuestions.addEventListener("click" , (eo) => {
  if(eo.target.classList == "inner-question"){
    eo.target.getElementsByClassName("content")[0].classList.toggle("show-content");
  }

})
