// Arrays:
let userName = [];
let userImage = [ 
  '<img src="./assets/images/pagina2main/avatar.png">',
  '<img src="./assets/images/pagina2main/images2.png">',
  '<img src="./assets/images/pagina2main/pngalien.png">',
  '<img src="./assets/images/pagina2main/stranger.png">',
];
// let randomImage = userImage[Math.floor(Math.random()*userImage.length)
//                           [Object.keys(userImage)[Math.floor(Math.random()*Object.keys(userImage).length)]]];
// // console.log(randomItem);
// let randomImage = userImage[Object.keys(userImage)[Math.floor(Math.random()*Object.keys(userImage).length)]];

///random array
// let randomImage = userImage[Math.floor(Math.random()*userImage.length)];


// console.log(randomImage);
// console.log(userImage[Object.keys(userImage)[Math.floor(Math.random()*Object.keys(userImage).length)]]);


// // // Random Key
// console.log(Object.keys(animals)[Math.floor(Math.random()*Object.keys(animals).length)]);

// // Random Value
// console.log(animals[Object.keys(animals)[Math.floor(Math.random()*Object.keys(animals).length)]]);

////////////////////////-------------------------////////////////////////////////////////////////////////////////

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
  // let randomImage = userImage[Math.floor(Math.random()*userImage.length)];
  
  userName.forEach((item, randomMonster) => {
    let randomImage = userImage[Math.floor(Math.random()*userImage.length)];
    randomMonster = randomImage;
    nombres += `<div class="placaplayer">
    <img src="./assets/images/pagina2main/placaplayer.png">
    <div class="placaInfo">${item}>${randomMonster}</div></div>`; 
  });
  cardPlayer.innerHTML = nombres ;
  console.log(cardPlayer.innerHTML);
 
}
function randonImages(){
  
}
 printInput(); 
 /* function loadName() {
  userName.forEach((coder) => printInput(coder));
} */

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
