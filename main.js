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
        let result = "";
        setColor("red");
        if(userNumber>randomNumber){
            result = "Too High!";
        }
        else if(userNumber<randomNumber){
            result = "Too low!";
        }
        else{
            result = "Numbers Matched!";
            setColor("green");
            setDisplay(".gameContainer","none");
            setInnerHtml("#heroText",`You Won After ${attemptCounter} Steps !`);
            setDisplay("#heroText","block");
            setTimeout(()=>{
                handleRestart()
            },3000);

        }
        attemptCounter++;
        setInnerHtml("#alert",result);
        setInnerHtml(".attemptsCounter",`Attempts Made : ${attemptCounter}`);
        console.log(attemptCounter);
    }
    
}


function startGame(){
    randomNumber = generateRandom();
    console.log(randomNumber);
    setDisplay(".gameContainer","flex");
    setDisplay("#startGame","none");
    setDisplay("#heroText","none");
}

function handleRestart(){
    setDisplay(".gameContainer","none");
    setDisplay("#startGame","block");
    setDisplay("#heroText","none");
    setInnerHtml(".attemptsCounter",'')
    setInnerHtml("#alert",'')
    document.querySelector("#userNumber").value = "";
    attemptCounter = 0;
}

function setDisplay(element,value){
    document.querySelector(element).style.display = value;
}

function setInnerHtml(element,value){
    document.querySelector(element).innerHTML = value;
}

function setColor(value){
    document.querySelector("#alert").style.color = value;
}
