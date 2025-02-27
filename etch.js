// Create a 16 x 16 grid of divs using flexbox.
// Mouseover event "draws" on screen by toggling off
// class color to reveal color of container below.

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
  console.log("Should be deleting now.");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function getGridSize() {
  console.log("I'm here");
  let num = prompt(`How big do you want each side to be? 
        The larger the number, the thinner the line you can draw. 
        Choose from 2 to 100.`);
  if (num && 2 <= Number(num) <= 100) {
    deleteEtchBoxes();
    createEtchBoxes(Number(num));
  }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", getGridSize);

// Initial grid
createEtchBoxes(16);
