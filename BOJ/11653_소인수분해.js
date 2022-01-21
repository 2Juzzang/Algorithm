const input = require('fs').readFileSync('example.txt').toString().split('\n');

console.log(parseInt(input[0]) / 2);
