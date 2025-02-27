// Create a 16 x 16 grid of divs using flexbox
const boxSize = 60;

let count = 960 / boxSize;
function createEtchBoxes(count, boxSize) {
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

createEtchBoxes(count, 60);
