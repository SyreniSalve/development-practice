const stringArr: string[] = ["devMentor", "TypeScript", "fundamentals"];

const findShortest = (arrOfStrings: string[]) =>
  arrOfStrings.find((s: string) => Math.min(s.length));

console.log(findShortest(stringArr));
