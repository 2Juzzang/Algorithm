const input = require('fs').readFileSync('example.txt').toString().split(' ');

console.log((BigInt(input[0]) + BigInt(input[1])).toString());
