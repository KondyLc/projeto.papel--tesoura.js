const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoise) => {
  playTheGame(humanChoise, playMachine())

}

const playMachine = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = Math.floor(Math.random() * 3)

  return choices[randomNumber]
}

const playTheGame = (human, machine) => {
  console.log('humano: ' + human + ' maquina: ' + machine);

  if (human === machine) {
    result.innerHTML = 'Deu Empate!' + ' &#x1F605'
  } else if (
    (human === 'paper' && machine === 'rock') ||
    (human === 'rock' && machine === 'scissors') ||
    (human === 'scissors' && machine === 'paper')
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = "Você Ganhou!" + ' &#x1F44F' + '&#x1F60D'
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Você perdeu para a Alexa!" + ' &#x1F602'
  }

}

/* 
papel -> pedra -> tesoura
*/