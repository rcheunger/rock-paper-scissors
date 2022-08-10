let computerScore = 0
let playerScore = 0

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

function getComputerChoice () {
    let selection = ['rock', 'paper', 'scissors']
    return selection [Math.floor(Math.random() * selection.length)]
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    console.log(computerSelection)
    let result = ''

    if (playerSelection == 'rock' && computerSelection == 'scissors' || 
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper') 
    {
        playerScore += 1
        result = ('You win, ' + playerSelection + ' beats ' + computerSelection)
    }

    else if (playerSelection == computerSelection)
    {
        result = ('Its a tie')
    }

    else 
    {
        computerScore += 1
        result = ('You lose, ' + computerSelection + ' beats ' + playerSelection)
    }

    if (playerScore === 5) 
    {
        result = ('YOU WIN! RELOAD TO PLAY AGAIN')
        disableButtons()
    }

    if (computerScore === 5) 
    {
        result = ('COMPUTER WINS! RELOAD TO PLAY AGAIN')
        disableButtons()
    }

    document.getElementById("result").innerHTML = result
    document.getElementById("score").innerHTML = ('Your score = ' + playerScore + ' Computer score = ' + computerScore) 
    return
}


function disableButtons() {
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
}


rock.addEventListener("click", function(){
    playRound(rock.value)
})
paper.addEventListener("click", function(){
    playRound(paper.value)
})
scissors.addEventListener("click", function(){
    playRound(scissors.value)
})