#!/usr/bin/env node
import createGame from '../src/index.js';

export default function brainEvenGame(name) {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameCallBack = () => {
    const randomInt = Math.floor(Math.random() * 1000);
    const isEven = randomInt % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    return {
      question: randomInt,
      correctAnswer,
    };
  };
  createGame(name, description, gameCallBack);
}
