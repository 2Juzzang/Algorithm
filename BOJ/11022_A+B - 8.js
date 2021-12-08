// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input[0];
for (let i = 1; i <= T; i++) {
  let a = input[i].split(' ')[0] * 1;
  let b = input[i].split(' ')[1] * 1;
  console.log('Case #' + i + ': ' + a + ' + ' + b + ' = ' + (a + b));
}
