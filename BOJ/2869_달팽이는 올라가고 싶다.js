const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let v = parseInt(input[2]);
let day = 0;

if ((v - b) % (a - b) === 0) {
  // a만큼 오르고 b만큼 떨어지지만 마지막날은 b만큼 다시 오를 필요가 없으므로 -b
  day = (v - b) / (a - b);
} else {
  // 나누어 떨어지지 않는 경우 하루가 더 걸리므로 올림하여 처리
  day = Math.ceil((v - b) / (a - b));
}

console.log(day);

// 처음 답, 반복문 사용, 시간 초과로 틀림
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// let a = parseInt(input[0]);
// let b = parseInt(input[1]);
// let v = parseInt(input[2]);
// let day = 0;
// while (v > 0) {
//   v = v - a;
//   if (v <= 0) {
//     day++;
//     break;
//   } else v = v + b;
//   day++;
//   if (v <= 0) break;
// }

// console.log(day);
