#!/usr/bin/node
// Define the factorial function
function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }

  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

// Retrieve the first argument
const arg = parseInt(process.argv[2], 10);

// Use console.log(...) to print the output
console.log(factorial(arg));

