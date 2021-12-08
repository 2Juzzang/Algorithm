const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for (let i = 1; i <= input[0]; i++) {
  let a = parseInt(input[i].split(' ')[0]);
  let b = parseInt(input[i].split(' ')[1]);
  console.log(a + b);
}
