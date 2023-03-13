const stringsArray: string[] = ["H", "Ha", "Hay"];
const numArray: number[] = [];

const stringsLengthArray = (array: string[]) =>
  array.map((word) => numArray.push(word.length));

console.log(stringsLengthArray(stringsArray));
