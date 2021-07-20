// defining constant references to values
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let computerSelection;
let computerResult;
let result;

// a player selects an option from rock, paper, and scissors, event listener records the choice
rock.addEventListener('click', function(e) {
    game('rock')
})
paper.addEventListener('click', function(e) {
    game('paper')
})
scissors.addEventListener('click', function(e) {
    game('scissors')
})

// main game function in which computer chooses one option by random and then compares it in if statements to the player choice
function game(playerSelection) {
    computerSelection = Math.floor(Math.random() * 3);
    console.log('computerSelection:', computerSelection);
    if (computerSelection === 0) {
        computerResult = 'rock'
    } else if (computerSelection === 1) {
        computerResult = 'paper';
    } else {
        computerResult = 'scissors';
    }
    console.log('computer:', computerResult);
    
    // tie
    if (computerResult == playerSelection) {
        result = 'tie';
    // win
    } else if (computerResult == 'rock' && playerSelection == 'paper' || computerResult == 'paper' && playerSelection == 'scissors' || computerResult == 'scissors' && playerSelection == 'rock') {
        console.log('won');
        result = 'won';
    // lose
    } else {
        console.log('lost');
        result = 'lost';
    }
    // Result
    document.getElementById('player-result').innerHTML = `It's a ${result} game! The computer chose ${computerResult}.`;
  }