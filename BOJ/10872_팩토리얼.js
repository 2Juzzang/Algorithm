const input = require('fs').readFileSync('example.txt').toString().split('\n');

const num = parseInt(input[0]);

function factorial(n) {
  if (n === 0) return 1;
  if (n === 1) return n;
  else return n * factorial(n - 1);
}
console.log(factorial(num));
