const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let i = 0;
while (true) {
  let a = parseInt(input[i].split(' ')[0]);
  let b = parseInt(input[i].split(' ')[1]);
  i++;
  if (a + b === 0) break;
  console.log(a + b);
}
