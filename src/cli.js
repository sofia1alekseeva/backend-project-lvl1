import readlineSync from 'readline-sync';

export default function askQuestion(question) {
  const name = readlineSync.question(question);
  console.log(`Hello, ${name}!`);
}
