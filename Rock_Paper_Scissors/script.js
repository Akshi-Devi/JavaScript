let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const randomIdx=Math.floor(Math.random()*3);
return options[randomIdx];
}
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="game was draw.";
    msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    // console.log("You win!");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You won! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    console.log("You lose!");
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}
const playGame=(userChoice)=>{
    console.log("user choice=", userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=", compChoice)
    if(userChoice==compChoice){
        drawGame();
    }else{
        userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="scissors"){
            userWin=compChoice==="rock"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});