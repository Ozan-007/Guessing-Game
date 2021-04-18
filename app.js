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

    if(userNum > randNum + 20){
        alert(`${userNum} is too high.`);
    }
    else if(userNum > randNum){
        alert(`${userNum} is high.`);
    }
    else if(randNum-20 > userNum ){
        alert(`${userNum} is too low.`);
    }
    else if(randNum > userNum){
        alert(`${userNum} is low.`);
    }
    else if(userNum == randNum){
        alert(` YOU ARE THE WINNER NUMBER WAS ${userNum} !!!`)
    }
    else{
        alert("invalid value");
    }

}
