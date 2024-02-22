#!/usr/bin/env node
import helloAndGetName from '../src/cli.js';
import brainProgressionGame from '../games/brain-progression.js';

const name = helloAndGetName();
brainProgressionGame(name);
