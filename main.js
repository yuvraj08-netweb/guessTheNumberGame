let randomNumber;
let attemptCounter = 0;

document.querySelector("#userNumber").addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        document.querySelector("#submitButton").click();
    }
})

function generateRandom(){
    const minValue = 1;
    const maxValue = 100;
    let randomNum  = Math.floor(Math.random() * (maxValue-minValue) +1);
    return randomNum;
}

function handleSubmit(){
    let userNumber = document.querySelector("#userNumber").value;
    if(userNumber > 100 || userNumber < 1 || userNumber === ""){
        alert("Enter Within Specified Range!");
    }
    else{
        if(userNumber>randomNumber){
            document.querySelector("#alert").innerHTML = "Too High!";
            document.querySelector("#alert").style.color = "red";
            attemptCounter++;
        }
        else if(userNumber<randomNumber){
            document.querySelector("#alert").innerHTML = "Too low!";
            document.querySelector("#alert").style.color = "red";
            attemptCounter++;
        }
        else{
            document.querySelector("#alert").innerHTML = "Numbers Matched!";
            document.querySelector("#alert").style.color = "green";
            attemptCounter++;
            document.querySelector(".gameContainer").style.display = "none";
            document.querySelector("#heroText").innerHTML = `You Won in ${attemptCounter} Steps !`;
            document.querySelector("#heroText").style.display = "block";
            setTimeout(()=>{
                handleRestart()
            },3000);

        }
        document.querySelector(".attemptsCounter").innerHTML = `Attempts Made : ${attemptCounter}`;
        console.log(attemptCounter);
    }
    
}


function startGame(){
    randomNumber = generateRandom();
    console.log(randomNumber);
    document.querySelector(".gameContainer").style.display = "flex";
    document.querySelector("#startGame").style.display = "none";
    document.querySelector("#heroText").style.display = "none";
}
function handleRestart(){
    document.querySelector(".gameContainer").style.display = "none";
    document.querySelector("#startGame").style.display = "block";
    document.querySelector("#heroText").style.display = "none";
    document.querySelector(".attemptsCounter").innerHTML = '';
    document.querySelector("#alert").innerHTML = "";
    document.querySelector("#userNumber").value = "";
    attemptCounter = 0;
}