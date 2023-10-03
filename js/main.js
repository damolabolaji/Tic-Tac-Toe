const gameboard = document.querySelector("#gameboard");
const gameInfo = document.querySelector("#info");

const squares = ["", "", "", "", "", "", "", "", ""];

function fillBoard() {
  squares.forEach((_cell, index) => {
    const squareCells = document.createElement("div");
    squareCells.classList.add("square");
    squareCells.id = index;
    squareCells.addEventListener("click", addGo);
    gameboard.append(squareCells);
  });
}
fillBoard();
let go = "circle";
gameInfo.textContent = "Circle goes first";

function addGo(e) {
  const addShape = document.createElement("div");
  addShape.classList.add(go);
  e.target.append(addShape);
  go = go === "circle" ? "cross" : "circle";
  e.target.removeEventListener("click", addGo);
  gameInfo.textContent = `it is ${go}'s turn`;
  checkScore();
}

function checkScore() {
  const allSquares = document.querySelectorAll(".square");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCombos.forEach((combo) => {
    let circleWins = combo.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("circle")
    );

    if (circleWins) {
      gameInfo.textContent = "Circle WinsS";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode("true"))
      );
    }
    return;
  });
  winningCombos.forEach((combo) => {
    let crossWins = combo.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("cross")
    );

    if (crossWins) {
      gameInfo.textContent = "Cross WinsS";
      allSquares.forEach((square) =>
        square.replaceWith(square.cloneNode("true"))
      );
    }
    return;
  });
}
// const gameboard = document.querySelector("#gameboard");
// const infoDisplay = document.querySelector("#info");

// const startCells = ["", "", "", "", "", "", "", "", ""];

// let go = "circle";
// infoDisplay.textContent = "Circle goes first";

// function createBoard() {
//   startCells.forEach((_cell, index) => {
//     const cellElement = document.createElement("div");
//     cellElement.classList.add("square");
//     cellElement.id = index;
//     cellElement.addEventListener("click", addGo);
//     gameboard.append(cellElement);
//   });
// }

// createBoard();

// function addGo(e) {
//   //   console.log(e.target);
//   const goDisplay = document.createElement("div");
//   goDisplay.classList.add(go);
//   e.target.append(goDisplay); //append the class of circle to whatever was clicked
//   go = go === "circle" ? "cross" : "circle";
//   infoDisplay.textContent = `it is ${go}'s turn`;
//   e.target.removeEventListener("click", addGo);
//   checkScore();
// }
// function checkScore() {
//   //grab the squares as they are in the document
//   const allSquares = document.querySelectorAll(".square");
//   //define winning combos
//   const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   winningCombos.forEach((array) => {
//     let circleWins = array.every(
//       (cell) => allSquares[cell].firstChild?.classList.contains("circle")
//       //to check if the square at the index position of 'cell' contains a circle
//     );
//     if (circleWins) {
//       infoDisplay.textContent = "Circle Wins";
//       allSquares.forEach((square) =>
//         square.replaceWith(square.cloneNode(true))
//       );
//       return;
//     }
//   });
//   winningCombos.forEach((array) => {
//     let crossWins = array.every(
//       (cell) => allSquares[cell].firstChild?.classList.contains("cross")
//       //to check is the square at the index position of 'cell' contains a circle
//     );
//     if (crossWins) {
//       infoDisplay.textContent = "Cross Wins";
//       allSquares.forEach((square) =>
//         square.replaceWith(square.cloneNode(true))
//       );
//       return;
//     }
//   });
// }
