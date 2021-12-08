const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((N) => parseInt(N));

const limit = 123456 * 2;
let arr = [];

// 소수의 배수를 이용해서 찾기 때문에 0부터 모든 수를 배열에 넣고 true로 바꿈 (true일 경우 소수)
for (let i = 0; i <= limit + 1; i++) {
  arr.push(true);
}
// 0과 1은 소수가 아니므로 false
arr[0] = false;
arr[1] = false;

for (let m = 2; m <= limit + 1; m++) {
  if (arr[m]) {
    for (let n = 2; n <= (limit + 1) / m; n++) {
      arr[m * n] = false;
    }
  }
}
function primeNum(N) {
  let answer = 0;
  for (let j = N + 1; j <= 2 * N; j++) {
    if (arr[j]) answer++;
  }

  console.log(answer);
}
for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) break;
  primeNum(input[i]);
}
