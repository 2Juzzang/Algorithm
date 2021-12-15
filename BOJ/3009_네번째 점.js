const input = require('fs').readFileSync('example.txt').toString().split('\n');

let X = [];
let Y = [];
let x;
let y;
for (let i = 0; i < 3; i++) {
  X.push(parseInt(input[i].split(' ')[0]));
  Y.push(parseInt(input[i].split(' ')[1]));
}
X.sort((a, b) => a - b);
Y.sort((a, b) => a - b);
// 값은 세 개가 주어지고 같은 값은 두 개가 주어지므로 정렬 후에는 0,1번째 값이 같거나 1,2번째 값이 같다.
// 배열의 0번째 2번째는 반드시 서로 다른 값을 가진다.

x = X[0] === X[1] ? X[2] : X[0];
y = Y[0] === Y[1] ? Y[2] : Y[0];

console.log(x, y);
