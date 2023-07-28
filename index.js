const mainElement = document.querySelector("main#main");
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "Alberto is the champion"; // Replace YOUR-NAME with your actual name
