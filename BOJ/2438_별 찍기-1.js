const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
let star = '';
for (let i = 0; i < N; i++) {
  star += '*';
  console.log(star);
}
