const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(N + ' * ' + '' + i + ' = ' + N * i);
}
