// Tail Call Optimization
// https://youtu.be/FYXpOjwYzcs?t=3213

export const factorial = (n, accum = 1) => {
  if (n < 2) {
    return accum;
  }
  return factorial(n - 1, n * accum);
};

console.log(factorial(4));
console.log(factorial(-4));
console.log(factorial(170));
console.log(factorial(170.71057169714451617892336));
console.log(factorial(170.71057169714451617892337));
console.log(factorial(171));
