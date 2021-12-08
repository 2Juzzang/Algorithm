// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = '';
//2741번의 반대 문제로 N부터 1까지 역순, i가 1이 될 때까지 i를 1씩 빼준다.
for (let i = input[0]; i >= 1; i--) {
  n += i + '\n';
}
console.log(n);
