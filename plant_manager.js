let plant = {

}

function showAddPlantPopup() { 
    let popupWindow = document.getElementById("add-plant-popup");
    let blur = document.getElementById("blur-bg");
    popupWindow.style.display = "block";
    blur.style.display = "block";
}

function closePopup() {
    let popupWindow = document.getElementById("add-plant-popup");
    let blur = document.getElementById("blur-bg");
    popupWindow.style.display = "none";
    blur.style.display = "none";
}

function init() {
    let addPlantButton = document.getElementById("add-plant-button");
    let closePopupButton = document.getElementById("close-add-plant-popup");
    addPlantButton.onclick = showAddPlantPopup;
    closePopupButton.onclick = closePopup;
}

window.onload = init;