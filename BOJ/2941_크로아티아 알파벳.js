const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const change = input[0]
  .replace(/c=/g, 'A')
  .replace(/c-/g, 'B')
  .replace(/dz=/g, 'C')
  .replace(/d-/g, 'D')
  .replace(/lj/g, 'E')
  .replace(/nj/g, 'F')
  .replace(/s=/g, 'G')
  .replace(/z=/g, 'H');

console.log(change.length);
