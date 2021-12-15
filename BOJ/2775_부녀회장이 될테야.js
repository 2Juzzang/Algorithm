const input = require('fs').readFileSync('example.txt').toString().split('\n');

const a = input[1];
const b = input[2];
let sum = 0;
for (let i = 1; i <= b; i++) {
  // sum += i;
  for (let j = 1; j < b; j++) {
    sum += j;
    console.log(sum);
  }
  // console.log(sum);
}
