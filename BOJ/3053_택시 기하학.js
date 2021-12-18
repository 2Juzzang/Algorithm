const input = require('fs').readFileSync('example.txt').toString().split('\n');
const r = parseInt(input[0]);

console.log((Math.PI * r * r).toFixed(6) + '\n' + (2 * r * r).toFixed(6));
