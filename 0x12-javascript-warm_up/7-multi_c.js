#!/usr/bin/node
const arg = process.argv[2];
const xtimes = parseInt(arg, 10);
if (isNaN(xtimes) || xtimes <= 0) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < xtimes; i++) {
    console.log("C is fun");
  }
}
