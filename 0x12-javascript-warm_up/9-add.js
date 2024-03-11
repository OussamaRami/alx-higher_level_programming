#!/usr/bin/node
// Define the add function
function add(a, b) {
  return a + b;
}

// Retrieve the first and second arguments
const arg1 = parseInt(process.argv[2], 10);
const arg2 = parseInt(process.argv[3], 10);

// Use console.log(...) to print the output
if (isNaN(arg1) || isNaN(arg2)) {
  console.log("NaN");
} else {
  console.log(add(arg1, arg2));
}

