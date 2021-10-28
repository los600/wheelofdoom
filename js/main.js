
let codersList =[];

function addCoderList(name){
codersList.push(name);

}
addCoderList("marta");
console.log(codersList)

function getValue(){
    let inputId = document.getElementById("cartas");
    addCoderList(inputId.value);
    console.log(codersList)
}
