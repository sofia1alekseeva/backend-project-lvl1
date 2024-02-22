#!/usr/bin/env node
import randomInt from '../src/utils/randomInt.js';
import createGame from '../src/index.js';

export default function brainGCDGame(name) {
  const description = 'Find the greatest common divisor of given numbers.';
  const gameCallBack = () => {
    const firstNumber = randomInt(1, 100);
    const secondNumber = randomInt(1, 100);
    const smallestNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
    let correctAnswer;
    for (let i = smallestNumber; i >= 1; i--) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        correctAnswer = i.toString();
        i = 0;
      }
    }
    return {
      question: `${firstNumber} ${secondNumber}`,
      correctAnswer,
    };
  };
  createGame(name, description, gameCallBack);
}
