const arr: number[] = [4, 3, 5];
const sumSquares = (array: number[]) =>
  array.reduce((num1: number, num2: number) => num1 + num2 ** 2, 0);

console.log(sumSquares(arr));
