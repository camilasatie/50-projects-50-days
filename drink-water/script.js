const smallCups = document.querySelectorAll(".cup-small");
const lister = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const reimaned = document.getElementById("reimaned");

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}
