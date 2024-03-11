#!/usr/bin/node
// Retrieve the first argument
const arg = process.argv[2];

// Convert the argument to an integer using parseInt
const size = parseInt(arg, 10);

// Use console.log(...) to print the output
if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}

