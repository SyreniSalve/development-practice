const arr: number[] = [4, 3, 5];
const sumSquares = (array: number[]): number =>
  array.reduce((num1, num2) => num1 + num2 ** 2, 0);

console.log(sumSquares(arr));
