#!/usr/bin/env node
import createGame from '../src/index.js';

export default function brainCalcGame(name) {
  const description = 'What is the result of the expression?';
  const gameCallBack = () => {
    const randomInt = () => Math.floor(Math.random() * 10);
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
    const firstNumber = randomInt();
    const secondNumber = randomInt();
    const correctAnswer = operators[randomOperator].method(firstNumber, secondNumber);
    return {
      question: `${firstNumber} ${operators[randomOperator].sign} ${secondNumber}`,
      correctAnswer: `${correctAnswer}`,
    };
  };
  createGame(name, description, gameCallBack);
}
