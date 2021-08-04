var items = ['rock', 'paper', 'scissor'];                           //init things to play with
var p = 0, c = 0, i = 0, t = 0;  

function computerPlay(items){                                       //computer side function
    return items[Math.floor(Math.random()*items.length)];
}


    function playRound() 
{
    let playerSelection = prompt("Input Your Selection!").toLowerCase();
    let computerSelection = computerPlay(items); 
    if  (   (playerSelection == 'paper' && computerSelection == 'rock')    ||
            (playerSelection== "rock" && computerSelection == "scissor")    ||
            (playerSelection == "scissor" && computerSelection == "paper")
        )
    {
        console.log("You Win! "+ playerSelection + " beats " + computerSelection +"!");
        p++;
        i++;
        game()
    } 
    else if ( playerSelection === computerSelection)
    {
        console.log("Tie, no points awarded.")
        i++;
        game()
    }
    else 
    {
        console.log("You Lose!"+ computerSelection +" beats "+playerSelection+"!")
        c++;
        i++;
        game()
    }
}
function game()
{
    while( i <= 4 ){
        console.log(i);
        playRound()
    }
    if((i === 4) && (p>c)){
        console.log("You win bish!!")
    }
    else if((i === 4) && (c>p)){
        console.log("Computer Wins beyotch!")
    }
}
game()
// if((i === 4) && (p>c)){
//     console.log("You win bish!!")
// }
// else if((i === 4) && (c>p)){
//     console.log("Computer Wins beyotch!")
// }