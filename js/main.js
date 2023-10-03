




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
