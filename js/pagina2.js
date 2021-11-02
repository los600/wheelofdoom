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
  imgs.for (let i = 0; i < userImage.length; i++) {
    cardPlayer.innerHTML = fotos
  }
}
/* imprimirImagen(0)
// let coderList =[
//   {imagen:"./assets/images/pagina2main/pngalien.png"},
//   {imagen:"./assets/images/pagina2main/images2.png"},
//   {imagen:"./assets/images/pagina2main/stranger2.png"},
    nombres += `<div class="placaplayer">
    <img src="./assets/images/pagina2main/placaplayer.png">
    <div class="placaInfo">${item} <img src="./assets/images/pagina2main/stranger.png" alt=""></div>`; 
  });
  cardPlayer.innerHTML = nombres;
}
 printInput(); 
 
 function loadName() {
  userName.forEach((coder) => printInput(coder));
} 
 ]
