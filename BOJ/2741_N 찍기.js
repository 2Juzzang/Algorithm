// 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = '';
for (let i = 1; i <= input[0]; i++) {
  n += i + '\n';
}
console.log(n);
