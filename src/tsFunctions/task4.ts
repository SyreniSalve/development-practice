const stringArr: string[] = ["devMentor", "TypeScript", "fundamentals"];

const findShortest = (arrOfStrings: string[]): string => {
  const minLength = Math.min(...arrOfStrings.map((str) => str.length));
  return <string> arrOfStrings.find((str) => str !== undefined? str.length === minLength : 'list is empty.');
};

console.log(findShortest(stringArr));
