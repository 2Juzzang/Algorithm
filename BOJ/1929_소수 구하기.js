const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let M = Number(input[0]);
let N = Number(input[1]);
let arr = [];
let answer = '';

// 소수의 배수를 이용해서 찾기 때문에 0부터 모든 수를 배열에 넣고 true로 바꿈 (true일 경우 소수)
for (let i = 0; i <= N; i++) {
  arr.push(true);
}
// 0과 1은 소수가 아니므로 false
arr[0] = false;
arr[1] = false;

// 2부터 N까지 소수가 아닌 수를 false로 바꿔줘야 함
for (let m = 2; m <= N; m++) {
  // 2부터 N까지 소수의 배수(1을 제외한)를 찾아서 false처리
  if (arr[m]) {
    for (let n = 2; n <= N / m; n++) {
      // 소수가 약수로 있는 수는 소수가 아니므로 false 처리해주는 것
      arr[m * n] = false;
    }
  }
}
for (let j = M; j <= N; j++) {
  // M ~ N의 범위 내에서 true(소수)인 값들만 answer에 저장
  if (arr[j]) answer += j + '\n';
}

console.log(answer.trim());
