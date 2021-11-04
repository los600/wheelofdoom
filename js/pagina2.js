// Arrays:
let userName = [];
let userImage = ["img.1", "img.2", "img.3"];

// funcion para enviar "nombres/datos" pusheandolos al array
function addplayer(newPlayer) {
  userName.push(newPlayer);
}

// funcion para obtener valores desde el input atraves del ID del input.
function getValue() {
  let inputId = document.getElementById("coderName");
  addplayer(inputId.value);
  inputId.value="";
  
  printInput();
}

// función que imprima el valor del input en DOM (html)

function printInput() {
  let cardPlayer = document.getElementById("cardPlayer");
  let nombres = "";
  userName.forEach((item) => {
    nombres += `<div class="placaplayer">
    <img src="/assets/images/pagina2main/placaplayer.png">
    <div class="placaInfo">${item} <img src="./assets/images/pagina2main/stranger.png"></div> &nbsp;&nbsp;&nbsp;&nbsp;`;
  });
  cardPlayer.innerHTML = nombres;
}
printInput();

// sacar selección jugador muerto

function randomKill() {
  let selectdeath = Math.round(Math.random() * userName.length);
  console.log("a ver que hay: " + userName);
  console.log(userName[selectdeath]);

//imprime seleccionado molón
  let DOMkill = document.getElementById("DOMkill");
  DOMkill.innerHTML = `<p> 🔥 
  Your time to die has come: &nbsp;&nbsp; <p>${userName[selectdeath]}</p> </p>`

}





function changeColor() {
  let DOMred = document.getElementById("DOMred");
  DOMred.classList.toggle("selectKill");
}
