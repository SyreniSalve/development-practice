const stringArr: string[] = ["devMentor", "TypeScript", "fundamentals"];

const findShortest = (arrOfStrings: string[]): string[] => {
  const minLength = Math.min(...arrOfStrings.map((str) => str.length));
  return arrOfStrings.filter((str) => str.length === minLength);
};

console.log(findShortest(stringArr));
