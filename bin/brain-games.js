#!/usr/bin/env node

import helloAndGetName from '../src/cli.js';
// import brainCalcGame from './brain-calc.js';
import brainGCDGame from './brain-gcd.js';
// import brainEvenGame from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = helloAndGetName();
// brainEvenGame(name);
// brainCalcGame(name);
brainGCDGame(name);
