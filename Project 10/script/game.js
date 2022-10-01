function resetGame() {
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 'You Won <span id="winner-name">Player Name</span>!';
    gameOverElement.style.display = "none";

    let gameBoardIndex = 0; 

    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
          gameData[j][i] = 0;
          gameBoard.children[gameBoardIndex].textContent = "";
          gameBoard.children[gameBoardIndex].classList.remove("disabled");
          gameBoardIndex++;
        }
      }

}

function startNewGame() {
    resetGame();
  if (players[0].name === "" || players[0].name === "") {
    alert("Please set valid names");
    return;
  }

  gameAreaElement.style.display = "block";
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }

  const selectedField = event.target;
  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("Please Select Empty Field");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedCol] = activePlayer + 1;
  
  const winnerId = checkForGameOver();

  if (winnerId !== 0){
    endGame(winnerId);
  }



  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9){
    return -1;
  }

  return 0;
}

function endGame(winnerId){
    gameIsOver = true;
    gameOverElement.style.display = "block";

    if (winnerId>0){
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId-1].name;
    } else {
        gameOverElement.firstElementChild.textContent = "It's a draw!";
    }
}