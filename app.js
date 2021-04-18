//SELECTORS
let InputField = document.getElementById("guess");
let guessButton = document.getElementById("submit");
//EVENT LISTENERS
guessButton.addEventListener("click", guessing);


let randNum = Math.floor(Math.random() * 101);
///FUNCTION
function guessing()
{
    var userNum = InputField.value;
    
    if(InputField.value == ""){
        alert("invalid value");
    }
    else if(userNum > randNum + 20){
        alert(`${userNum} is too high.`);
        InputField.value = "";
    }
    else if(userNum > randNum){
        alert(`${userNum} is high.`);
         InputField.value = "";
    }
    else if(randNum-20 > userNum ){
        alert(`${userNum} is too low.`);
        InputField.value = "";
    }
    else if(randNum > userNum){
        alert(`${userNum} is low.`);
        InputField.value = "";
    }
    else if(userNum == randNum){
        alert(` YOU ARE THE WINNER NUMBER WAS ${userNum} !!!`)
    }

}
