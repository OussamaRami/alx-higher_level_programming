#!/usr/bin/node
const firstArg = process.argv[2];
const integerValue = parseInt(firstArg, 10);
if (isNaN(integerValue)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${integerValue}`);
}
