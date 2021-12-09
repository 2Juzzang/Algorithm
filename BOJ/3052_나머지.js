const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input[i] % 42);
}
arr = [...new Set(arr)];
console.log(arr.length);
// 나머지 값을 다 넣고 중복되는 값을 제거해주는 방식으로 해결했다
