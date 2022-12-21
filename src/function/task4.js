function binaryFn(a, b) {
    return  a * b;
};

function fn (a, b, c = binaryFn) {
   return c(a, b);
}

console.log(fn(3, 8));