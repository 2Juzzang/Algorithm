// fs
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// rl
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  // 변수
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
