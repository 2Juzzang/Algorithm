const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
let star = '';
let blank = '';
for (let i = 1; i <= N; i++) {
  // (j가 있는)for문 바깥에서 blank를 출력하면
  // i가 1일 땐 4칸의 공백, 2일 땐 3칸...5일 땐 0칸의 공백
  for (let j = 0; j < N - i; j++) {
    blank += ' ';
  }
  star += '*';
  // 바깥에서 출력한 blank에 star를 더해준다.
  // star는 1개~5개까지 차례로 출력되야하므로 for문 안에서 출력한다.
  console.log(blank + star);
  // blank를 초기화('')해주지 않으면 누적된 상태로 blank가 계속 추가된다.
  blank = '';
}
