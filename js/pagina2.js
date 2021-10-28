// Arrays:
let userName = [];
let userImage = [
  { img: "/assets/images/pagina2main/munster.jpg" },
  { img: "/assets/images/pagina2main/pngalien.png" },
  { img: "/assets/images/pagina2main/stranger.png" },
];

// funcion para enviar "nombres/datos" pusheandolos al array
function addplayer(newPlayer) {
  userName.push(newPlayer);
}
// funcion para obtener valores desde el input atraves del ID del input.
function getValue() {
  let inputId = document.getElementById("coderName");
  addplayer(inputId.value);
  inputId.value = "";
  printInput();
}

// función que imprima el valor del input en DOM (html)

function printInput() {
  let cardPlayer = document.getElementById("cardPlayer");
  let nombres = "";
  userName.forEach((item) => {
    nombres += `<div>${item} <img src="/assets/images/pagina2main/munster.jpg" alt=""></div>`;
  });
  cardPlayer.innerHTML = nombres;
}
function imprimirImagen() {
  let cardPlayer = document.getElementById("cardPlayer")
  let fotos = 
  userImage.for (let i = 0; i < userImage.length; i++) {
    cardPlayer.innerHTML = fotos
  }
}
imprimirImagen(0)