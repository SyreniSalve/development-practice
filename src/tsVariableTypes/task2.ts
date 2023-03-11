const stringsArray: string[] = ["H", "Ha", "Hay"];
const numArray: number[] = [];

stringsArray.map((word: string) => numArray.push(word.length));
console.log(numArray);
