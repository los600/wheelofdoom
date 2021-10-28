// Arrays:

let userImage = ["img.1", "img.2", "img.3"];

// funcion para enviar "nombres/datos" pusheandolos al array
function addplayer(newPlayer) {
  userName.push(newPlayer);
}
// funcion para obtener valores desde el input atraves del ID del input.
function getValue() {
  let inputId = document.getElementById("coderName");
  addplayer(inputId.value);
  console.log(userName);
  printInput();
}

// función que imprima el valor del input en DOM (html)

function printInput() {
  let cardPlayer = document.getElementById("cardPlayer");
  let nombres = "";
  userName.forEach((item) => {
    nombres += `<div>${item}</div>`;
  });
  cardPlayer.innerHTML = nombres;
}
/* printInput(); */

/* function loadName() {
  userName.forEach((coder) => printInput(coder));
} */

/* loadName(); */
