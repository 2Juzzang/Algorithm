// 처음엔 이렇게 짰는데 런타임 에러(EACCES)가 계속 떠서 readline을 사용했다
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const X = input[0];
const Y = input[1];
if (X > 0 && Y > 0) {
  console.log(1);
} else if (X < 0 && Y > 0) {
  console.log(2);
} else if (X < 0 && Y < 0) {
  console.log(3);
} else if (X > 0 && Y < 0) {
  console.log(4);
}

// 답안 제출 코드
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [X, Y] = input;
  if (X > 0 && Y > 0) {
    console.log(1);
  } else if (X < 0 && Y > 0) {
    console.log(2);
  } else if (X < 0 && Y < 0) {
    console.log(3);
  } else if (X > 0 && Y < 0) {
    console.log(4);
  }
  process.exit();
});
