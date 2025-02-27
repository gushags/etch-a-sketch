// Create a 16 x 16 grid of divs using flexbox

// get grid size from user
// return side of square (20 x 20) => 20
// 20 = 960 / boxsize
// boxsize = 960 / num

function createEtchBoxes(num) {
  let boxSize = 960 / num;
  let count = 960 / boxSize;
  for (let i = 0; i < count * count; i++) {
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      "width:" + boxSize + "px; height:" + boxSize + "px"
    );
    div.classList.add("lightBlue");
    div.addEventListener("mouseover", () => {
      div.classList.remove("lightBlue");
    });
    const container = document.querySelector(".container");
    container.appendChild(div);
  }
}

function deleteEtchBoxes() {
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function getGridSize() {
  alert(`How big do you want each side to be? 
        The larger the number, the thinner the line you can draw. 
        Choose from 2 to 100.`);
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert(`How big do you want each side to be? 
        The larger the number, the thinner the line you can draw. 
        Choose from 2 to 100.`);
});

createEtchBoxes(16);

// Figure out how to translate 16 x 16 into 960
// Generate a prompt (with a button) that gets a number up to 100
// to create a grid
// Use the new number to remove the old container and create a new one
// with the user info.
