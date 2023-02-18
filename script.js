let winner
let choice_list=["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice=choice_list[Math.floor(Math.random()*3)];
    return choice;
}

function getPlayerChoice(){
    let choice
    while (true){
        choice=toLowerCase(prompt("Rock, Paper, or Scissors?: "))
        if (choice == "rock", "paper", "scisssors"){
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
    return winner;
}

