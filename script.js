let score = {
  win: 0,
  lost: 0,
  tie: 0,
};

function playGame(userChoice) {
  console.log(`You have chosen ${userChoice}`);

  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber >= 0 && randomNumber < 1) {
    computerChoice = 'Bat';
  } else if (randomNumber >= 1 && randomNumber < 2) {
    computerChoice = 'Ball';
  } else {
    computerChoice = 'Stump';
  }

  console.log(`Computer choice is ${computerChoice}`);

  let resultMsg;
  if (computerChoice === userChoice) {
    score.tie++;
    resultMsg = `It's a tie`; 
  } else if (
    (computerChoice === 'Ball' && userChoice === 'Bat') ||
    (computerChoice === 'Bat' && userChoice === 'Stump') ||
    (computerChoice === 'Stump' && userChoice === 'Ball')
  ) {
    score.win++;
    resultMsg = `User has won`;
  } else {
    score.lost++;
    resultMsg = 'Computer has won';
  }

  alert(`You have chosen ${userChoice}. Computer choice is ${computerChoice}.
  ${resultMsg}
  
  Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}
  `);
}
