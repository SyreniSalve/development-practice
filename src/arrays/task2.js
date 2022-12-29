const arr = [];

const anotherArr = [];

const someText = 'Bonus push a letter to another array if index is prime';

for(let i = 0; i < someText.length; i++) {
    if(i % 2 === 0) arr.push(someText[i]);
};

console.log(arr);

const isPrime = (n) => { 
    if (n <= 1) return false;
    for(let i = 2; i < n; i++) {
        if (n % i == 0) return false;    
    };
    return true;
    }; 

const getArrLettersOfPrimeIndexes = (text) => {
    for(let i = 0; i < text.length; i++) {
        if(isPrime(i)) anotherArr.push(text[i]);
    };
    console.log(anotherArr);
};

getArrLettersOfPrimeIndexes(someText);
 
    