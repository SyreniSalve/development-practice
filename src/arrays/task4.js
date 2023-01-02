const fn = (arr) => (arr.reduce((a,b) => a + b, 0)) / arr.length;

const ARRAY_LENGTH = 10;

const randomArray = [];

for(let i = 0; i < ARRAY_LENGTH; i++) {
    randomArray.push(Math.floor(Math.random() * 20));
};

console.log(randomArray);

console.log(fn(randomArray));