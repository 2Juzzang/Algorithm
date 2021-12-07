const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = parseInt(input[0]);
// 사이클 길이
let count = 0;
while (num >= 0) {
  // 소수점 이하를 내려서 몫의 정수값만 추출
  let a = Math.floor(num / 10);
  // num의 나머지를 구해서 1의 자리 수를 추출
  let b = num % 10;
  let c = a + b;
  // c가 10이 넘는 경우 1의 자리수만 구해야 하므로 % 10
  num = b * 10 + (c % 10);
  // 한 사이클을 돌았으므로 카운트를 늘림
  count++;
  if (num === parseInt(input[0])) break;
}

console.log(count);
