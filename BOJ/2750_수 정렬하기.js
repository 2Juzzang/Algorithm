const input = require('fs').readFileSync('example.txt').toString().split('\n');

let arr = [];
for (let i = 1; i <= input[0]; i++) {
  arr.push(parseInt(input[i]));
  arr.sort((a, b) => a - b);
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
