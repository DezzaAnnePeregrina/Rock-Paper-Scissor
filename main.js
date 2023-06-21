
const playerScoreEl = document.getElementById('playerScore')
const playerchoiceEl = document.getElementById('playerChoice')

const botScoreEl = document.getElementById('botScore')
const botchoiceEl = document.getElementById('botChoice')

const resulText = document.getElementById('result-Text')

const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissor = document.getElementById('playerScissor')

const botRock = document.getElementById('botRock')
const botPaper = document.getElementById('botPaper')
const botScissor = document.getElementById('botScissor')

const allGameIcons = document.querySelectorAll('.far')


let playerScoreNumber = 0
let botScoreNumber = 0
let botChoice = ''

function resetSelected(){
    allGameIcons.forEach((i) => {
        i.classList.remove('selected')
    })
}

function resetAll(){
    playerScoreNumber = 0
    botScoreNumber = 0
    playerScoreEl.textContent = playerScoreNumber
    botScoreEl.textContent = botScoreNumber
    playerchoiceEl.textContent = ''
    botchoiceEl.textContent = ''
    resulText.textContent = ''
    resetSelected()
}

function botRandomChoice(){
    const botChoiceNumber = Math.random()
    
    if(botChoiceNumber < 0.3){
        botChoice = 'rock'
    } else if(botChoiceNumber <= 0.6){
        botChoice = 'paper'
    } else {
        botChoice = 'scissor'
    }
}

function updateScore(playerChoice){
    console.log(playerChoice,botChoice)
    if(playerChoice === botChoice){
        resulText.textContent = "It's a Tie."
    } else{
        if(playerChoice === 'rock' && botChoice === 'scissor' || playerChoice === 'paper' && botChoice === 'rock' || playerChoice === 'scissor' && botChoice === 'paper'){
            resulText.textContent = "You Won!"
            playerScoreNumber++
            playerScoreEl.textContent = playerScoreNumber
        } else{
            resulText.textContent = "You Lost!"
            botScoreNumber++
            botScoreEl.textContent = botScoreNumber
        }
    }
}

function checkResult(playerChoice){
    resetSelected()
    botRandomChoice()
    displaybotChoice()
    updateScore(playerChoice)
}

function displaybotChoice(){
    switch(botChoice){
        case 'rock':
            botRock.classList.add('selected');
            botchoiceEl.textContent = ' --- Rock';
            break;

        case 'paper':
            botPaper.classList.add('selected');
            botchoiceEl.textContent = ' --- Paper';
            break;

        case 'scissor':
            botScissor.classList.add('selected');
            botchoiceEl.textContent = ' --- Scissor';
            break;
        
        default:
            break;
    }
}

function select (playerChoice){
    checkResult(playerChoice)
    switch(playerChoice){
        case 'rock':
            playerRock.classList.add('selected');
            playerchoiceEl.textContent = ' --- Rock';
            break;

        case 'paper':
            playerPaper.classList.add('selected');
            playerchoiceEl.textContent = ' --- Paper';
            break;

        case 'scissor':
                playerScissor.classList.add('selected');
                playerchoiceEl.textContent = ' --- Scissor';
                break;
        
        default:
            break;
    }
}

resetAll()