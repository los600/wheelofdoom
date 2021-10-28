let userName = [""];
let userImage = ["img.1", "img.2", "img.3"];

function addplayer(newPlayer) {
  userName.push(newPlayer);
}

function getValue() {
 let inputId = document.getElementById("coderName");
 addplayer(inputId.value);
 console.log(userName);

}


