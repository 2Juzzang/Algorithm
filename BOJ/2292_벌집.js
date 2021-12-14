const input = require('fs').readFileSync('example.txt').toString().split(' ');

let bee = 1;
let distance = 1;
while (bee < input[0]) {
  bee = bee + 6 * distance;
  distance++;
}
console.log(distance);
