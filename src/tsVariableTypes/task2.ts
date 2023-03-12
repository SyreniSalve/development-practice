const stringsArray: string[] = ["H", "Ha", "Hay"];
const numArray: number[] = [];

stringsArray.map((word) => numArray.push(word.length));
console.log(numArray);
