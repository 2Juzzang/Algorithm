const input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');

let sum = 0;
let max;
input[1].split(' ');
for (let i = 0; i < input[0]; i++) {
  max = Math.max(...input[1].split(' '));
  sum += parseInt(input[1].split(' ')[i]);
  ((sum / max) * 100) / input[0];
}
console.log(((sum / max) * 100) / input[0]);
// 순수한 수학문제라고 생각하고 풀었다.
