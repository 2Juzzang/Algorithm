const input = require('fs').readFileSync('example.txt').toString().split('\n');

let n = input[0];
for (let i = 1; i <= n; i++) {
  let count = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      // O일 경우 1추가, count = count + 1
      // 처음 O의 경우 0 = 0 + 1,1을 sum에 누적, 두번째 O의 경우 1 = 1 + 1, 2를 sum에 누적하는 방식
      count++;
    } else {
      // O가 아닐경우 초기화
      count = 0;
    }
    // sum에 누적 시켜준다
    sum += count;
  }
  console.log(sum);
}
