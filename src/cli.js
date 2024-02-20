import readlineSync from "readline-sync";

export function askQuestion(question) {
    const name = readlineSync.question(question);
    console.log(`Hello, ${name}!`);
}