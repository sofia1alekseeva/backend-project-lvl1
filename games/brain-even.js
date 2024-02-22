#!/usr/bin/env node
import randomInt from '../src/utils/randomInt.js';
import createGame from '../src/index.js';

export default function brainEvenGame(name) {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameCallBack = () => {
    const int = randomInt(0, 1000);
    const isEven = int % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return {
      question: int,
      correctAnswer,
    };
  };
  createGame(name, description, gameCallBack);
}
