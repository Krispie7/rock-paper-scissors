let winner
let choice_list=["rock", "paper", "scissors"];
let bestOf5 = 0
function getComputerChoice(){
    let choice=choice_list[Math.floor(Math.random()*2.999999)];
    return choice;
}

function getPlayerChoice(){
    let choice
    while (true){
        choice=prompt("Rock, Paper, or Scissors?: ").toLowerCase()
        if (choice == "rock" || choice== "paper" || choice== "scisssors"){
            break 
        }
    }
    return choice
}
function playRound(playerSelection, computerSelection){
    if (playerSelection==computerSelection){
        winner="tie"
    }
    if (playerSelection ==" scissors"){
        if (computerSelection=="rock"){
            winner="computer"
        }
        else{
            winner="player"
        }
    }
    else if (playerSelection=="rock"){
        if (computerSelection=="paper"){
            winner="computer"
        }
        else{
            winner="player"
        }
    }
    else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            winner="player"
        }
        else{
            winner="computer"
        }
    }
    console.log("player: "+playerSelection + " Computer: "+
    computerSelection+" Winner: "+winner)
    return winner;
}
const rock = document.getElementById("rock");
rock.addEventListener('click', (e) =>{
    playRound("rock",getComputerChoice())
});
const paperDiv = document.getElementById("paper");
paperDiv.addEventListener("click", (e)=>{
    playRound("paper",getComputerChoice())
});
const scissorsDiv = document.getElementById("scissors");
scissorsDiv.addEventListener("click", (e)=>{
    playRound("scissors",getComputerChoice())
});


