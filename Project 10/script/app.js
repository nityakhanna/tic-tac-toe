const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    }
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorMessageElement = document.getElementById("config-errors");
const startNewGameBtn = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
const gameBoard = document.getElementById("game-board");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editBtn1 = document.getElementById("edit-btn1");
const editBtn2 = document.getElementById("edit-btn2");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

editBtn1.addEventListener("click", openPlayerConfig);
editBtn2.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayer);

startNewGameBtn.addEventListener("click", startNewGame);

gameBoard.addEventListener("click", selectGameField);