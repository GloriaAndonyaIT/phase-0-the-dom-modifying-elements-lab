
const main = document.getElementById("main");
if (main) {
  main.remove();
}

const newHeader = document.createElement("h1");


newHeader.id = "victory";

newHeader.textContent = "Gloria Andonya is the champion";

document.body.appendChild(newHeader);
