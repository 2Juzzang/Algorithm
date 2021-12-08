const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const year = parseInt(input[0]);

// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
// x의 배수는 x로 나누어 떨어지는 수
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(1);
} else console.log(0);
