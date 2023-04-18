let winner
let choice_list=["rock", "paper", "scissors"];
let bestOf5 = 0
const results=document.getElementById("results")


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
    if (winner!="tie"){
        results.innerHTML="Player has chosen <span style='color:green;'>"+playerSelection + "</span>, Computer has chosen <span style='color:red;'>" +
        computerSelection+ "</span>!<br>The <strong>" + winner + "</strong> has won!"
    }
    else{
        results.innerHTML="Player has chosen <span style='color:green;'>"+playerSelection + "</span>, Computer has chosen <span style='color:red;'>" +
        computerSelection+ "</span>!<br>It is a <strong>Tie</strong>!"
    }
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


