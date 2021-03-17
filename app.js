
function playRound(playerSelection, computerPlay){
    let moves = ['Rock','Paper','Scissor']
    playerSelection = prompt('what is your play?')
    computerPlay = moves[Math.floor(Math.random() * 3)]
    if(playerSelection === computerPlay){
        return "it's a draw"
    }
    else if(playerSelection === 'Rock' && computerPlay === 'Paper'){
        return "you lose, paper covers rock!"
    }
    else if(playerSelection === 'Rock' && computerPlay === 'Scissor'){
        return 'you win, rock smashes scissor'
    }
    else if(playerSelection === 'Paper' && computerPlay === 'Scissor'){
        return 'you lose, scissor cuts paper'
    }    
    else if(playerSelection === 'Paper' && computerPlay === 'Rock'){
        return 'you win, paper covers rock'
    }    
    else if(playerSelection === 'Scissor' && computerPlay === 'Rock'){
        return 'you lose, rock smashes scissor'
    }    
    else if(playerSelection === 'Scissor' && computerPlay === 'paper'){
        return 'you win, scissor cuts paper'
    }    


}


console.log(playRound())