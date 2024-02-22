#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function helloAndGetName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
