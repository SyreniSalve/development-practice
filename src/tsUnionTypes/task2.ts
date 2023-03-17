const fn = (argument?: string): number =>
  argument?.match(/[A-Z]/g)?.length || 0
  

console.log(fn("devMentor"));
console.log(fn());
console.log(fn("OooOoOooOoOooO"));
console.log(fn("ooo"));
