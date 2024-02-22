#!/usr/bin/env node
import helloAndGetName from '../src/cli.js';
import brainCalcGame from '../games/brain-calc.js';

const name = helloAndGetName();
brainCalcGame(name);
