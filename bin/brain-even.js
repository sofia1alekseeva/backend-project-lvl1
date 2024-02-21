import readlineSync from 'readline-sync';

export default function brainEvenGame(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i++) {
    const randomInt = Math.floor(Math.random() * 1000);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = randomInt % 2 === 0;
    const isAnswerNo = answer.toLowerCase() === 'no';
    const isAnswerYes = answer.toLowerCase() === 'yes';
    const correctAnswer = isEven ? 'yes' : 'no';
    if (isEven && isAnswerYes) {
      console.log('Correct!');
    } else if (
      (!isAnswerNo && !isAnswerYes) || (!isEven && isAnswerYes) || (isEven && isAnswerNo)
    ) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n
    Let's try again, ${name}!`);
      i = 4;
    } else if (!isEven && isAnswerNo) {
      console.log('Correct!');
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
