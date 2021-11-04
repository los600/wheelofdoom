// Arrays:
let userName = [];


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
