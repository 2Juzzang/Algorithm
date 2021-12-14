const input = require('fs').readFileSync('example.txt').toString().split(' ');

const a = input[0];
const b = input[1];
const c = input[2];

if (c - b > 0) {
  console.log(Math.floor(a / (c - b)) + 1);
} else console.log(-1);
