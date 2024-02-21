#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function createGame(name, description, gameCallback) {
  console.log(description);
  for (let i = 1; i <= 3; i++) {
    const { correctAnswer, question } = gameCallback();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      i = 4;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
