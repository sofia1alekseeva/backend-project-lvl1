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
    const randomOperator = Math.floor(Math.random() * operators.length);
    const firstNumber = randomInt(10);
    const secondNumber = randomInt(10);
    const correctAnswer = operators[randomOperator].method(firstNumber, secondNumber);
    return {
      question: `${firstNumber} ${operators[randomOperator].sign} ${secondNumber}`,
      correctAnswer: `${correctAnswer}`,
    };
  };
  createGame(name, description, gameCallBack);
}
