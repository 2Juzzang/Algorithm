// 셀프넘버가 아닌 값
function notSelfNumber(n) {
  // n + n의 각 자리수의 합이므로
  let sum = n;
  while (true) {
    if (n == 0) break;
    // n이 0이 될 때까지 10으로 나눈 나머지를 계속해서 더해준다
    sum += n % 10;
    // n의 값은 n을 10으로 나눴을 때의 몫으로 바꿔줌
    n = parseInt(n / 10);
  }
  return sum;
}

let range = [];
for (let i = 0; i <= 10000; i++) {
  range.push(i);
}
for (let i = 1; i <= 10000; i++) {
  // 셀프넘버가 아닌 값은 false처리
  range[notSelfNumber(i)] = false;
}

for (let i = 1; i <= 10000; i++) {
  // 셀프넘버만 출력
  if (range[i] !== false) {
    console.log(range[i]);
  }
}
