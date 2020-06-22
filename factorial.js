/* Non-Optimised Version*/
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

/* Using Memoization */
let cache = {};
function memoizedFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  if (cache[n]) {
    return cache[n];
  }
  cache[n] = n * memoizedFactorial(n - 1);
  return cache[n];
}
/* The memoized algorithm has a time complexity og O(n) while also having a space complexity of O(n) */