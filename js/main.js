const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
infoDisplay.textContent = "Circle goes first";

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameboard.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  //   console.log(e.target);
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.append(goDisplay); //append the class of circle to whatever was clicked
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = `${go}'s turn`;
  e.target.removeEventListener("click", addGo);
}
