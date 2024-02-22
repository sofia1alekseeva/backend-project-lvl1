#!/usr/bin/env node
import helloAndGetName from '../src/cli.js';
import brainEvenGame from '../games/brain-even.js';

const name = helloAndGetName();
brainEvenGame(name);
