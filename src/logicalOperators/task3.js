const a = undefined;
const b = null;
const c = 0;
const d = 5;

console.log(a || b || c || d);
console.log(a ?? b ?? c ?? d);