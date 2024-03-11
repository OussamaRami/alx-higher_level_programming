#!/usr/bin/node
// Retrieve the command-line arguments
const args = process.argv.slice(2).map(Number);

// Use console.log(...) to print the output
if (args.length <= 1) {
  console.log(0);
} else {
  // Sort the array in descending order
  const sortedArgs = args.sort((a, b) => b - a);

  // Print the second element in the sorted array
  console.log(sortedArgs[1]);
}

