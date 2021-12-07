const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let kg = parseInt(input[0]);
// 들고가는 횟수
let count = 0;

// 3kg 이상일 때 5로 나누어 떨어질 때와 아닐 때
while (kg >= 3) {
  if (kg % 5 === 0) {
    count += kg / 5;
    break;
  } else kg -= 3;
  count++;
}
// 위에서 -3kg를 하고나서 kg의 범위가 0 < kg < 3 이면 아래 if문을 탄다.
if (kg < 3 && kg > 0) {
  count = -1;
}

console.log(count);
