var items = ['rock', 'paper', 'scissor'];                           //init things to play with

function computerPlay(items){                                       //computer side function
    return items[Math.floor(Math.random()*items.length)];
}

const playerSelection = prompt("Input Your Selection!").toLowerCase();
//console.log(playerSelection);
const computerSelection = computerPlay(items); 
//console.log(computerSelection)
 
for (i=5; i>=p; i++){
function playRound(playerSelection, computerSelection) 
{
    if  ((playerSelection == 'rock' && computerSelection == 'paper')    ||
        (playerSelection== "rock" && computerSelection == "scissor")    ||
        (playerSelection == "scissor" && computerSelection == "paper")
        ){
        console.log("You Win! "+ playerSelection + " beats " + computerSelection +"!")
        p+1;
    } 
    else if ( playerSelection === computerSelection){
        console.log("Tie, no points awarded.")
    }
    else{
        console.log("You Lose!"+ computerSelection +" beats "+playerSelection+"!")
        c+1;
    }
    // else if(playerSelection== "rock" && computerSelection == "scissor"){
    //     console.log("You win! Paper beats Rock!")
    // }
    // else if(playerSelection == "scissor" && computerSelection == "rock"){
    //     console.log("You Lose! Paper beats Rock!")
    // }
    // else if(playerSelection == "scissor" && computerSelection == "paper"){
    //     console.log("You win! Paper beats Rock!")
    // }
}
playRound(playerSelection, computerSelection)
}