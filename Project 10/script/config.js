function openPlayerConfig(event) {
    editedPlayer= +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorMessageElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayer(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playerName").trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error");
        errorMessageElement.textContent = "Please enter valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-"+editedPlayer + "-data")
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
   
    players[editedPlayer-1].name = enteredPlayerName;
    
    closePlayerConfig();

}