#!/usr/bin/env node
import randomInt from '../src/utils/randomInt.js';
import createGame from '../src/index.js';

export default function brainProgressionGame(name) {
  const description = 'What number is missing in the progression?';
  const gameCallBack = () => {
    let startNumber = randomInt(1, 100);
    const step = randomInt(1, 10);
    const progressionLength = randomInt(5, 10);
    const progressionArray = [...new Array(progressionLength)].map(() => {
      startNumber += step;
      return startNumber;
    });
    const answerIndex = Math.floor(Math.random() * progressionArray.length);
    const correctAnswer = progressionArray[answerIndex].toString();
    const question = progressionArray.reduce((acc, cur, index) => {
      if (index === answerIndex) {
        acc += '..';
      } else {
        acc += cur;
      }
      if (index !== progressionArray.length - 1) {
        acc += ' ';
      }
      return acc;
    }, '');

    return {
      question,
      correctAnswer,
    };
  };
  createGame(name, description, gameCallBack);
}
