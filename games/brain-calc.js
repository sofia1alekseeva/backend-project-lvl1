#!/usr/bin/env node
import randomInt from '../src/utils/randomInt.js';
import createGame from '../src/index.js';

export default function brainCalcGame(name) {
  const description = 'What is the result of the expression?';
  const gameCallBack = () => {
    const operators = [
      {
        sign: '+',
        method: (a, b) => a + b,
      },
      {
        sign: '-',
        method: (a, b) => a - b,
      },
      {
        sign: '*',
        method: (a, b) => a * b,
      },
    ];
    const randomOperatorIndex = Math.floor(Math.random() * operators.length);
    const firstNumber = randomInt(0, 100);
    const secondNumber = randomInt(0, 100);
    const correctAnswer = operators[randomOperatorIndex].method(firstNumber, secondNumber);
    return {
      question: `${firstNumber} ${operators[randomOperatorIndex].sign} ${secondNumber}`,
      correctAnswer: `${correctAnswer}`,
    };
  };
  createGame(name, description, gameCallBack);
}
