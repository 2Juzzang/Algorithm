const input = require('fs').readFileSync('example.txt').toString().split('\n');
const num = parseInt(input[0]);
function f(n) {
  let sum = 0;
  if (n < 2) {
    sum += n;
    return sum;
  } else return f(n - 1) + f(n - 2);
}
console.log(f(num));
