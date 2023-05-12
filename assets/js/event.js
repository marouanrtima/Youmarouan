const toggleMenu = document.getElementsByClassName("toggle-menu")[0];

const wrapperContainer = document.getElementById("wrapper_side_bar");

toggleMenu.addEventListener("click", (eo) => {
    eo.preventDefault();
    wrapperContainer.classList.toggle("side-bar");
});
