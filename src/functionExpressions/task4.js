const fn = (...args) => {
    let argsWithSpaceCounter = 0;
    for (const arg of args) {
       if (/\s/.test(arg)) argsWithSpaceCounter++;
    }
    return argsWithSpaceCounter;
}

console.log(fn('dev Mentor', 'devMentor', ' '));
console.log(fn('a', 'b', 'c', 'd', 'e', 'f'));