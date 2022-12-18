function binaryFn(a, b) {
    return  a * b;
};

function fn (a, b, c) {
    return c = binaryFn(a, b);
};

console.log(fn(3, 8));