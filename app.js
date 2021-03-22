const winner = document.getElementById('result')
const playersBtn = document.getElementsByClassName('selection')
const rock = playersBtn[0]
const paper = playersBtn[1]
const scissor = playersBtn[2]


function playRound(playerSelection, computerPlay){
    let moves = ['Rock','Paper','Scissor']
    playerSelection = playerSelection;
    computerPlay = moves[Math.floor(Math.random() * 3)]
    if(playerSelection === computerPlay){
        winner.innerHTML = "it's a draw"
    }
    else if(playerSelection === 'Rock' && computerPlay === 'Paper'){
        winner.innerHTML = "you lose, paper covers rock!"
    }
    else if(playerSelection === 'Rock' && computerPlay === 'Scissor'){
        winner.innerHTML = 'you win, rock smashes scissor'
    }
    else if(playerSelection === 'Paper' && computerPlay === 'Scissor'){
        winner.innerHTML = 'you lose, scissor cuts paper'
    }    
    else if(playerSelection === 'Paper' && computerPlay === 'Rock'){
        winner.innerHTML = 'you win, paper covers rock'
    }    
    else if(playerSelection === 'Scissor' && computerPlay === 'Rock'){
        winner.innerHTML = 'you lose, rock smashes scissor'
    }    
    else if(playerSelection === 'Scissor' && computerPlay === 'paper'){
        winner.innerHTML = 'you win, scissor cuts paper'
    }    


}

rock.addEventListener('click', function(){
    let moves = ['Rock','Paper','Scissor']
    computerPlay = moves[Math.floor(Math.random() * 3)];
    if(computerPlay === 'Rock'){
        winner.innerHTML = "it's a draw!";
    } else if(computerPlay === 'Paper'){
        winner.innerHTML = "Paper covers Rock, you lose";
    } else if(computerPlay === 'Scissor'){
        winner.innerHTML = "Rock crushes Scissor, you win!"
    }

})
paper.addEventListener('click', function(){
    let moves = ['Rock','Paper','Scissor']
    computerPlay = moves[Math.floor(Math.random() * 3)];
    if(computerPlay === 'Paper'){
        winner.innerHTML = "it's a draw!";
    } else if(computerPlay === 'Rock'){
        winner.innerHTML = "Paper covers Rock, you win!";
    } else if(computerPlay === 'Scissor'){
        winner.innerHTML = "Scissor cuts Paper, you lose"
    }

})
scissor.addEventListener('click', function(){
    let moves = ['Rock','Paper','Scissor']
    computerPlay = moves[Math.floor(Math.random() * 3)];
    if(computerPlay === 'Scissor'){
        winner.innerHTML = "it's a draw!";
    } else if(computerPlay === 'Paper'){
        winner.innerHTML = "Scissor cuts Paper, you win!";
    } else if(computerPlay === 'Rock'){
        winner.innerHTML = "Rock crushes Scissor, you lose"
    }

})
