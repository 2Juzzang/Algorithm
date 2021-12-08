const input = require('fs').readFileSync('example.txt').toString().split('\n');
let n = parseInt(input[0].split(' '));
let x = parseInt(input[0].split(' ')[1]);
let a = input[1].split(' ');
let num = '';
for (let i = 0; i < n; i++) {
  if (x > a[i]) {
    num += a[i] + ' ';
  } else;
}
console.log(num);
