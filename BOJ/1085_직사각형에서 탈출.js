const input = require('fs').readFileSync('example.txt').toString().split(' ');

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
let min = [];

if (w - x <= x) {
  min.push(w - x);
} else min.push(x);
if (h - y <= y) {
  min.push(h - y);
} else min.push(y);
console.log(Math.min(...min));
