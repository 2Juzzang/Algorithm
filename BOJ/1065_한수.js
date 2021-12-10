const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = parseInt(input[0]);

// 0부터 시작하므로 n + 1 을 해준다. n으로만 할 경우 arr[n]이 undefined
let arr = Array(n + 1).fill(false);
let count = 0;
for (let i = 1; i <= n; i++) {
  // n의 각 자릿수를 반환
  let a = parseInt((i / 100) % 10);
  let b = parseInt((i / 10) % 10);
  let c = parseInt(i % 10);
  // 1~99의 경우 모두 한수이므로 true
  if (i < 100) {
    arr[i] = true;
  }
  // 세 자리수의 경우, 100의 자리수 - 10의 자리수 = 10의 자리수 - 1의 자리수 가 일치해야 한수
  else if (i < 1000) {
    if (a - b === b - c) {
      arr[i] = true;
    }
  }
  // 조건은 1000이하 였으므로 else는 1000에 해당하는데 이를 false처리했다.
  else arr[i] = false;

  // true처리해준 한수의 개수를 카운트
  if (arr[i] === true) {
    count++;
  }
}
console.log(count);
