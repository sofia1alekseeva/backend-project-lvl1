#!/usr/bin/env node
import helloAndGetName from '../src/cli.js';
import brainGCDGame from '../games/brain-gcd.js';

const name = helloAndGetName();
brainGCDGame(name);
