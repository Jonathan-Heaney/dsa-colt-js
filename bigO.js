// Write a function that calculates the sum of all numbers from 1 up to (and including) some number n

// 5n + 2 operations, but we actually just care about the general trend
// As n grows, the number of operations grows roughly proportionally with n
function addUpTo(n) {
  let total = 0; // 1 assignment
  for (
    let i = 1 /* 1 assignment */;
    i <= n /* n comparisons */;
    i++ /* n additions and n assignments */
  ) {
    total += i; // n additions and n assignments. As n grows, there are more assignments
  }
  return total;
}

console.log(addUpTo(100));

// 3 operations no matter what n is; O is constant
function addUpToFormula(n) {
  return (n * (n + 1)) / 2; // 3 operations. It doesn't matter what n is
}

console.log(addUpToFormula(100));
