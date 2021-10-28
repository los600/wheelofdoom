

// Arrays:
let userName = [""];
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
}
/// print 


//// funcion que recocrra el array


