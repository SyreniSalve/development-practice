const fn = (argument?: string | undefined) =>
  typeof argument === "string" ? argument.match(/[A-Z]/g)?.length : null;

console.log(fn("devMentor"));
console.log(fn());
console.log(fn("OooOoOooOoOooO"));
