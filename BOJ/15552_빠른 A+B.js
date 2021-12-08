const input = require('fs').readFileSync('example.txt').toString().split('\n');

const n = parseInt(input[0]);
let answer = '';
for (let i = 1; i <= n; i++) {
  let a = parseInt(input[i].split(' ')[0]);
  let b = parseInt(input[i].split(' ')[1]);
  answer += a + b + '\n';
}
console.log(answer);
