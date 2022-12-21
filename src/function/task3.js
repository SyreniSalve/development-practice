function addAB (a, b) {
    function addFn() {
        return a + b;
    };
    return addFn();
};
console.log(addAB(2, 3));