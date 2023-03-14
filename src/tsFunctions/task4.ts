const stringArr: string[] = ["devMentor", "TypeScript", "fundamentals"];

const findShortest = (arrOfStrings: string[]): string | undefined => {
  const minLength = Math.min(...arrOfStrings.map((str) => str.length));
  return arrOfStrings.find((str) => str.length === minLength);
};

console.log(findShortest(stringArr));
