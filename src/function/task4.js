function binaryFn(a, b) {
    return  a * b;
};

function fn (a, b, c) {
    c = binaryFn();
    return binaryFn(a, b);
};

console.log(fn(3, 8, binaryFn(3, 8)));