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
})
