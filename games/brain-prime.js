#!/usr/bin/env node
import randomInt from '../src/utils/randomInt.js';
import createGame from '../src/index.js';

export default function brainPrimeGame(name) {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameCallBack = () => {
    const int = randomInt(1, 10);
    let correctAnswer = 'yes';
    for (let i = int - 1; i > 1; i--) {
      if (int % i === 0) {
        correctAnswer = 'no';
      }
    }
    return {
      question: int,
      correctAnswer,
    };
  };
  createGame(name, description, gameCallBack);
}
