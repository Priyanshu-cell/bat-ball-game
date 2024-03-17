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
    resultMsg = `It's a tie`;
  } else if (
    (computerChoice === 'Ball' && userChoice === 'Bat') ||
    (computerChoice === 'Bat' && userChoice === 'Stump') ||
    (computerChoice === 'Stump' && userChoice === 'Ball')
  ) {
    resultMsg = `User has won`;
  } else {
    resultMsg = 'Computer has won';
  }

  alert(`You have chosen ${userChoice}. Computer choice is ${computerChoice}. And ${resultMsg}`);
}
