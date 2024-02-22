#!/usr/bin/env node
import helloAndGetName from '../src/cli.js';
import brainPrimeGame from '../games/brain-prime.js';

const name = helloAndGetName();
brainPrimeGame(name);
