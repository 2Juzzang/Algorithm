const input = require('fs').readFileSync('example.txt').toString().split('\n');

const string = input[1].split('');

let sum = 0;
for (let i = 0; i < input[0]; i++) {
  sum += parseInt(string[i]);
}
console.log(sum);
