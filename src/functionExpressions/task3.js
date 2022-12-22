function stringFn () {
    return 'devMentor short function';
}

const fn = () => stringFn();

const fn2 = (p) => p;

console.log(fn2(fn()));