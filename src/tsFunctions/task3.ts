const greetings = "Hello world!";

const noVowels = (text: string) => text.replace(/[aeiou]/gi, "");

console.log(noVowels(greetings));
