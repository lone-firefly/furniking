const btnCollections = document.querySelector(".nav__sort");
const menuCollections = document.querySelector(".prev__table");
const containerSlider = document.querySelector(".prev__container");

function popupMenuCollections(data) {
  menuCollections.classList.toggle("prev__table_disabled");
  containerSlider.classList.toggle("prev__container_justify");
  btnCollections.toggleAttribute("disabled", data > 10 ? true : false);
}

btnCollections.addEventListener("click", function () {
  popupMenuCollections(9);
});
