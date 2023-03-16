const fn = (argument?: string): number | null =>
  argument
    ? <number>argument.match(/[A-Z]/g)?.length !== undefined
      ? <number>argument.match(/[A-Z]/g)?.length
      : 0
    : null;

console.log(fn("devMentor"));
console.log(fn());
console.log(fn("OooOoOooOoOooO"));
console.log(fn("ooo"));
