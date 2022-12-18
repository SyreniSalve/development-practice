function fn (a) {
    function result() {
        return a;
    };
    return result();
};

console.log(fn(5));